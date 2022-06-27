export default function geolocationCard(json, params) {
  let name = json.city.name,
    country = json.city.country,
    humidity = params.main.humidity,
    temp = Math.floor(params.main.temp),
    pressure = params.main.pressure,
    visibility = params.visibility / 1000,
    description = params.weather[0].description,
    icon = params.weather[0].icon,
    degW = params.wind.deg,
    speed = params.wind.speed,
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
    date = new Date().toLocaleDateString(undefined, options),
    content = `
    <div class="card">
      <div class="card-title">
        <time datetime="${date}">${date}</time>.
        <h2>${name}, ${country}</h2>
        <span><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Forecast">${temp}°C</span>
        <p>Feels like ${temp}°C. ${description}</p>
      </div>
      <div class="card-content">
        <ul>
          <li><b>Wind</b>: ${speed}m/s</li>
          <li><b>Pressure</b>: ${pressure}hPa</li>
          <li><b>humidity</b>: ${humidity}%</li>
          <li><b>Visibility</b>: ${visibility}km</li>
        </ul>
      </div>
    </div>
  `;

  return content;
}
