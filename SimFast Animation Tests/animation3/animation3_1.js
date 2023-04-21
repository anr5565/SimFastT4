var map;
var airportMarker;

//Defining Animation Object
var animation = {
    map: null,
    box: null,
    currentFrame: 0,
    intervalId: null,
    startTime: null,
    pausedTime: null,
    paused: false,
    speedMultiplier: 1
  };

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
        center: airport,
        zoom: 8,
        styles: style
      });

    var runwayCoords = [
        { lat: 39.8774, lng: -75.2427 },
        { lat: 39.8775, lng: -75.2453 },
        { lat: 39.8698, lng: -75.2460 },
        { lat: 39.8696, lng: -75.2435 },
        { lat: 39.8774, lng: -75.2427 }
    ]

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

//changes



// Start the animation
function startAnimation(center) {
  // Set the animation start time
  if (animation.paused) {
    animation.startTime += (Date.now() - animation.pausedTime);
    animation.paused = false;
  } else {
    animation.startTime = Date.now();
  }

  // Start the animation interval
  animation.intervalId = setInterval(function() {
    // Update the current frame
    animation.currentFrame++;

    // Calculate the position of the blue box
    var position = google.maps.geometry.spherical.computeOffset(
      new google.maps.LatLng(center),
      5000000,
      (animation.currentFrame / 50) * animation.speedMultiplier,
      google.maps.geometry.spherical.computeHeading(
        new google.maps.LatLng(center),
        new google.maps.LatLng(center.lat + 10, center.lng)
      )
    );

    // Move the blue box to the new position
    animation.box.setBounds(new google.maps.LatLngBounds(
      new google.maps.LatLng(position.lat() - 0.01, position.lng() - 0.01),
      new google.maps.LatLng(position.lat() + 0.01, position.lng() + 0.01)
    ));

    // Check if the animation is finished
    if (animation.currentFrame >= 50 / animation.speedMultiplier) {
      stopAnimation();
    }
  }, 10);
}

// Stop the animation
function stopAnimation() {
  clearInterval(animation.intervalId);
  animation.currentFrame = 0;
  animation.intervalId = null;
}

// Toggle the animation play state
function toggleAnimation() {
  if (animation.intervalId) {
    stopAnimation();
  } else {
    startAnimation(center);
  }
}

// Bind the start and stop buttons to the animation functions
document.getElementById('start').addEventListener('click', toggleAnimation);
document.getElementById('stop').addEventListener('click', toggleAnimation);