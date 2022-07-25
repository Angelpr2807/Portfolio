import ajax from "./ajax.js";

export default function shopFinish() {
  const d = document,
    cart = d.querySelector(".cart-content"),
    cartModal = d.querySelector(".cart");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".pay")) {
      const articles = d.querySelectorAll(".cart-content article");

      if (!articles.length) {
        return;
      }

      cart.innerHTML = `
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
        }</style>
      </svg>`;

      articles.forEach((el) => {
        let id = parseInt(el.dataset.id),
          info = el.dataset.info.split(","),
          data = el.dataset.stock.split(",");

        ajax({
          url: `http://localhost:3000/productos/${id}`,
          method: "PUT",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            id: id,
            url: info[0],
            description: info[5],
            title: info[1],
            brand: info[2],
            price: [parseFloat(info[3]), parseFloat(info[4])],
            stock: [parseInt(data[0]), parseInt(data[1])],
          }),
          error: () => {
            alert = `Ocurrió un error al finalizar su compra, lo sentimos 😥`;
          },
        });
        cartModal.innerHTML = "";
        cartModal.classList.add("none");
      });
      alert("Gracias por comprar en FAKE COFFEE 🤗☕");
      location.reload();
    }
  });
}
