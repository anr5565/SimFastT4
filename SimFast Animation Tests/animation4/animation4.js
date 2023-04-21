var map;
var airportMarker;
let timerId;
let lastTime;
let speed = 2;
const container = document.getElementById("container");
const box = document.getElementById("box");
const centerX = box.clientWidth / 2;
const centerY = box.clientHeight / 2;
const startX = Math.floor(Math.random() * box.clientWidth);
const startY = Math.floor(Math.random() * box.clientHeight);
box.style.left = `${startX}px`;
box.style.top = `${startY}px`;

//function for the google map to work
function initMap() {
    // Center the map on the United States
    var center = { lat: 39.8729, lng: -75.2437 };

    
    // Define the map style
    var style = [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              { "color": "#00ff00" },
              { "lightness": 16 }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              { "color": "#00ff00" },
              { "lightness": 16 }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.stroke",
            "stylers": [
              { "color": "#000000" },
              { "lightness": 16 }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              { "color": "#000000" },
              { "lightness": 20 }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              { "color": "#000000" },
              { "lightness": 16 }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              { "visibility": "off" }
            ]
          }
        ];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 8,
        styles: style,
        mapTypeControl: false,
        streetViewControl: false
      });

    var runwayCoords = [
        { lat: 39.8774, lng: -75.2427 },
        { lat: 39.8775, lng: -75.2453 },
        { lat: 39.8698, lng: -75.2460 },
        { lat: 39.8696, lng: -75.2435 },
        { lat: 39.8774, lng: -75.2427 }
    ];

    var runway = new google.maps.Polygon({
        paths: runwayCoords,
        strokeColor: '#00ff00',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#00ff00',
        fillOpacity: 1.0
      });
      runway.setMap(map);


map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map'); 
  
  animation.box = new google.maps.Rectangle({
    strokeColor: '#0000ff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000ff',
    fillOpacity: 0.35,
    map: animation.map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(center.lat - 0.01, center.lng - 0.01),
      new google.maps.LatLng(center.lat + 0.01, center.lng + 0.01)
    )
  });

}

//other func
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
    startBtn.innerHTML = "Start";
  } else {
    startAnimation();
    startBtn.innerHTML = "Stop";
  }
});
