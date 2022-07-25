export default function form() {
  const d = document;

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.matches("form")) {
      if (!e.target.user.value || !e.target.password.value) {
        return;
      }

      let validador =
        btoa(btoa(e.target.user.value)) === "WVdSdGFXND0=" &&
        btoa(btoa(e.target.password.value)) === "Wm1GclpXTnZabVpsWlE9PQ==";

      if (validador) {
        window.open("./products.html");
      } else {
        alert("Credenciales no validas");
      }
    }
  });
}
