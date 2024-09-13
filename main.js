`use strict`;

{
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(2001, 0, 1)

  const month = months[d.getMonth()];
  const date = d.getDate();
  const day = days[d.getDay()];
  console.log(`${month}, ${date}, ${day}`);
}