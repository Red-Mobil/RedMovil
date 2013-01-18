function mostrarMail() { 
	
		

		
		var email = document.getElementById('mail').value;
		
		if (validarEmail(email))
{
	document.getElementById("vista2").innerHTML= '<center><input type="button" value="Enviar email" onclick="parent.location=\'mailto:'+email+'\'"><center>';
		}
}