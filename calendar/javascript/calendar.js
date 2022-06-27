export default function Calendar(dateEvent) {
  let date = new Date().toDateString(),
    actualTime = Math.floor(Date.parse(date) / (1000 * 60 * 60 * 24)),
    eventTime = Math.floor(Date.parse(dateEvent) / (1000 * 60 * 60 * 24)),
    daysLeft = eventTime - actualTime;

  return daysLeft;
}
