var map;
var airportMarker;
var center = { lat: 39.8729, lng: -75.2437 };

function initMap() {
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
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 8,
        styles: style,
        mapTypeControl: false,
        streetViewControl: false
      });

//AIRPORT RUNWAYS COORDS
    var PHLrunwayCoords = [
        { lat: 39.8774, lng: -75.2427 },
        { lat: 39.8775, lng: -75.2453 },
        { lat: 39.8698, lng: -75.2460 },
        { lat: 39.8696, lng: -75.2435 },
        { lat: 39.8774, lng: -75.2427 }
    ];
    var EWRrunwayCoords = [
      { lat: 40.694535, lng: -74.177189 },
      { lat: 40.698078, lng: -74.174883 },
      { lat: 40.697628, lng: -74.174162 },
      { lat: 40.696928, lng: -74.173334 },
      { lat: 40.695875, lng: -74.172462 }
    ];
    var SFOrunwayCoords = [
      { lat: 37.616508, lng: -122.381321 },
      { lat: 37.626722, lng: -122.378225 },
      { lat: 37.625925, lng: -122.371899 },
      { lat: 37.615728, lng: -122.375032 },
      { lat: 37.616508, lng: -122.381321 }
    ];
    var ORDrunwayCoords = [
      { lat: 41.982834, lng: -87.925004 },
      { lat: 41.992558, lng: -87.922007 },
      { lat: 41.990804, lng: -87.908247 },
      { lat: 41.981080, lng: -87.911244 },
      { lat: 41.982834, lng: -87.925004 },
    ];
    var LAXrunwayCoords = [
      { lat: 33.947873, lng: -118.432202 },
      { lat: 33.950646, lng: -118.417490 },
      { lat: 33.952391, lng: -118.417705 },
      { lat: 33.949618, lng: -118.432417 },
      { lat: 33.947873, lng: -118.432202 }
    ];
    var ATLrunwayCoords = [
      { lat: 33.648322, lng: -84.454317 },
      { lat: 33.649573, lng: -84.441212 },
      { lat: 33.649156, lng: -84.440795 },
      { lat: 33.647905, lng: -84.453901 },
      { lat: 33.648322, lng: -84.454317 }
    ];
    var MIArunwayCoords = [
      { lat: 25.809364, lng: -80.305576 },
      { lat: 25.807072, lng: -80.302389 },
      { lat: 25.802312, lng: -80.311785 },
      { lat: 25.804604, lng: -80.314972 },
      { lat: 25.809364, lng: -80.305576 }
    ];
    var TPArunwayCoords = [
      { lat: 27.975014, lng: -82.539227 },
      { lat: 27.973887, lng: -82.537774 },
      { lat: 27.972170, lng: -82.541186 },
      { lat: 27.973298, lng: -82.542638 },
      { lat: 27.975014, lng: -82.539227 }
    ];
    var LGArunwayCoords = [
      { lat: 40.780733, lng: -73.885139 },
      { lat: 40.778739, lng: -73.881879 },
      { lat: 40.777529, lng: -73.882878 },
      { lat: 40.779523, lng: -73.886137 },
      { lat: 40.780733, lng: -73.885139 }
    ]
    var DFWrunwayCoords = [
      { lat: 32.890208, lng: -97.042496 },
      { lat: 32.894589, lng: -97.030016 },
      { lat: 32.893607, lng: -97.029344 },
      { lat: 32.889225, lng: -97.041824 },
      { lat: 32.890208, lng: -97.042496 }
    ]
    var DENrunwayCoords = [
      { lat: 39.847461, lng: -104.673224 },
      { lat: 39.861188, lng: -104.668444 },
      { lat: 39.860103, lng: -104.666690 },
      { lat: 39.846375, lng: -104.671471 },
      { lat: 39.847461, lng: -104.673224 }
    ]
    var LASrunwayCoords = [
      { lat: 36.078863, lng: -115.162268 },
      { lat: 36.080226, lng: -115.152748 },
      { lat: 36.079319, lng: -115.152514 },
      { lat: 36.077956, lng: -115.162034 },
      { lat: 36.078863, lng: -115.162268 }
    ]

//AIRPORT RUNWAY MARKERS
    var PHLrunway = new google.maps.Polygon({
        paths: PHLrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      PHLrunway.setMap(map);
    var EWRrunway = new google.maps.Polygon({
        paths: EWRrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      EWRrunway.setMap(map);
    var SFOrunway = new google.maps.Polygon({
        paths: SFOrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      SFOrunway.setMap(map);
    var ORDrunway = new google.maps.Polygon({
        paths: ORDrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      ORDrunway.setMap(map);
    var LAXrunway = new google.maps.Polygon({
        paths: LAXrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      LAXrunway.setMap(map);
    var ATLrunway = new google.maps.Polygon({
        paths: ATLrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      ATLrunway.setMap(map);
    var MIArunway = new google.maps.Polygon({
        paths: MIArunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      MIArunway.setMap(map);
    var TPArunway = new google.maps.Polygon({
        paths: TPArunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      TPArunway.setMap(map);
    var LGArunway = new google.maps.Polygon({
        paths: LGArunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      LGArunway.setMap(map);
    var DFWrunway = new google.maps.Polygon({
        paths: DFWrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      DFWrunway.setMap(map);
    var DENrunway = new google.maps.Polygon({
        paths: DENrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      DENrunway.setMap(map);
    var LASrunway = new google.maps.Polygon({
        paths: LASrunwayCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        fillColor: '#0000ff',
        fillOpacity: 1.0
      });
      LASrunway.setMap(map);

var styledMapType = new google.maps.StyledMapType(style, {
    name: 'Styled Map'
});
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map'); 


//buttons
const startButton = document.getElementById('start');
startButton.addEventListener('click', startStopwatch);
document.getElementById('start').addEventListener('click', animateFlight);

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopTimer);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
  location.reload();
});

//stopwatch functions
function startStopwatch() {
  let startTime = Date.now(); // get the current time in milliseconds
  setInterval(() => {
    let elapsedTime = Date.now() - startTime; // calculate elapsed time in milliseconds
    let formattedTime = formatTime(elapsedTime); // format the elapsed time as a string
    document.getElementById('stopwatch').textContent = formattedTime; // display the formatted time in the stopwatch element
  }, 1000); // update the stopwatch every second
}

function stopStopwatch(){
  clearInterval(interval);
}

function formatTime(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000); // calculate total elapsed seconds
  let minutes = Math.floor(totalSeconds / 60); // calculate elapsed minutes
  let seconds = totalSeconds % 60; // calculate elapsed seconds
  let hours = Math.floor(minutes / 60); // calculate elapsed hours
  minutes %= 60; // adjust elapsed minutes
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`; // return formatted time as a string
}

function formatNumber(number) {
  return number.toString().padStart(2, '0'); // pad single-digit numbers with a leading zero
}

//control functions
function changeHeading(callsign){}
function changeAltitude(callsign){}
function changeSpeed(callsign){}

}  