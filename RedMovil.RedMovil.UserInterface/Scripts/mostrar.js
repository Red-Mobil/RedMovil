/* Deja todas las funcionalidades en un solo archivo */

function CamposValidos() {
	return true;
}

function mostrartodo() {
	var telefono = document.getElementById('tel').value;
    var email = document.getElementById('mail').value;
		
	// Validar que el correo y el TELEFONO para mostrarlos en el skin del Aifon
	// Antes de volver a dibujar los botones de Llamanos y Contactanos,
	// validar que no existan, si existen borrarlos del html
	
	debugger;
	if (CamposValidos(telefono, email)){
		alert(1);
	}
	
	if (validarEmail(email))
	{
	document.getElementById("escribenos").innerHTML= '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'+email+'\'"><center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'+telefono+'\'"><center>';
	var address = document.getElementById("address").value;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location
			});
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
	} else {
                document.getElementById("llamanos").innerHTML= '<center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'+telefono+'\'"><center>';
		var address = document.getElementById("address").value;
		geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			 map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
			 map: map,
			position: results[0].geometry.location
			});
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
		});
	}
        }
