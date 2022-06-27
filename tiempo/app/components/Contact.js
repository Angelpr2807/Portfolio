import ajax from "../helpers/ajax.js";

export default function Contact() {
  const d = document,
    $ContactSection = d.createElement("section"),
    $form = d.createElement("form");

  $form.innerHTML = `
  <div class="form-style">
    <legend>Send me your comments</legend>
    <label for="email">Your Email <input type="email" id="email" name="email" pattern="^\\w+([\.-]?\\w+)*@\\w+(  [\\.-]?\\w+)*(\\.\\w{2,4})+$" title="Insert a valid email" required></label>
    <p class="error form none" data-id="email">Insert a valid email</p>
    <label for="subject">Subject <input type="text" id="subject" name="subject" pattern="  [\\sa-zA-ZáéíóúäëïöüÄËÏÖÜÁÉÍÓÚ]{4,30}" title="The subject only admits letters" required></label>
    <p class="error form none" data-id="subject">The subject only admits letters</p>
    <label for="comments">
    Leave me your comments
    <textarea name="comments" id="comments" cols="30" rows="10" data-pattern="^.{1,256}$" required></textarea>
    </label>
    <p class="error form none" data-id="comments">The message exceeds 256 more than characters</p>
    <input type="submit" value="Submit">
    </div>
  `;

  $form.classList.add("contact-form", "hero-img");
  $ContactSection.classList.add("contact-section");
  $ContactSection.appendChild($form);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form *[required]")) {
      let expReg = new RegExp(e.target.pattern || e.target.dataset.pattern),
        $paragraph = d.querySelector(`[data-id="${e.target.id}"]`),
        validador = expReg.exec(e.target.value);

      if (!validador && e.target.value !== "") {
        $paragraph.classList.remove("none");
      } else {
        $paragraph.classList.add("none");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target === $form) {
      console.log("submit");
      let data = new FormData(e.target);
      console.log(data);
      ajax({
        url: "https://formsubmit.co/ajax/angeldorado.apr@gmail.com",
        method: "POST",
        body: new FormData(e.target),
        success: () => {},
      });
      $form.reset();
    }
  });

  return $ContactSection;
}
