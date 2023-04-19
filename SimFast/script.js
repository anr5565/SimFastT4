const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let time = 0;

setInterval(() => {
  time++;
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
}, 1000);

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  const displayTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
  display.textContent = displayTime;
}

function padNumber(num, digits = 2) {
  return num.toString().padStart(digits, '0');
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
