export default function HamburgerBtn() {
  const $btn = document.querySelector(".hamburger"),
    $nav = document.querySelector(".page-nav");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
      $btn.classList.toggle("is-active");
      $nav.classList.toggle("is-active");
    }

    if (e.target.matches(".page-nav a")) {
      $btn.classList.remove("is-active");
      $nav.classList.remove("is-active");
    }
  });
}
