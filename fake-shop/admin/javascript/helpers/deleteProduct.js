import ajax from "../../../javascript/helpers/ajax.js";

export default function deleteProduct() {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".delete-product")) {
      ajax({
        url: `http://localhost:3000/productos/${e.target.dataset.id}`,
        method: "DELETE",
      });
    }
  });
}
