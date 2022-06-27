// this is de router of spa

import ajax from "../helpers/ajax.js";
import api from "../helpers/ow_api.js";
import Home from "./Home.js";
import About from "./About.js";
import Search from "./Search.js";
import locationCard from "./locationCard.js";
import ErrorCard from "./ErrorCard.js";
import ErrorLocationCard from "./ErrorLocationCard.js";
import CurrentLocation from "./CurrentLocation.js";
import Contact from "./Contact.js";

let locate,
  lat,
  lon,
  { id, limit } = api;

const $root = document.querySelector(".root"),
  GEO_NAME = `http://api.openweathermap.org/geo/1.0/direct?q=${locate}&limit=${limit}&appid=${id}`,
  INV_GEO_NAME = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${id}`,
  //basic information
  LOCATION = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${id}`,
  //use list of weather 7 of 7 in a day
  WEATHER = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${id}`;

export default function Router() {
  let { hash } = location;
  $root.innerHTML = ``;
  if (!hash || hash === "#/") {
    $root.appendChild(Home());
  } else if (hash.includes("#/search")) {
    Search();
    const $searchSection = document.querySelector(".locations"),
      $weather = document.createElement("div"),
      $chart = document.createElement("div");

    $searchSection.classList.add("hero-img");
    $chart.classList.add("ct-chart");
    $weather.classList.add("weather");

    $searchSection.appendChild($weather);
    // if no search execute
    if (!localStorage.getItem("searchStorage")) {
      let options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
        success = (position) => {
          let cord = position.coords,
            { latitude, longitude } = cord;
          CurrentLocation(latitude, longitude);
        },
        error = (err) => {
          $weather.innerHTML = ErrorCard(err.message, $weather);
        };

      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem(
          "searchStorage"
        )}&limit=10&appid=${id}`,
        method: "GET",
        success: (json) => {
          if (json.length === 0) {
            $weather.innerHTML = ErrorLocationCard();
          } else {
            $searchSection.innerHTML = "";
            json.forEach((el) => {
              locationCard(el);
            });
          }
        },
      });
    }
  } else if (hash.includes("#/contact")) {
    $root.appendChild(Contact());
  } else if (hash.includes("#/about")) {
    $root.appendChild(About());
  }
}
