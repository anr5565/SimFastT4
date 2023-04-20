let timerId;
let lastTime;
let speed = 2;
const container = document.getElementById("container");
const box = document.getElementById("box");
const centerX = container.clientWidth / 2;
const centerY = container.clientHeight / 2;
const startX = Math.floor(Math.random() * container.clientWidth);
const startY = Math.floor(Math.random() * container.clientHeight);
box.style.left = `${startX}px`;
box.style.top = `${startY}px`;

function moveBox(timestamp) {
  if (!lastTime) {
    lastTime = timestamp;
  }
  const elapsed = timestamp - lastTime;
  if (elapsed >= 1000 / speed) {
    lastTime = timestamp;
    const angle = timestamp / 1000;
    const amplitudeX = 100;
    const amplitudeY = 50;
    const offsetX = Math.floor(Math.sin(angle) * amplitudeX);
    const offsetY = Math.floor(Math.cos(angle) * amplitudeY);
    const left = centerX + offsetX - (box.clientWidth / 2);
    const top = centerY + offsetY - (box.clientHeight / 2);
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
  }
  timerId = requestAnimationFrame(moveBox);
}

function startAnimation() {
  timerId = requestAnimationFrame(moveBox);
}

function stopAnimation() {
  cancelAnimationFrame(timerId);
}

function resetAnimation() {
  stopAnimation();
  box.style.left = "0px";
  box.style.top = "0px";
  lastTime = null;
}

function changeSpeed() {
  speed = parseInt(document.getElementById("speed").value);
  resetAnimation();
}

const startBtn = document.getElementById("start-stop");
startBtn.addEventListener("click", function() {
  if (timerId) {
    stopAnimation();
    startBtn.textContent = "Start";
  } else {
    startAnimation();
    startBtn.textContent = "Stop";
  }
});
