export default async function ajax(options) {
  let { url, method, headers, body, success, error } = options;
  try {
    let res = await fetch(url, { method, headers, body }),
      json = await res.json();

    success(json);
  } catch (err) {
    error(err);
  }
}
