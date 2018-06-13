var clock = document.getElementById('clock');
var date = document.getElementById('date');

function Clock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var timeStr = hours + ':' + minutes + ':' + seconds;
  clock.textContent = timeStr;
}

function Day() {
  var time = new Date();
  var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var week = weeks[time.getDay()];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[time.getMonth()];
  var day = time.getDate();
  var year = time.getFullYear();

  var dateStr = week + ' ' + month + ' ' + day + ', ' +  year;
  date.textContent = dateStr;
}

Day();
Clock();
setInterval(Clock, 1000);
