import ajax from "../../../javascript/helpers/ajax.js";

export default function productCard() {
  const d = document,
    productsGrid = d.querySelector(".grid-products");

  let cards = "";

  productsGrid.innerHTML = `
  <div class="loader">
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#fff">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    <style xmlns="" class="darkreader darkreader--fallback">html, body, body :not(iframe) {
      border-color: #776e62 !important;
      color: #e8e6e3 !important;
    }</style></svg>
  </div>
  `;

  ajax({
    url: "http://localhost:3000/productos/",
    method: "GET",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    success: (json) => {
      if (json.length) {
        productsGrid.dataset.length = json.length;

        json.forEach((el) => {
          let url = el.url.replace("./", "../");
          let cardComponent = `
          <div class="product-card">
            <img src="${url}" alt="${el.title}">
            <div>
              <h3>${el.title}</h3>
              <h4>${el.brand}</h4>
              <p>$${el.price[0]} <span>$${el.price[1]}</span></p>
              <button class="modify" data-id="${el.id}" data-product="${el.title},${el.brand},${el.description},${el.price[0]},${el.price[1]},${url},${el.stock[0]},${el.stock[1]},${el.id}">Editar</button>
            </div>
          </div>`;

          cards += cardComponent;
        });
      } else {
        cards = `
            <h3 class="no-products">Actualmente no existen productos, lo sentimos 😥</h3>
          `;
      }
      productsGrid.innerHTML = cards;
    },
    error: () => {
      cards = `
            <h3 class="no-products">Error al consultar los productos, lo sentimos 😥</h3>
          `;
      productsGrid.innerHTML = cards;
    },
  });
}
