export default function Home() {
  const $homeSection = document.createElement("section");

  $homeSection.classList.add("home-section");

  $homeSection.innerHTML = `
  <div class="hero-img">
    <div class="home-content">
      <h1>Weather</h1>
      <p>check the current weather in any city in the world in the <a href="#/search">search section.</a></p>
    </div>
  </div>
  `;

  return $homeSection;
}
