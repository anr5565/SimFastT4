var stopwatchStartTime; // the start time of the stopwatch
var stopwatchInterval; // the interval ID of the stopwatch timer

function startStopwatch() {
  stopwatchStartTime = new Date().getTime(); // set the start time
  stopwatchInterval = setInterval(updateStopwatch, 1000); // start the timer
}

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the timer
}

function updateStopwatch() {
  var currentTime = new Date().getTime(); // get the current time
  var elapsedTime = currentTime - stopwatchStartTime; // calculate the elapsed time in milliseconds
  var seconds = Math.floor(elapsedTime / 1000); // convert milliseconds to seconds
  var minutes = Math.floor(seconds / 60); // convert seconds to minutes
  var hours = Math.floor(minutes / 60); // convert minutes to hours
  seconds %= 60; // remove the minutes from seconds
  minutes %= 60; // remove the hours from minutes
  hours %= 24; // keep hours within 24 hours
  var stopwatchElement = document.getElementById("stopwatch"); // get the stopwatch element
  stopwatchElement.innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // update the stopwatch display
}

function pad(number) {
  if (number < 10) {
    return "0" + number; // add a leading zero for single-digit numbers
  }
  else {
    return number;
  }
}
