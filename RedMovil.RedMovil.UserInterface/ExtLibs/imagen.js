$(document).ready(function(){
	var button = $('#upload_button'), interval;
	new AjaxUpload('#upload_button', {
        action: '../../RedMovil.RedMovil.Backend/upload.php',
		onSubmit : function(file , ext){
		if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten imagenes');
			// cancela upload
			return false;
		} else {
			button.text('Subiendo');
			this.disable();
		}
		},
		onComplete: function(file, response){
			button.text('Subir Imagen');
			// enable upload button
			this.enable();			
			// Agrega archivo a la lista						
		}	
	});
});
