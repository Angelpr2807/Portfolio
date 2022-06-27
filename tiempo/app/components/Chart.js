export default function Chart(data, serie, el) {
  let dateTime = new Date(el.dt_txt),
    dateTimeTxt = dateTime.getHours(),
    temperature = el.main.temp,
    day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  if (dateTimeTxt > 12) {
    data.labels.push(`${dateTimeTxt - 12} pm`);
  } else if (dateTimeTxt === 0) {
    data.labels.push(`${dateTime.getDate()} ${day[dateTime.getDay()]}`);
  } else {
    data.labels.push(`${dateTimeTxt} am`);
  }

  serie.push(temperature);
}
