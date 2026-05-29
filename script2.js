const products = [

{
  name:"Headphones",
  price:2999,
  image:"https://picsum.photos/300?1"
},

{
  name:"Smart Watch",
  price:4999,
  image:"https://picsum.photos/300?2"
},

{
  name:"Shoes",
  price:1999,
  image:"https://picsum.photos/300?3"
},

{
  name:"Laptop",
  price:55000,
  image:"https://picsum.photos/300?4"
}

];

const productContainer =
document.getElementById("productContainer");

const searchInput =
document.getElementById("searchInput");

const cartItems =
document.getElementById("cartItems");

const darkBtn =
document.getElementById("darkBtn");

let cart = [];

function displayProducts(items){

  productContainer.innerHTML = "";

  items.forEach((product,index)=>{

    const card =
    document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}">

      <h3>${product.name}</h3>

      <p>₹${product.price}</p>

      <button onclick="addToCart(${index})">
      Add to Cart
      </button>
    `;

    productContainer.appendChild(card);

  });

}

function addToCart(index){

  cart.push(products[index]);

  renderCart();

}

function renderCart(){

  cartItems.innerHTML = "";

  cart.forEach(item=>{

    const li =
    document.createElement("li");

    li.innerText =
    `${item.name} - ₹${item.price}`;

    cartItems.appendChild(li);

  });

}

searchInput.addEventListener("input",()=>{

  const value =
  searchInput.value.toLowerCase();

  const filtered =
  products.filter(product=>{

    return product.name
    .toLowerCase()
    .includes(value);

  });

  displayProducts(filtered);

});

darkBtn.addEventListener("click",()=>{

  document.body.classList
  .toggle("dark");

});

displayProducts(products);