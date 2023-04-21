//maps api key: https://maps.googleapis.com/maps/api/js?key=AIzaSyCSFa_5fRglnU3r9cGfYqLi9VFej4Ba4vQ

//ALL AIRPORTS MENTIONED IN SIM
const PHL = document.getElementById('PHL') //PHILA
const EWR = document.getElementById('EWR') //NEWARK
const TPA = document.getElementById('TPA') //TAMPA
const LGA = document.getElementById('LGA') //LAGUARDIA
const DFW = document.getElementById('DFW') //DALLAS FORT WORTH
const DEN = document.getElementById('DEN') //DENVER
const LAS = document.getElementById('LAS') //LAS VEGAS
const PNE = document.getElementById('PNE') //PHILA N.E
const LAX = document.getElementById('LAX') //LOS ANGELES
const SFO = document.getElementById('SFO') //SAN FRAN
const FRA = document.getElementById('FRA') //FRANKFURT

//PHL ARRIVALS (DESTINATION)
const flight001 = PHL.getElementById('flight001');
const flight002 = PHL.getElementById('flight002');
const flight003 = PHL.getElementById('flight003');
const flight004 = PHL.getElementById('flight004');
const flight005 = PHL.getElementById('flight005');

//PHL DEPARTURES (DESTINATION AIRPORTS)
const flight006 = TPA.getElementById('flight006');
const flight007 = LGA.getElementById('flight007');
const flight008 = DFW.getElementById('flight008');
const flight009 = DEN.getElementById('flight009');
const flight010 = LAS.getElementById('flight010');

//ENROUTE PHL OVERHEADS (DESTINATION AIRPORTS)
const flight011 = PNE.getElementById('flight011');
const flight012 = LAX.getElementById('flight012');
const flight013 = SFO.getElementById('flight013');
const flight014 = FRA.getElementById('flight014');
const flight015 = SFO.getElementById('flight015');

let flight1X = 100;
let flight1Y = 100;
let flight2X = 200;
let flight2Y = 200;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.8730, lng: -75.2437},
      zoom: 10
    });
  }

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
