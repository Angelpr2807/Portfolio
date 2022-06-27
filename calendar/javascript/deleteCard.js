export default function deleteCard(id) {
  const d = document;

  const $card = d.querySelector(`div.event-card[data-id="${id}"]`),
    $main = d.getElementById("main");

  console.log($main);
  console.log($card);

  $main.removeChild($card);

  let data = localStorage.getItem(`eventInfo_${localStorage.length - 1}`);

  localStorage.setItem(`eventInfo_${id}`, data);

  localStorage.removeItem(`eventInfo_${localStorage.length - 1}`);
  localStorage.setItem("id", localStorage.length - 1);
}
