export default function toAdmin() {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".admin")) {
      window.open("./admin");
    }
  });
}
