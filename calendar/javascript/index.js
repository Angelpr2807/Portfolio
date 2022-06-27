import Event from "./CreateEvent.js";

if (localStorage.length <= 1) {
  localStorage.setItem("id", 1);
} else {
  localStorage.setItem("id", localStorage.length);
}

document.addEventListener("DOMContentLoaded", Event);
