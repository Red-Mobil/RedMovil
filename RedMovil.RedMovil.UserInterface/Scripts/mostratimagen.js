function mostrarimagen() 
{
	var texto = '<center></br><center><input type="button" value="Galeria" onclick="mostrarimagenes()" id="botonimagen" \></br></br>';		

	texto = texto + '<div class="imageRow"><div class="set">';	
	texto = texto + '<div class="single first" id=i1><a href="../images/' + document.getElementById('f1').value + '"rel="lightbox[plants]" title="Texto 1."><img src="../images/' + document.getElementById('f1').value + '"width="100" alt="Plants: image 1 0f 4 thumb"/></a></div>';
	texto = texto + '<div class="single" id=i2><a href="../images/' + document.getElementById('f2').value + '"rel="lightbox[plants]" title="Texto 2."><img src="../images/' + document.getElementById('f2').value + '"width="100" alt="Plants: image 1 0f 4 thumb" /></a></div>';
	texto = texto + '<div class="single last" id=i3><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="Texto 3."><img src="../images/' + document.getElementById('f3').value + '"width="100" alt="Plants: image 1 0f 4 thumb" /></a></div>';
	texto = texto +'</div></div>';
						
	$("#preview_vista_galeria").html(texto);
	document.getElementById('i1').style.display = 'none';
	document.getElementById('i2').style.display = 'none';
	document.getElementById('i3').style.display = 'none';
}

function mostrarimagenes()
{
	document.getElementById('home').style.display = 'block';
	document.getElementById('botonimagen').style.display = 'none';
	document.getElementById('i1').style.display = 'block';
	document.getElementById('i2').style.display = 'block';
	document.getElementById('i3').style.display = 'block';
}