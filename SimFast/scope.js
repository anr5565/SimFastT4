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