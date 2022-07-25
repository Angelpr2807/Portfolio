export default function addProducts() {
  const d = document;

  let units = 0,
    packages = 0,
    priceUnit = 0,
    pricePackage = 0,
    total = 0,
    cardProduct;

  d.addEventListener("click", (e) => {
    const iPackage = d.getElementById("package"),
      iUnit = d.getElementById("unit"),
      Cart = d.querySelector(".cart-content"),
      modal = d.querySelector(".modal"),
      span = d.querySelector(".length"),
      spanTotal = d.querySelector(".total");

    if (e.target.matches(".plus")) {
      if (e.target.dataset.input === "unit") {
        if (e.target.dataset.top === "0") {
          return;
        }
        units += 1;
        priceUnit += parseFloat(e.target.dataset.price);
        iUnit.value = units;
        e.target.parentElement.parentElement.querySelector(
          "span"
        ).textContent = `$${priceUnit}`;
        if (parseInt(iUnit.value) >= e.target.dataset.top) {
          units -= 1;
          priceUnit -= parseFloat(e.target.dataset.price);
        }
      } else if (e.target.dataset.input === "package") {
        if (e.target.dataset.top === "0") {
          return;
        }
        packages += 1;
        pricePackage += parseFloat(e.target.dataset.price);
        iPackage.value = packages;
        e.target.parentElement.parentElement.querySelector(
          "span"
        ).textContent = `$${pricePackage}`;
        if (parseInt(iPackage.value) >= e.target.dataset.top) {
          packages -= 1;
          pricePackage -= parseFloat(e.target.dataset.price);
        }
      }
    } else if (e.target.matches(".less")) {
      if (e.target.dataset.input === "unit") {
        priceUnit -= parseFloat(e.target.dataset.price);
        units -= 1;
        iUnit.value = units;
        if (parseFloat(iUnit.value) < 0) {
          units = 0;
          iUnit.value = 0;
          priceUnit = 0;
        }
        e.target.parentElement.parentElement.querySelector(
          "span"
        ).textContent = `$${priceUnit}`;
      } else if (e.target.dataset.input === "package") {
        packages -= 1;
        pricePackage -= parseFloat(e.target.dataset.price);
        iPackage.value = packages;
        if (parseFloat(iPackage.value) < 0) {
          packages = 0;
          iPackage.value = 0;
          pricePackage = 0;
        }
        e.target.parentElement.parentElement.querySelector(
          "span"
        ).textContent = `$${pricePackage}`;
      }
    }

    if (e.target.matches(".add-product")) {
      if (!parseFloat(iPackage.value) && !parseFloat(iUnit.value)) {
        return;
      } else if (
        (parseFloat(iPackage.value) < 0 && parseFloat(iUnit.value) < 0) ||
        parseFloat(iPackage.value) < 0 ||
        parseFloat(iUnit.value) < 0
      ) {
        return;
      }

      const article = d.createElement("article"),
        datos = e.target.dataset.datos.split(","),
        top = e.target.dataset.top.split(",");

      if (parseInt(iPackage.value) > top[0]) {
        iPackage.value = top[0];
        pricePackage = top[0] * datos[3];
      } else {
        pricePackage = iPackage.value * datos[3];
      }

      if (parseInt(iUnit.value) > top[1]) {
        iUnit.value = top[1];
        priceUnit = top[1] * datos[4];
      } else {
        priceUnit = iUnit.value * datos[4];
      }

      let productPrice = pricePackage + priceUnit;

      article.classList.add("product");
      article.dataset.id = e.target.dataset.id;
      article.dataset.info = datos.join(",");
      article.dataset.price = productPrice;
      article.dataset.stock = [
        (top[0] - iPackage.value).toString() || top[0],
        (top[1] - iUnit.value).toString() || top[1],
      ];

      cardProduct = `
      <img src="${datos[0]}" alt="${datos[1]}">
      <div>
        <h3>${datos[1]}</h3>
        <h4>${datos[2]}</h4>
        <button class="remove-product" data-id="${parseInt(
          e.target.dataset.id
        )}">Remover</button>
      </div>
      <div>
        <p>${iPackage.value} Paquetes <span>$${pricePackage}</span></p>
        <p>${iUnit.value} Unidades <span>$${priceUnit}</span></p>
      </div>`;

      article.innerHTML = cardProduct;

      Cart.appendChild(article);

      modal.classList.add("none");

      total = parseFloat(Cart.dataset.total);
      total += productPrice;

      Cart.dataset.total = total;
      spanTotal.textContent = total;

      const button = d.querySelector(
        `button.add-to-cart[data-id="${parseInt(e.target.dataset.id)}"]`
      );
      button.disabled = true;

      units = 0;
      packages = 0;
      priceUnit = 0;
      pricePackage = 0;

      const articles = d.querySelectorAll(".cart article");

      if (articles.length) {
        if (span.style.display !== "flex") {
          span.style.display = "flex";
        }
        span.textContent = articles.length;
      }
    }
  });
}
