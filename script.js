let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskInput = document.getElementById("taskInput");

const dueDate = document.getElementById("dueDate");

const taskList = document.getElementById("taskList");

const addBtn = document.getElementById("addBtn");

const searchInput = document.getElementById("searchInput");

const counter = document.getElementById("counter");

const darkBtn = document.getElementById("darkBtn");

let currentFilter = "all";

function saveTasks(){

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

function updateCounter(){

  counter.innerText = `Total Tasks: ${tasks.length}`;

}

function renderTasks(){

  taskList.innerHTML = "";

  let searchText = searchInput.value.toLowerCase();

  let filteredTasks = tasks.filter(task => {

    let matchFilter = true;

    if(currentFilter === "active"){
      matchFilter = !task.completed;
    }

    if(currentFilter === "completed"){
      matchFilter = task.completed;
    }

    return matchFilter &&
      task.text.toLowerCase().includes(searchText);

  });

  filteredTasks.forEach((task,index) => {

    const li = document.createElement("li");

    li.draggable = true;

    li.dataset.index = index;

    if(task.completed){
      li.classList.add("completed");
    }

    li.innerHTML = `
      <div class="task-info">

        <strong>${task.text}</strong>

        <small>Due: ${task.date}</small>

      </div>

      <div>

        <button onclick="toggleTask(${index})">✔</button>

        <button onclick="editTask(${index})">✏</button>

        <button onclick="deleteTask(${index})">❌</button>

      </div>
    `;

    addDragEvents(li);

    taskList.appendChild(li);

  });

  updateCounter();

}

addBtn.addEventListener("click", () => {

  const text = taskInput.value.trim();

  if(text === "") return;

  tasks.push({
    text:text,
    date:dueDate.value,
    completed:false
  });

  saveTasks();

  renderTasks();

  taskInput.value = "";

  dueDate.value = "";

});

function deleteTask(index){

  tasks.splice(index,1);

  saveTasks();

  renderTasks();

}

function toggleTask(index){

  tasks[index].completed = !tasks[index].completed;

  saveTasks();

  renderTasks();

}

function editTask(index){

  let newText = prompt("Edit Task", tasks[index].text);

  if(newText){

    tasks[index].text = newText;

    saveTasks();

    renderTasks();

  }

}

function filterTasks(type){

  currentFilter = type;

  renderTasks();

}

searchInput.addEventListener("input", renderTasks);

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

function addDragEvents(item){

  item.addEventListener("dragstart", dragStart);

  item.addEventListener("dragover", dragOver);

  item.addEventListener("drop", drop);

}

let dragIndex;

function dragStart(){

  dragIndex = this.dataset.index;

}

function dragOver(e){

  e.preventDefault();

}

function drop(){

  let dropIndex = this.dataset.index;

  let draggedTask = tasks[dragIndex];

  tasks.splice(dragIndex,1);

  tasks.splice(dropIndex,0,draggedTask);

  saveTasks();

  renderTasks();

}

renderTasks();