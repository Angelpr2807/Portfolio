export default function Background() {
  const $heroImages = document.querySelectorAll(".hero-img");

  let date = new Date().getHours();

  if (date >= 6 && date < 16) {
    $heroImages.forEach((el) => {
      el.classList.remove("night");
    });
  } else if (date >= 16 && date < 20) {
    $heroImages.forEach((el) => {
      el.classList.add("sunset");
    });
  } else if (date >= 20 && date < 6) {
    $heroImages.forEach((el) => {
      el.classList.remove("sunset");
      el.classList.add("night");
    });
  }
}
