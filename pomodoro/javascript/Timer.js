export default async function Timer(id) {
  const $ol = document.getElementById(`task-list`),
    $input = document.getElementById(`add-task`),
    $li = $ol.querySelector(`li[data-id="${id}"]`);
  let $span = document.getElementById("time"),
    time = 1500,
    minuts,
    seconds;

  let task = setInterval(() => {
    minuts = time / 60;
    seconds = time % 60;
    let timer = `${
      `${Math.floor(minuts)}`.length === 2
        ? `${Math.floor(minuts)}`
        : `0${Math.floor(minuts)}`
    }:${
      `${Math.floor(seconds)}`.length === 2
        ? `${Math.floor(seconds)}`
        : `0${Math.floor(seconds)}`
    }`;
    $span.innerText = timer;
    time--;
    console.log(time);
    if (time === -1) {
      clearInterval(task);
      $span.innerText = "Time to break";
      time = 300;
      let rest = setInterval(() => {
        minuts = time / 60;
        seconds = time % 60;
        let timer = `${
          `${Math.floor(minuts)}`.length === 2
            ? `${Math.floor(minuts)}`
            : `0${Math.floor(minuts)}`
        }:${
          `${Math.floor(seconds)}`.length === 2
            ? `${Math.floor(seconds)}`
            : `0${Math.floor(seconds)}`
        }`;
        $span.innerText = timer;
        time--;
        if (time === -1) {
          $ol.removeChild($li);

          const $btns = $ol.querySelectorAll("#btn");

          clearInterval(rest);
          $span.innerText = "Break is over";
          $span.innerText = "00:00";

          $input.disabled = false;

          console.log($btns);

          $btns.forEach((el) => {
            el.disabled = false;
            el.style.opacity = "1";
          });
        }
      }, 1000);
    }
  }, 1000);
}
