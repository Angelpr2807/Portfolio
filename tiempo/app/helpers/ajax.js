// this function make queries the site
// in this ocation i will use the object XMLHttpRequest

/**
 * @param {object} options - params of query.
 */

export default async function ajax(options) {
  const xml = new XMLHttpRequest();

  let { url, method, success, body } = options;

  xml.addEventListener("readystatechange", (e) => {
    if (xml.readyState !== 4) return;

    if (xml.readyState === 4 && xml.status >= 200 && xml.status < 300) {
      let res = xml.response,
        json = JSON.parse(res);

      success(json);
    } else {
      let $errorCard = document.querySelector(".error"),
        message = `<p>Ups, sorry. Has error an ocurred <span>Error ${xml.status}</span></p>`;

      $errorCard.classList.remove("none");

      $errorCard.innerHTML = message;
    }
  });

  xml.open(method || "GET", url);
  xml.send(body || null);
}
