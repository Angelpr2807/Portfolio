import Calendar from "./calendar.js";
import deleteCard from "./deleteCard.js";
import EventCard from "./eventCard.js";

export default function Event() {
  const d = document;

  let id = localStorage.getItem("id"),
    $main = document.getElementById("main");

  for (let i = 0; i < id - 1; i++) {
    let datos = localStorage.getItem(`eventInfo_${i + 1}`);
    datos = datos.split(",");
    if (datos) {
      $main.appendChild(
        EventCard({
          id: i + 1,
          daysLeft: datos[1],
          nameEvent: datos[2],
          date: datos[3],
        })
      );
    }
  }

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.matches("form")) {
      if (e.target.inputDate.value === "" || e.target.inputEvent.value === "") {
        return false;
      } else {
        $main.appendChild(
          EventCard({
            id,
            daysLeft: Calendar(e.target.inputDate.value),
            nameEvent: e.target.inputEvent.value,
            date: e.target.inputDate.value,
          })
        );
        localStorage.setItem("id", id++);
      }
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) deleteCard(e.target.dataset.id);
  });
}
