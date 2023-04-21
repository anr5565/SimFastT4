var map;
var airportMarker;


//function for the google map to work
function initMap() {
    // Center the map on the United States
    var airport = { lat: 39.8729, lng: -75.2437 };
    
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
        zoom: 4,
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
}

//animation
const planes = document.querySelectorAll('.plane');
function movePlanes() {
     planes.forEach(plane => {
     let pos = parseInt(plane.style.left);
     let id = setInterval(frame, 10);
     function frame() {
    if (pos == 700) {
     clearInterval(id);
     plane.style.left = '-50px';
     } else {
     pos++;
    plane.style.left = pos + 'px';
     }
     }
     });
    }
    
    
    
    document.getElementById('takeoff').addEventListener('click', function() {
     movePlanes();
    });
    
    
    
    document.getElementById('landing').addEventListener('click', function() {
     planes.forEach(plane => {
     plane.style.left = plane.getAttribute('data-initial-left') + 'px';
     });
    });


