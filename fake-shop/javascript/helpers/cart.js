export default function cart() {
  const d = document,
    cart = d.querySelector(".cart"),
    cartContent = d.querySelector(".cart-content"),
    span = d.querySelector(".length"),
    total = d.querySelector(".total");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".shop") || e.target.matches(".shop *")) {
      cart.classList.remove("none");
    }

    if (e.target.matches(".close") || e.target.matches(".close *")) {
      cart.classList.add("none");
    }

    if (e.target.matches(".remove-product")) {
      const article = d.querySelector(
          `article.product[data-id="${parseInt(e.target.dataset.id)}"]`
        ),
        button = d.querySelector(
          `button.add-to-cart[data-id="${parseInt(e.target.dataset.id)}"]`
        );

      cartContent.removeChild(article);
      cartContent.dataset.total -= article.dataset.price;
      total.textContent = cartContent.dataset.total;
      button.disabled = false;

      span.textContent -= 1;
      if (span.textContent === "0") {
        span.style.display = "none";
      } else {
        span.style.display = "flex";
      }
    }
  });
}
