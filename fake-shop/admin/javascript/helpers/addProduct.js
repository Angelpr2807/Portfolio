import ajax from "../../../javascript/helpers/ajax.js";

export default function addProduct() {
  const d = document,
    modal = d.querySelector(".modal");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".add-product")) {
      let id = parseInt(d.querySelector(".grid-products").dataset.length),
        nombre = `coffee${id + 1}`,
        newProduct = `
          <div class="modal-content">
              <div class="content">
                <div class="title">
                  <h2>Ingrese el nombre del nuevo producto</h2>
                  <label for="nombre">Nombre del producto:
                    <input type="text" id="nombre" name="nombre">
                  </label>
                </div>
                <hr>
                <div class="img">
                  <p>Se recomienda ponerle el nombre de la imágen del nuevo producto como "${nombre}" y la imágen debe tener la extención: ".jpg", se le pide encarecidamente este formato a fin de evitar errores.</p>
                  <input type="file" id="image">
                </div>
                <hr>
                <div class="brand">
                  <p>Ingrese la marca del producto</p>
                  <label for="brand">Marca del producto:
                    <input type="text" id="brand" name="brand">
                  </label>
                </div>
                <hr>
                <div class="desc">
                  <p>Ingrese la descripción del producto</p>
                  <label for="description">Descripción del producto:
                    <textarea name="description" id="description" cols="30" rows="2"></textarea>
                  </label>
                </div>
                <hr>
                <div class="price">
                  <div class="package">
                    <p>Ingrese el precio del paquete de el producto</p>
                    <label for="package">Precio por paquete del producto:
                      <input type="number" id="package" name="package" min="0">
                    </label>
                  </div>
                  <div class="unit">
                    <p>Ingrese el precio de las unidades de el producto</p>
                    <label for="unit">Precio por unidad producto:
                      <input type="number" id="unit" name="unit" min="0">
                    </label>
                  </div>
                </div>
                <hr>
                <div class="stock">
                  <div class="package">
                    <p>Ingrese el stock de paquetes del producto</p>
                    <label for="package-stock">Stock de paquetes del producto:
                      <input type="number" id="package-stock" name="package-stock" min="0">
                    </label>
                  </div>
                  <div class="unit-stock">
                    <p>StIngrese el stock de unidades del productos</p>
                    <label for="unit">Stock de unidades del producto:
                      <input type="number" id="unit-stock" name="unit-stock" min="0">
                    </label>
                  </div>
                </div>
                <div class="send">
                  <button class="new-product">Crear Nuevo producto</button>
                </div>
              </div>
              <button class="close"><span class="material-symbols-outlined">
                  close
                </span></button>
            </div>
          `;

      modal.innerHTML = newProduct;
      modal.classList.add("is-active");
    }

    if (e.target.matches(".new-product")) {
      let inputs = modal.querySelectorAll("input"),
        textarea = modal.querySelector("textarea"),
        id = parseInt(d.querySelector(".grid-products").dataset.length),
        nombre = `coffee${id + 1}`,
        url = `./assets/products/${nombre}.jpg`;

      let datos = [],
        data = {};

      inputs.forEach((el) => {
        if (el.value) {
          if (parseFloat(el.value) < 0) {
            el.value = 0;
          }
          datos.push(el.value);
          if (el.getAttribute("type") === "file") {
            datos.pop();
          }
        }
      });

      if (textarea.value) {
        datos.push(textarea.value);
      }

      if (!(datos.length === 7)) {
        alert("No rellenó todos los campos requeridos");
        return;
      }

      data = {
        url,
        description: datos[6],
        title: datos[0],
        brand: datos[1],
        price: [parseFloat(datos[2]), parseFloat(datos[3])],
        stock: [parseFloat(datos[4]), parseFloat(datos[5])],
      };

      ajax({
        url: `http://localhost:3000/productos/`,
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data),
        success: () => {
          alert("Nuevo producto creado con éxito");
        },
        error: () => {
          alert("Ocurrió un error al crear el producto");
        },
      });
    }
  });
}
