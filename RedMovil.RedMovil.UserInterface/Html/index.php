<?php include ("../../RedMovil.RedMovil.Backend/grabar.php"); ?>
<script src="../Scripts/fotos.js" type="text/javascript"></script>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
</head>
<body>
<center>
<table border="1">
<tr>
<td width="150">

<input type="button" value="Insertar Galeria" onClick="agregar();">

<input type="button" value="Mostrar Imagenes" onClick="javascript: window.open('../../RedMovil.RedMovil.Backend/imagenes.php', 'Imagenes', 'width = 500, height = 200');">
					
</td>

<td width="400">
<div id="centro">
</div>
</td>

<td width="320">
<center>
<form enctype="multipart/form-data" id="crear" action="index.php?grabar" method="post" style="margin:0px;">
<input type="text" style="WIDTH: 320px;" name="encabezado" placeholder="Ingrese Encabezado"/></br></br>
<input type=file accept="image/*" name="img" style="WIDTH: 320px;">            

</br></br>

<div class="divspoiler">
<input type="button" value="Texto" style='width:320px;' onclick="if (this.parentNode.nextSibling.childNodes[0].style.display != '') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Texto'; }" />
</div><div><div class="spoiler" style="display: none;">
<textarea placeholder="Escribe aqu� el comentario..." name="descripcion" cols="37" rows="5"></textarea>
</div></div>

<div class="divspoiler">
<input type="button" value="Galeria" style='width:320px;' onclick="if (this.parentNode.nextSibling.childNodes[0].style.display != '') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Galeria'; }" />
</div><div><div class="spoiler" style="display: none;">
<input type=file accept="image/*" name="img1" style="WIDTH: 320px;">
<input type=file accept="image/*" name="img2" style="WIDTH: 320px;">
<input type=file accept="image/*" name="img3" style="WIDTH: 320px;">
</div></div>

<div class="divspoiler">
<input type="button" value="Galeria + Texto" style='width:320px;' onclick="if (this.parentNode.nextSibling.childNodes[0].style.display != '') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Galeria + Texto'; }" />
</div><div><div class="spoiler" style="display: none;">
<input type=file accept="image/*" name="img4" style="WIDTH: 320px;">
<textarea placeholder="Escribe aqu� el comentario..." name="t1" cols="37" rows="5"></textarea>
<input type=file accept="image/*" name="img5" style="WIDTH: 320px;">
<textarea placeholder="Escribe aqu� el comentario..." name="t2" cols="37" rows="5"></textarea>
<input type=file accept="image/*" name="img6" style="WIDTH: 320px;">
<textarea placeholder="Escribe aqu� el comentario..." name="t3" cols="37" rows="5"></textarea>
</div></div>

<div class="divspoiler">
<input type="button" value="Contacto" style='width:320px;' onclick="if (this.parentNode.nextSibling.childNodes[0].style.display != '') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Contacto'; }" />
</div><div><div class="spoiler" style="display: none;">
<input type="text" name="celular" placeholder="Ingrese numero Celular"/></br>
<input type="text" name="correo" placeholder="Ingrese e-mail"/><br>
<input type="text" name="direccion" placeholder="Ingrese link google maps"/><br>
</div></div>

<div class="divspoiler">
<input type="button" value="Redes Sociales" style='width:320px;' onclick="if (this.parentNode.nextSibling.childNodes[0].style.display != '') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Redes Sociales'; }" />
</div><div><div class="spoiler" style="display: none;">
<input type="text" name="face" placeholder="Ingrese su Facebook"/></br>
<input type="text" name="twit" placeholder="Ingrese su Twitter"/></br>
</div></div>

<div id=final>
</div>

</br>
</center>
</td>
</tr>
<tr>
<td></td>
<td>
	<?php	
		grabar();					
	?>
</td>
<td>	
		</br>
		Nombre de la Pagina: <input type="text" name="pagina" size="20" maxlength="15"/></br>
		<input type="submit" value="Crear Pagina" style='width:320px;' /></br>
		</br>
</td>
</tr>
</table>
</form>			
</center>
	
</body>

</html>