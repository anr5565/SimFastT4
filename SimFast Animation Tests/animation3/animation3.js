const flight1 = document.getElementById('flight1');
const flight2 = document.getElementById('flight2');

let flight1X = 100;
let flight1Y = 100;
let flight2X = 200;
let flight2Y = 200;

function animateFlights() {
  flight1X += 1; // update flight1's X position
  flight1.style.left = flight1X + 'px'; // rerender flight1's position

  flight2X += 2; // update flight2's X position
  flight2Y -= 1; // update flight2's Y position
  flight2.style.left = flight2X + 'px'; // rerender flight2's position
  flight2.style.top = flight2Y + 'px'; // rerender flight2's position

  requestAnimationFrame(animateFlights); // loop the animation
}

animateFlights();

// add event listeners for arrow keys to control flights
document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      // update flight's properties
      break;
    case 'ArrowDown':
      // update flight's properties
      break;
    case 'ArrowLeft':
      // update flight's properties
      break;
    case 'ArrowRight':
      // update flight's properties
      break;
  }
});
