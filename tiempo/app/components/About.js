export default function About() {
  const $aboutSectioon = document.createElement("section");

  $aboutSectioon.classList.add("about-section");

  $aboutSectioon.innerHTML = `
  <div class="project-description hero-img">
    <div class="description">
    <h2>What is this project?</h2>
    <p>My portfolio is an important part of demonstrating my technical skills, so this page is not intended   to be used as a weather and forecast app. <br>
    In this app, the <a href="https://openweathermap.org/" target="_blank" rel ="noopener noreferrer">openweather api</a> is being consulted to show all the data of your search. <br>
    If you want this project to become a more robust app and not just a test anymore, send us your comments    in   the "contact" section and let us know what you would like to see in this app.</p>
    </div>
  </div>
  `;

  return $aboutSectioon;
}
