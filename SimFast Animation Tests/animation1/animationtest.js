var box = document.getElementById("box");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var fasterButton = document.getElementById("faster");
var resetButton = document.getElementById("reset");
var stopwatch = document.getElementById("stopwatch");
var animation;
var speed = 10;
var time = 0;

function moveBox() {
    var x = box.offsetLeft;
    var y = box.offsetTop;
    x += speed;
    y += speed;
    if (x > window.innerWidth - box.offsetWidth) {
        x = 0;
    }
    if (y > window.innerHeight - box.offsetHeight) {
        y = 0;
    }
    box.style.left = x + "px";
    box.style.top = y + "px";
}

function updateStopwatch() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    stopwatch.innerHTML = elapsedTime.toFixed(2);
}

function startAnimation() {
    startTime = new Date().getTime();
    animation = setInterval(() => {
      moveBox();
      updateStopwatch();
    }, 10);
    box.style.display = "block"; // show the box
  }

function stopAnimation() {
    clearInterval(animation);
}

function fasterAnimation() {
    speed += 3;
}

function slowDown() {
    clearInterval(animation);
    animation = setInterval(() => {
        moveBox();
        updateStopwatch();
    }, 50);
}

function resetAnimation() {
    clearInterval(animation);
    position = 0;
    box.style.left = position + "px";
    stopwatch.innerHTML = "0.00";
}

function updateStopwatch() {
    stopwatch.innerHTML = time.toFixed(1) + "s";
}

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
fasterButton.addEventListener("click", fasterAnimation);
resetButton.addEventListener("click", resetAnimation);

setInterval(function() {
    if (animation) {
        time += 0.1;
        updateStopwatch();
    }
}, 100);
