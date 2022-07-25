export default function search() {
  const d = document;

  d.addEventListener("keyup", (e) => {
    if (e.target.matches('input[type="search"]')) {
      const cards = d.querySelectorAll(".product-card");

      cards.forEach((el) => {
        let validador = new RegExp(e.target.value, "i");

        if (el.querySelector("h3").textContent.match(validador)) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    }
  });

  d.addEventListener("search", (e) => {
    if (e.target.value === "") {
      const cards = d.querySelectorAll(".product-card");

      cards.forEach((el) => {
        el.style.display = "block";
      });
    }
  });
}
