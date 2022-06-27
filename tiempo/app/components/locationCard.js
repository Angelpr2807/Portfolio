export default function locationCard(response) {
  const $searchSection = document.querySelector(".locations"),
    $article = document.createElement("article");

  let { name, state, country, lat, lon } = response;

  $article.innerHTML = `
    <div class="location-content">
      <h2>${name}, ${state || "Unknow"} / ${country}</h2>
      <p>Latitude: ${lat}</p>
      <p>Longtude: ${lon}</p>
    </div>
    <div class="button">
      <button class="view-location" data-location="${lat},${lon}">View weather</button>
    </div>
  `;

  $searchSection.appendChild($article);
}
