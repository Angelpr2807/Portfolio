const d = document,
  $input = d.getElementById("number");

let number = "",
  sign,
  calc = 0,
  number1 = 0,
  number2;

d.addEventListener("DOMContentLoaded", (e) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(`.keyboard button.digit`)) {
      if (e.target.dataset.value === ".") {
        $input.placeholder = number;
        e.target.disabled = true;
      }
      number += e.target.dataset.value;
      $input.value = number;
    }

    if (e.target.matches(`.keyboard button.sbuttons`)) {
      if (e.target.dataset.value === "delete") {
        let array = Array.from($input.value);
        array.pop();
        $input.value = array.join("");
        number = array.join("");
        return;
      }
      number2 = number1;
      number1 = parseFloat($input.value);
      number = "";
      $input.value = "";
      switch (e.target.dataset.value) {
        case "+":
          sign = "+";
          break;
        case "-":
          sign = "-";
          // number1 = 0;
          break;
        case "/":
          sign = "/";
          // number1 = 0;
          break;
        case "*":
          sign = "*";
          // number1 = 0;
          break;
        case "reset":
          number1 = 0;
          number2 = 0;
          number = "";
          break;
        case "same":
          if (number2 === 0) {
            alert("no ingresó el segundo número");
            return;
          }
          switch (sign) {
            case "+":
              calc = number2 + number1;
              $input.value = calc;
              break;
            case "-":
              calc = number2 - number1;
              $input.value = calc;

              break;
            case "/":
              calc = number2 / number1;
              $input.value = calc;

              break;
            case "*":
              calc = number2 * number1;
              $input.value = calc;

              break;
          }
          break;
      }
    }

    if (e.target.matches("header input")) {
      console.log(typeof e.target.id);
      switch (e.target.id) {
        case "1":
          d.querySelector("body").classList.remove("theme-2", "theme-3");
          d.querySelector(".results").classList.remove("theme-2", "theme-3");
          d.querySelector(".keyboard").classList.remove("theme-2", "theme-3");
          d.querySelector("header").classList.remove("theme-2", "theme-3");
          break;
        case "2":
          d.querySelector("header").classList.add("theme-2");
          d.querySelector("body").classList.add("theme-2");
          d.querySelector(".results").classList.add("theme-2");
          d.querySelector(".keyboard").classList.add("theme-2");
          d.querySelector("header").classList.remove("theme-3");
          d.querySelector("body").classList.remove("theme-3");
          d.querySelector(".results").classList.remove("theme-3");
          d.querySelector(".keyboard").classList.remove("theme-3");
          break;
        case "3":
          d.querySelector("header").classList.add("theme-3");
          d.querySelector("body").classList.add("theme-3");
          d.querySelector(".results").classList.add("theme-3");
          d.querySelector(".keyboard").classList.add("theme-3");
          break;
      }
    }
  });
});

// themes
