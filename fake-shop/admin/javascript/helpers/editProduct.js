import ajax from "../../../javascript/helpers/ajax.js";

export default function editProduct() {
  const d = document,
    modal = d.querySelector(".modal");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".save-changes")) {
      let inputs = modal.querySelectorAll("input"),
        textarea = modal.querySelector("textarea");

      let datos = [],
        data = {},
        id = e.target.dataset.id,
        arreglo = e.target.dataset.datos.split(","),
        url = arreglo[5].replace("..", ".");

      inputs.forEach((el) => {
        if (el.value) {
          if (parseFloat(el.value) < 0) {
            el.value = 0;
          }
          datos.push(el.value);
        }
      });

      if (textarea.value) {
        datos.push(textarea.value);
      }

      if (!datos.length) {
        return;
      }

      data = {
        id,
        url,
        description: datos[6] || arreglo[2],
        title: datos[0] || arreglo[0],
        brand: datos[1] || arreglo[1],
        price: [
          parseFloat(datos[2] || arreglo[3]),
          parseFloat(datos[3] || arreglo[4]),
        ],
        stock: [
          parseFloat(datos[4] || arreglo[6]),
          parseFloat(datos[5] || arreglo[7]),
        ],
      };

      console.log(data);

      ajax({
        url: `http://localhost:3000/productos/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data),
        success: () => {
          alert("Cambios guardados con éxito");
        },
        error: () => {
          alert("Ocurrió un error");
        },
      });
    }
  });
}
