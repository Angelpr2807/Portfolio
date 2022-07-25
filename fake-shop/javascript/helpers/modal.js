export default function modal() {
  const d = document,
    modal = d.querySelector(".modal"),
    close = d.querySelector(".close");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".add-to-cart")) {
      let data = e.target.dataset.product.split(",");
      modal.innerHTML = `
      <div class="modal-content">
          <div class="close"><span class="material-symbols-outlined">
              close
            </span></div>
          <img src="${data[5]}" alt="${data[0]}">
          <div class="description">
            <h3>${data[0]}</h3>
            <h4>${data[1]}</h4>
            <p>${data[2]}</p>
          </div>
          <div class="shop-product">
            <label for="unit">
            paquete
              <span class="price-package"></span>
              <div class="input">
                <button class="less" data-input="package" data-price="${data[3]}">-</button>
                <input type="number" id="package" min="0" max="${data[6]}" value="0" required>
                <button class="plus" data-input="package" data-price="${data[3]}" data-top="${data[6]}">+</button>
              </div>
            </label>
            <label for="package">
            unidad
              <span class="price-unit"></span>
              <div class="input">
                <button class="less" data-input="unit" data-price="${data[4]}">-</button>
                <input type="number" id="unit" min="0" max="${data[7]}" value="0" required>
                <button class="plus" data-input="unit" data-price="${data[4]}" data-top="${data[7]}">+</button>
              </div>
            </label>
            <button class="add-product" data-id="${data[8]}" data-datos="${data[5]},${data[0]},${data[1]},${data[3]},${data[4]},${data[2]}" data-top="${data[6]},${data[7]}">Añadir al carrito</button>
          </div>
        </div>`;

      modal.classList.remove("none");
      modal.classList.add("is-active");
    }
    if (e.target === close || e.target.matches(".close *")) {
      modal.classList.add("none");
      modal.classList.remove("is-active");
    }
  });
}
