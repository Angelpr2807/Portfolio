import ow_api from "../helpers/ow_api.js";
import ajax from "../helpers/ajax.js";
import Chart from "./Chart.js";

export default function CurrentLocation(lat, lon) {
  const $searchSection = document.querySelector(".locations"),
    $currentWeather = document.createElement("div"),
    $chart = document.createElement("div");

  $chart.classList.add("ct-chart");
  $currentWeather.classList.add("weather");

  $searchSection.appendChild($currentWeather);

  ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${ow_api.id}`,
    success: (json) => {
      let name = json.city.name,
        country = json.city.country,
        list = json.list[0],
        temp = list.main.temp,
        icon = list.weather[0].icon,
        description = list.weather[0].description,
        speed = list.wind.speed,
        pressure = list.main.pressure,
        humidity = list.main.humidity,
        visibility = list.visibility,
        timeDay = json.list,
        serie = [],
        data = {
          // A labels array that can contain any sort of values
          labels: [],
          // Our series array that contains series objects or in this case series data arrays
          series: [serie],
        },
        options = {
          width: 300,
          height: 200,
        };
      timeDay.forEach((el, i) => {
        if (i < 7) {
          Chart(data, serie, el);
        }

        $currentWeather.innerHTML = `
        <div class="card">
          <div class="card-title">
            <h2>${name}, ${country}</h2>
            <span><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Forecast">${temp}°C</span>
            <p>Feels like ${temp}°C. ${description}</p>
          </div>
          <div class="card-content">
            <ul>
              <li>${speed}m/s</li>
              <li>${pressure}hPa</li>
              <li>humidity: ${humidity}%</li>
              <li>Visibility: ${visibility}km</li>
            </ul>
          </div>
        </div>`;
      });
      $searchSection.innerHTML = ``;
      $currentWeather.appendChild($chart);
      $searchSection.appendChild($currentWeather);
      new Chartist.Line(".ct-chart", data, options);
    },
  });
}
