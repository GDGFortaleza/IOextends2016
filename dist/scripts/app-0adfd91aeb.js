function initialize_map(){mapOptions={zoom:17,center:geoPoint,zoomControl:!0,scaleControl:!0,scrollwheel:!1,mapTypeControl:!0,streetViewControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR},streetViewControlOptions:{}},map=new google.maps.Map(document.getElementById("maplayer"),mapOptions),marker=new google.maps.Marker({map:map,position:geoPoint})}var map,marker,mapOptions;google.maps.event.addDomListener(window,"load",initialize_map);