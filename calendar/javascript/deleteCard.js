export default function deleteCard(id) {
  const d = document;

  const $card = d.querySelector(`div.event-card[data-id="${id}"]`),
    $main = d.getElementById("main");

  $main.removeChild($card);

  let eventLength = 0;

  for (let i in localStorage) {
    if (i.includes("eventInfo")) {
      eventLength += 1;
    }
  }

  let data = localStorage.getItem(`eventInfo_${eventLength}`);

  localStorage.setItem(`eventInfo_${id}`, data);

  localStorage.removeItem(`eventInfo_${eventLength}`);
  localStorage.setItem("id", eventLength);
}
