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

var styledMapType = new google.maps.StyledMapType(style, {
    name: 'Styled Map'
});
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map'); 
  
function animateFlight() {
  // create the purple box to represent the flight
  var flightBox = new google.maps.Rectangle({
    strokeColor: '#FF00FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF00FF',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8729, -75.2437),
      new google.maps.LatLng(39.8729, -75.2437)
    )
  });



  // set the flight's starting point and ending point
  var startLatLng = new google.maps.LatLng(39.8729, -75.2437);
  var endLatLng = new google.maps.LatLng(40.6895, -74.1745);

  // calculate the distance between the starting point and ending point
  var distance = google.maps.geometry.spherical.computeDistanceBetween(startLatLng, endLatLng);

  // set the duration of the flight (in milliseconds) and the speed of the animation (in meters per millisecond)
  var duration = 10000;
  var speed = distance / (duration*10);

  // set the starting time of the animation
  var startTime = new Date().getTime();

  // define the animation loop
  function animateBox() {
    var time = new Date().getTime() - startTime;
    var distanceTravelled = speed * time;

    if (distanceTravelled >= distance) {
      // the animation is complete, so remove the flight box
      flightBox.setMap(null);
      return;
    }

    // calculate the position of the flight box based on the distance travelled
    var position = google.maps.geometry.spherical.computeOffset(startLatLng, distanceTravelled, google.maps.geometry.spherical.computeHeading(startLatLng, endLatLng));

    // update the flight box's position on the map
    flightBox.setBounds(new google.maps.LatLngBounds(
      new google.maps.LatLng(position.lat() - 0.001, position.lng() - 0.001),
      new google.maps.LatLng(position.lat() + 0.001, position.lng() + 0.001)
    ));

    // call the animateBox function again after a short delay
    setTimeout(animateBox, 10);
  }

  // start the animation loop
  animateBox();
}

// create a button to start the flight animation
var startFlightButton = document.createElement('button');
startFlightButton.textContent = 'Start Flight';
startFlightButton.style.padding = '10px';
startFlightButton.style.borderRadius = '5px';
startFlightButton.style.backgroundColor = '#FF00FF';
startFlightButton.style.color = '#FFFFFF';
startFlightButton.style.fontSize = '16px';
startFlightButton.style.fontFamily = 'Arial, sans-serif';
startFlightButton.style.position = 'absolute';
startFlightButton.style.top = '10px';
startFlightButton.style.right = '10px';
startFlightButton.addEventListener('click', animateFlight);
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(startFlightButton);

function changeHeading(callsign){}

function changeAltitude(callsign){}

function changeSpeed(callsign){}

}  