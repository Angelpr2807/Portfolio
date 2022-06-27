export default function ErrorCard(err) {
  let errorMessage = `
  <div class="error">
    <h2>${err}</h2>
    <p>
      We can't seem to get your current location 😓, please search for the location you want in the search box above ☝️
    </p>
  </div>
  `;

  return errorMessage;
}
