
const API_KEY = "66e7aaf26922f9fb4853e537b1b5342e";  

async function fetchWeather(city = "Shymkent") {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data); // смотри всю структуру в консоли

    // Текущая погода
    document.querySelector("#current-temp").textContent = 
      `${Math.round(data.list[0].main.temp)}°C`;
    document.querySelector("#current-desc").textContent = 
      data.list[0].weather[0].description;

    // Прогноз на 10 дней (берём каждые 8 записей = раз в сутки)
    const forecastContainer = document.querySelector("#forecast-10days");
    forecastContainer.innerHTML = "";
    for (let i = 0; i < data.list.length; i += 8) {
      const item = data.list[i];
      const date = new Date(item.dt_txt);
      const dayName = date.toLocaleDateString("ru-RU", { weekday: "short" });

      forecastContainer.innerHTML += `
        <div class="forecast-day">
          <p>${dayName}</p>
          <p>${Math.round(item.main.temp)}°C</p>
          <p>${item.weather[0].main}</p>
        </div>
      `;
    }
  } catch (err) {
    console.error("Ошибка загрузки:", err);
  }
}

// Вызов при загрузке
fetchWeather();
