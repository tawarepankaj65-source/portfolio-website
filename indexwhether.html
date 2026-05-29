const apiKey = "YOUR_API_KEY";

const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("searchBtn");

const cityName =
document.getElementById("cityName");

const temp =
document.getElementById("temp");

const humidity =
document.getElementById("humidity");

const wind =
document.getElementById("wind");

const condition =
document.getElementById("condition");

searchBtn.addEventListener("click", () => {

  getWeather(cityInput.value);

});

async function getWeather(city){

  try{

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if(!response.ok){

      throw new Error("City not found");

    }

    const data = await response.json();

    cityName.innerText =
    data.name;

    temp.innerText =
    `Temperature: ${data.main.temp}°C`;

    humidity.innerText =
    `Humidity: ${data.main.humidity}%`;

    wind.innerText =
    `Wind Speed: ${data.wind.speed} km/h`;

    condition.innerText =
    `Condition: ${data.weather[0].main}`;

  }

  catch(error){

    alert(error.message);

  }

}