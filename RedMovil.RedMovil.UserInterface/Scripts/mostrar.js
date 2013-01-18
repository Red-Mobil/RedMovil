/* Deja todas las funcionalidades en un solo archivo */

function mostrartodo() {
	var telefono = document.getElementById('tel').value;
        var email = document.getElementById('mail').value;
		
	if (validarEmail(email))
	{
	document.getElementById("vista").innerHTML= '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'+email+'\'"><center></br><center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'+telefono+'\'"><center>';
	} else {
                document.getElementById("vista").innerHTML= '<center><input type="button" value="Llamar" onclick="parent.location=\'tel:+56'+telefono+'\'"><center>';
        }
}