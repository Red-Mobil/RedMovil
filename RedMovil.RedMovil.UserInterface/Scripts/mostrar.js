var direccion;

function camposValidos(email, telefono) {

    if ((email != null) || (telefono != null)) {
        if (validarEmail(email) && telefonoValido(telefono)) {
            return true;
        }
    }

    return false;
}

function mostrarTodo() {

	
	if (document.getElementById('tel').value != ""){
		
	    $("#llamanos").html(
            '<center></br><center><input type="button" value="llamanos" id="llamar" class="tt" onclick="parent.location=\'tel:+56'
			//'<center></br><center><input type="button" value="" id="llamar" class="contacto" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'">');
	    
	}
	
	if (document.getElementById('mail').value != ""){
		
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {	
	    $("#escribenos").html(
            '<center><input type="button" id="escribir" class="tt" value="escribenos"  onclick="parent.location=\'mailto:'
			// '<center><input type="button" id="escribir" class="contacto" value="" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'">');
	    }
	    
	}
	 
	if (document.getElementById('address').value != ""){   
	    
	    $("#ubicanos").html(
            '<center></br><center><input type="button" id="ubicar" class="tt" value="ubicanos"  onclick="mostrarMapa()"></center>'
			//'<center></br><center><input type="button" id="ubicar" class="contacto" value="" onclick="mostrarMapa()"></center>');
			);
	}
	    
        
    
}

function mostrarMapa() {
	
	hideall();
	direccion = document.getElementById('address').value;
	inicializarGoogleMaps();
	var latlng = new google.maps.LatLng(-33.444314, -70.653524);
    var mapOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	document.getElementById("mapa").style.display = 'block';
        geocoder.geocode({ 'address': document.getElementById('address').value }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                document.getElementById("mapa").style.display = 'block';
            } else {
                alert("La direccion no se pudo localizar");
            }
        });
	
	vamap();
	
};

function mostrarMP(direct) {
	
	hideall();
	
	geocoder = new google.maps.Geocoder();
	
    var latlng = new google.maps.LatLng(-33.444314, -70.653524);
    var mapOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	document.getElementById("mapa").style.display = 'block';
	
	inicializarGoogleMaps();
        geocoder.geocode({ 'address': direct }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                document.getElementById("mapa").style.display = 'block';
            } else {
                alert("La direccion no se pudo localizar");
            }
        });
	
	vamap();
	
};

function vamap(){
	
	var idmap=2;
	return idmap;
}