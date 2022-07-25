async function ajax(options) {
  let { url, method, headers, body, success, error } = options;
  try {
    let res = await fetch(url, { method, headers, body }),
      json = await res.text();

    if (!res.ok) throw res;

    success(json);
  } catch (err) {
    error(err);
  }
}

export default function imageHandler() {
  const d = document,
    uploader = (file) => {
      const formData = new FormData();
      formData.append("file", file);

      ajax({
        url: "./php/uploader.php",
        method: "POST",
        headers: { "enc-type": "multipart/form-data" },
        body: formData,
        success: (json) => {
          alert("Se subió la imágen de manera exitosa");
        },
        error: (err) => {
          alert("Error al subir el archivo");
        },
      });
    };

  d.addEventListener("change", (e) => {
    if (e.target.matches('input[type="file"]')) {
      const $input = e.target,
        extencion = /(.jpg)$/i;

      let ruta = $input.value;

      if (!extencion.exec(ruta)) {
        alert('extención no valida, solo aceptamos imágenes ".jpg"');
        ruta = "";
        $input.value = "";
        return false;
      }

      uploader(e.target.files[0]);
    }
  });
}
