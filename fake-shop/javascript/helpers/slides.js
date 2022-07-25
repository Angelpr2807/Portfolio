export default function slides() {
  const d = document,
    articles = d.querySelectorAll(".about-us");
  let i = 0;

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".bg-carrousel .right") ||
      e.target.matches(".bg-carrousel .right *")
    ) {
      if (i === articles.length - 1) {
        i = 0;
      } else {
        i++;
      }
    } else if (
      e.target.matches(".bg-carrousel .left") ||
      e.target.matches(".bg-carrousel .left *")
    ) {
      if (i === 0) {
        i = 2;
      } else {
        i--;
      }
    } else {
      return;
    }
    articles.forEach((el) => {
      el.style.transform = `translateX(-${i * 100}%)`;
    });
  });
}
