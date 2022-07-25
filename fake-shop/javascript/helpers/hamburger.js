export default function hamburgerBtn() {
  const d = document,
    hamburger = d.querySelector(".hamburger"),
    nav = d.querySelector(".main-nav");

  d.addEventListener("click", (e) => {
    if (e.target === hamburger || e.target.matches(".hamburger *")) {
      hamburger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    }
    if (e.target.matches(".nav-links a")) {
      hamburger.classList.remove("is-active");
      nav.classList.remove("is-active");
    }
  });
}
