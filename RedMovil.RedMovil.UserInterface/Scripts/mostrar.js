function camposValidos(email, telefono) {

    if ((email != null) || (telefono != null)) {
        if (validarEmail(email) && telefonoValido(telefono)) {
            return true;
        }
    }

    return false;
}

function mostrarTodo() {


        if (document.getElementById('mail').value == "" && document.getElementById('tel').value != "" && document.getElementById('address').value != ""){
		
	    $("#preview_vista_contacto").html('<center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'"><center></br><center><input type="button" value="Ubicacion" onclick="mostrarMapa()"></center>');
	}
	
	if (document.getElementById('mail').value != "" && document.getElementById('tel').value == "" && document.getElementById('address').value != ""){
		
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {
	    
	    $("#preview_vista_contacto").html(
            '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'"><center></br><center><input type="button" value="Ubicacion" onclick="mostrarMapa()"></center>');
	    }
	    
	}
	
	if (document.getElementById('mail').value != "" && document.getElementById('tel').value != "" && document.getElementById('address').value == ""){
		
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {
	    
	    $("#preview_vista_contacto").html(
            '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'"><center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'">');
	    }
		
	}
	
	if (document.getElementById('mail').value == "" && document.getElementById('tel').value != "" && document.getElementById('address').value == ""){
		
	    $("#preview_vista_contacto").html(
            '<center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'">');
	    
	}
	
	if (document.getElementById('mail').value != "" && document.getElementById('tel').value == "" && document.getElementById('address').value == ""){
		
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {	
	    $("#preview_vista_contacto").html(
            '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'">');
	    }
	    
	}
	 
	if (document.getElementById('mail').value == "" && document.getElementById('tel').value == "" && document.getElementById('address').value != ""){   
	    
	    $("#preview_vista_contacto").html(
            '<center></br><center><input type="button" value="Ubicacion" onclick="mostrarMapa()"></center>');
	    
	}
	    
	if (document.getElementById('mail').value != "" && document.getElementById('tel').value != "" && document.getElementById('address').value != ""){    
	    
	    
	    if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value)) {
	    $("#preview_vista_contacto").html(
            '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'
            + document.getElementById('mail').value
            + '\'"><center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'
            + document.getElementById('tel').value
            + '\'"><center></br><center><input type="button" value="Ubicacion" onclick="mostrarMapa()"></center>');
	    }
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