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
            '<center></br><center><input type="button" id="llamar" value="Llamar" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'">');
	    
	}
	
	if (document.getElementById('mail').value != ""){
		
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {	
	    $("#escribenos").html(
            '<center><input type="button" id="escribir" value="Enviar email" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'">');
	    }
	    
	}
	 
	if (document.getElementById('address').value != ""){   
	    
	    $("#ubicanos").html(
            '<center></br><center><input type="button" id="ubicar" value="Ubicacion" onclick="mostrarMapa()"></center>');
	    
	}
	    
        
    
}

function mostrarMapa() {
	
	inicializarGoogleMaps();
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
	
};