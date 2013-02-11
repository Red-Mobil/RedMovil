var geocoder;
var map;
function inicializarGoogleMaps() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-33.444314, -70.653524);
    var mapOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	document.getElementById("mapa").style.display = 'block';
}