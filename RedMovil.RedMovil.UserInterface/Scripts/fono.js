/* Deja todas las funcionalidades en un solo archivo */

function mostrarFono() {
	var telefono = document.getElementById('tel').value;
	
	document.getElementById("vista").innerHTML= '<center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'+telefono+'\'"><center>';
}
