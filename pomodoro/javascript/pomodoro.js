import Timer from "./Timer.js";

export default function Pomodoro() {
  const d = document,
    $input = d.getElementById("activity"),
    $btn = d.getElementById("add-task"),
    $ol = d.getElementById("task-list"),
    $template = d.querySelector("template").content;

  let $span = d.createElement("span");
  $span.innerText = "No ingresó una tarea";
  $span.classList.add("none");
  $span.classList.add("error");
  d.querySelector(".inputs").insertAdjacentElement("afterend", $span);

  let i = 1;

  d.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target === $btn) {
      if ($input.value === "") {
        $span.classList.remove("none");
        return;
      } else {
        $span.classList.add("none");
        let $li = d.createElement("li");
        $li.dataset.id = i;

        $template.getElementById("btn").dataset.id = i;
        $template.getElementById("task").innerText = $input.value;

        i++;

        let $clone = d.importNode($template, true);

        $input.value = "";
        $input.focus();

        $li.appendChild($clone);
        $ol.appendChild($li);
      }
    }

    if (e.target.matches("button")) {
      Timer(e.target.dataset.id);

      $btn.disabled = true;

      e.target.innerText = "In progress...";

      let $btns = d.querySelectorAll("#btn");

      $btns.forEach((el) => {
        el.disabled = true;
        el.style.opacity = "0.5";
      });
    }
  });
}
