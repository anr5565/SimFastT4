var map;
var animation = {};
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

var styledMapType = new google.maps.StyledMapType(style, {
    name: 'Styled Map'
});
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

fetch('FlightData.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(flight => {
      var marker = new google.maps.Marker({
        position: {lat: flight.latitude, lng: flight.longitude},
        map: map,
        icon: 'airplane.png',
        rotation: flight.heading,
        title: flight.flightNumber
      });
   

  // add an info window to each marker that displays the flight number
var infowindow = new google.maps.InfoWindow({
    content: flight.flightNumber
  });
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
  // add an event listener to each marker that displays a tooltip on mouseover
marker.addListener('mouseover', function() {
    var tooltip = new google.maps.InfoWindow({
      content: flight.flightNumber
    });
    tooltip.open(map, marker);

     });
  });
  });
}  

function changeAlt(){}

function startAnimation(){}

function stopAnimation(){}

function timer(){}