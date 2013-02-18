$(document).ready(function(){
	var button = $('#upload_txt'), interval;
	new AjaxUpload('#upload_txt', {
        action: '../../RedMovil.RedMovil.Backend/uploadtxt.php',
		onSubmit : function(file , ext){
		if (! (ext && /^(txt)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten txt');
			// cancela upload
			return false;
		} else {
			document.getElementById('up').value = 'Subiendo';
			this.disable();
		}
		},
		onComplete: function(file, response){
			document.getElementById('up').value = 'Subir Palabras clave';
//			button.text('Subir txt');
			// enable upload button
			this.enable();			
			// Agrega archivo a la lista						
		}	
	});
});
