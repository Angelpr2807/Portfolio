import Event from "./CreateEvent.js";

let eventLength = 0;

for (let i in localStorage) {
  if (i.includes("eventInfo")) {
    eventLength += 1;
  }
}

if (eventLength <= 1) {
  localStorage.setItem("id", 1);
} else {
  localStorage.setItem("id", eventLength + 1);
}

document.addEventListener("DOMContentLoaded", Event);
