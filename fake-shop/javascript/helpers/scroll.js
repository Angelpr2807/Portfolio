export default function scrollTop() {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".scroll-top") || e.target.matches(".scroll-top *")) {
      window.scrollTo(0, 0);
    }
  });
}
