import ajax from "../helpers/ajax.js";
import ow_api from "../helpers/ow_api.js";
import locationCard from "./locationCard.js";
import Chart from "./Chart.js";
import geolocationCard from "./Geolocation.js";
import ErrorLocationCard from "./ErrorLocationCard.js";

export default function Search() {
  const $root = document.querySelector(".root"),
    $searchSection = document.createElement("section"),
    $weather = document.createElement("div"),
    $chart = document.createElement("div"),
    $form = document.createElement("form"),
    $label = document.createElement("label"),
    $input = document.createElement("input");

  $searchSection.classList.add("locations", "hero-img");
  $chart.classList.add("ct-chart");
  $weather.classList.add("weather");

  $input.type = "search";
  $input.id = "search";
  $input.name = "search";
  $input.placeholder = "Search location";
  $label.setAttribute("for", "search");
  $label.innerText = `Look for a place`;

  $form.classList.add("form-search");

  $form.appendChild($label);
  $form.appendChild($input);

  if (localStorage.getItem("searchStorage")) {
    $input.value = localStorage.getItem("searchStorage");
  }

  document.addEventListener("search", (e) => {
    if (e.target === $input) {
      if (e.target.value === "") {
        localStorage.removeItem("searchStorage");
      }
    }
  });

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target === $form) {
      localStorage.setItem("searchStorage", e.target.search.value);
      ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem(
          "searchStorage"
        )}&limit=10&appid=${ow_api.id}`,
        method: "GET",
        success: (json) => {
          $searchSection.innerHTML = "";
          if (json.length === 0) {
            $searchSection.innerHTML = `
            <div class="weather">
              ${ErrorLocationCard()}
            </div>`;
          }
          json.forEach((el) => {
            locationCard(el);
          });
        },
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".view-location")) {
      let locate = e.target.dataset.location.split(","),
        lat = locate[0],
        lon = locate[1];
      ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${ow_api.id}`,
        method: "GET",
        success: (json) => {
          // temperature in kelvin (transfor a celcius)
          let timeDay = json.list,
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
              // https: //openweathermap.org/img/wn/${icon}@2x.png
              // let icon = el.weather[0].icon;
            }
          });
          $searchSection.innerHTML = ``;
          $weather.innerHTML = geolocationCard(json, timeDay[0]);
          $weather.appendChild($chart);
          $searchSection.appendChild($weather);
          new Chartist.Line(".ct-chart", data, options);
        },
      });
    }
  });

  $root.appendChild($form);
  $root.appendChild($searchSection);
}
