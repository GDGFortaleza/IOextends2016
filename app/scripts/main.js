// Variables Declaration
var map;
var marker;
var mapOptions;

function initialize_map() {
  mapOptions = {
    zoom: 17,
    center: geoPoint,
    zoomControl: true,
    scaleControl: true,
    scrollwheel: false,
    mapTypeControl: true,
    streetViewControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    },
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    },
    streetViewControlOptions: {}
  };

  map = new google.maps.Map(document.getElementById('maplayer'), mapOptions);

  marker = new google.maps.Marker({
    map: map,
    position: geoPoint
  })
}

// Wait for de page load and init the map
google.maps.event.addDomListener(window, 'load', initialize_map);
