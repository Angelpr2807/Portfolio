export default function modal() {
  const d = document,
    modal = d.querySelector(".modal");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".modify")) {
      let modalContent,
        datos = e.target.dataset.product.split(",");

      modalContent = `
        <div class="modal-content">
          <div class="content">
            <div class="title">
              <h2>${datos[0]}</h2>
              <label for="nombre">Cambiar nombre del producto:
                <input type="text" id="nombre" name="nombre">
              </label>
            </div>
            <hr>
            <div class="img">
              <img src="${datos[5]}" alt="${datos[0]}">
              <p>Se recomienda ponerle el nombre de la imágen que quiere reemplazar a: "${datos[5]
                .replace("../assets/products/", "")
                .replace(
                  ".jpg",
                  ""
                )}" y la imágen debe tener la extención: ".jpg", se le pide encarecidamente este formato a fin de evitar errores.</p>
              <input type="file" id="image">
            </div>
            <hr>
            <div class="brand">
              <p>Marca: ${datos[1]}</p>
              <label for="brand">Cambiar marca del producto:
                <input type="text" id="brand" name="brand">
              </label>
            </div>
            <hr>
            <div class="desc">
              <p>${datos[2]}</p>
              <label for="description">Cambiar descripción del producto:
                <textarea name="description" id="description" cols="30" rows="2"></textarea>
              </label>
            </div>
            <hr>
            <div class="price">
              <div class="package">
                <p>Precio por paquete: $${datos[3]}</p>
                <label for="package">Cambiar precio por paquete del producto:
                  <input type="number" id="package" name="package" min="0">
                </label>
              </div>
              <div class="unit">
                <p>Precio por unidad: $${datos[4]}</p>
                <label for="unit">Cambiar precio por unidad producto:
                  <input type="number" id="unit" name="unit" min="0">
                </label>
              </div>
            </div>
            <hr>
            <div class="stock">
              <div class="package">
                <p>stock de paquetes: ${datos[6]} paquetes</p>
                <label for="package-stock">Cambiar stock de paquetes del producto:
                  <input type="number" id="package-stock" name="package-stock" min="0">
                </label>
              </div>
              <div class="unit-stock">
                <p>Stock de unidades: ${datos[7]} unidades</p>
                <label for="unit">Cambiar stock de unidades del producto:
                  <input type="number" id="unit-stock" name="unit-stock" min="0">
                </label>
              </div>
            </div>
            <div class="send">
              <button class="save-changes" data-id="${
                datos[8]
              }" data-datos="${datos.join(",")}">Guardar cambios</button>
            </div>
            <div class="delete">
              <button class="delete-product" data-id="${
                datos[8]
              }">Eliminar producto</button>
            </div>
          </div>
          <button class="close"><span class="material-symbols-outlined">
              close
            </span></button>
        </div>
        `;

      modal.innerHTML = modalContent;

      modal.classList.add("is-active");
    }
    if (e.target.matches(".close") || e.target.matches(".close *")) {
      modal.classList.remove("is-active");
    }
  });
}
