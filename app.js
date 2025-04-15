document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  let card = document.querySelector(".card");

  const getWeather = async (city) => {
    let key = "13d3557911484c69e8e4e29b09c4f1da";

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    console.log(data.name);

    card.innerHTML = `
      <div class="temp-content">
          <div class="img-card">
              <img src="https://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png" alt="Weather icon">
              <h2 class="temp">${Math.round(data.main.temp)}°C</h2>
          </div>
          </div>
          <div class="content">
              <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
              <span class="weather">${data.weather[0].main}s</span>
          </div>
          <div class="bottom-cards">
            <div class="humidity">
                <img src="images/humidity.svg" alt="Humidity">
                <span>${data.main.humidity}% HUMIDITY</span>
            </div>
            <div class="divider"></div>
            <div class="wind">
                <img src="images/wind.svg" alt="Wind">
                <span>${data.wind.speed} KM/H</span>
            </div>
      </div>
    `;
  };

  searchBtn.addEventListener("click", () => {
    getWeather(search.value);
  });
});
