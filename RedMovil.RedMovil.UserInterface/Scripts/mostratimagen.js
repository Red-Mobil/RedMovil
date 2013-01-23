function mostrarimagen() 
{
	var texto = '<div class="imageRow"><div class="set">';	
	texto = texto + '<div class="single first"><a href="../images/' + document.getElementById('f1').value + '"rel="lightbox[plants]" title="Texto 1."><img src="../images/' + document.getElementById('f1').value + '"width="100" alt="Plants: image 1 0f 4 thumb" /></a></div>';
	
	
	
	texto = texto + '<div class="single"><a href="../images/' + document.getElementById('f2').value + '"rel="lightbox[plants]" title="Texto 2."><img src="../images/' + document.getElementById('f2').value + '"width="100" alt="Plants: image 1 0f 4 thumb" /></a></div>';
	texto = texto + '<div class="single last"><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="Texto 3."><img src="../images/' + document.getElementById('f3').value + '"width="100" alt="Plants: image 1 0f 4 thumb" /></a></div>';
	texto = texto +'</div></div>';
						
	$("#preview_vista_galeria").html(texto);
}