export default function EventCard(props) {
  let { id, daysLeft, nameEvent, date } = props,
    $div = document.createElement("div"),
    storageInfo = `${id},${daysLeft},${nameEvent},${date}`;

  $div.classList.add("event-card");
  $div.dataset.id = id;

  $div.innerHTML = `
    <p><span>${daysLeft}</span>faltan</p>
    <p>${nameEvent}</p>
    <time datetime="${date}">${date}</time>
    <button class="delete" data-id="${id}">Delete</button>`;

  if (id) {
    localStorage.setItem(`eventInfo_${id}`, storageInfo);
  }

  return $div;
}
