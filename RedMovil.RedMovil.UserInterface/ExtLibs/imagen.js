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
			button.text('Uploading');
			this.disable();
		}
		},
		onComplete: function(file, response){
			button.text('Upload');
			// enable upload button
			this.enable();			
<<<<<<< HEAD
			// Agrega archivo a la lista						
		}	
	});
});
=======
			// Agrega archivo a la lista
			$('#lista').appendTo('.files').text(file);
		}	
	});
});
>>>>>>> 0e12f47a4d0cc2d723aceb6dd3eda8feffd523a4
