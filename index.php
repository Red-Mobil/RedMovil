<?php
function grabar()
{
	if (isset($_GET['grabar']))
	{		
		
		$fp = fopen($_POST["pagina"].".php","w");
		$directorio = 'images/';		
		fwrite($fp, "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>" .PHP_EOL."<html>".PHP_EOL."<head>".PHP_EOL."</head>".PHP_EOL."<body>".PHP_EOL."<center>".PHP_EOL);	//lineas iniciales de la nueva pagina php
		
		//agrega el encabezado
		fwrite($fp,$_POST['encabezado']."</br></br>".PHP_EOL);
	
		//agregar foto				
		$tmpName  = $_FILES['img']['tmp_name'];
		$name = $_FILES['img']['name'];		
		echo $_FILES['img']['size'];		
		$name = $directorio.$name;		
		file_put_contents($name,file_get_contents($tmpName));						
		fwrite($fp,'<img src='.$name. ' width="320"></br>');

		//funcion texto
		fwrite($fp,'<div class="divspoiler">.'.PHP_EOL.'<input type="button" value="Texto"'."style='width:320px;' onclick=".'"if (this.parentNode.nextSibling.childNodes[0].style.display != '."'') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Texto'; }".'" />'.PHP_EOL);//agregar nombre boton texto
		fwrite($fp,'</div><div><div class="spoiler" style="display: none;">'.PHP_EOL);
		fwrite($fp,$_POST['descripcion'].PHP_EOL.'</div></div>');	//Fin del boton texto
		
		//funcion galeria
		
		
		
		//funcion galeria + texto		
		fwrite($fp,'<div class="divspoiler">.'.PHP_EOL.'<input type="button" value="Galeria + Texto"'."style='width:320px;' onclick=".'"if (this.parentNode.nextSibling.childNodes[0].style.display != '."'') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Galeria + Texto'; }".'" />'.PHP_EOL);
		fwrite($fp,'</div><div><div class="spoiler" style="display: none;">'.PHP_EOL);		
		
		//foto + texto 1		
		fwrite($fp,'<table>'.PHP_EOL.'<tr>'.PHP_EOL.'<td>');				
		$tmpName  = $_FILES['img4']['tmp_name'];
		$name = $_FILES['img4']['name'];		
		$name = $directorio.$name;		
		file_put_contents($name,file_get_contents($tmpName));						
		fwrite($fp,'<img src='.$name. ' width="100"></td>'.PHP_EOL.'</td>'.PHP_EOL.'<td>'.$_POST['t1'].'</td></table>');		
		
		//foto + texto 2		
		fwrite($fp,'<table>'.PHP_EOL.'<tr>'.PHP_EOL.'<td>');				
		$tmpName  = $_FILES['img5']['tmp_name'];
		$name = $_FILES['img5']['name'];		
		$name = $directorio.$name;		
		file_put_contents($name,file_get_contents($tmpName));						
		fwrite($fp,'<img src='.$name. ' width="100"></td>'.PHP_EOL.'</td>'.PHP_EOL.'<td>'.$_POST['t2'].'</td></table>');		
		
		//foto + texto 3		
		fwrite($fp,'<table>'.PHP_EOL.'<tr>'.PHP_EOL.'<td>');				
		$tmpName  = $_FILES['img6']['tmp_name'];
		$name = $_FILES['img6']['name'];		
		$name = $directorio.$name;		
		file_put_contents($name,file_get_contents($tmpName));						
		fwrite($fp,'<img src='.$name. ' width="100"></td>'.PHP_EOL.'</td>'.PHP_EOL.'<td>'.$_POST['t3'].'</td></table>');		
		
		fwrite($fp,'</div></div>');	//Fin del boton imagen
		
		//funcion contacto
		if (strlen($_POST['celular']) == 0 && strlen($_POST['correo']) == 0 && strlen($_POST['direccion']) == 0)
		{}
		else
		{		
			fwrite($fp,'<div class="divspoiler">.'.PHP_EOL.'<input type="button" value="Contacto"'."style='width:320px;' onclick=".'"if (this.parentNode.nextSibling.childNodes[0].style.display != '."'') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Contacto'; }".'" />'.PHP_EOL);
			fwrite($fp,'</div><div><div class="spoiler" style="display: none;">'.PHP_EOL);		
			if (strlen($_POST['celular']) > 0)
			//fwrite($fp,'<form>'.PHP_EOL.'<input type="button" onclick="href=tel:+56'.$_POST['celular'].'" value="Llamar"/>'.PHP_EOL.'</form>');
			fwrite($fp,'<a href="tel:+56'.$_POST['celular'].'">Llamar</a></br>');
			if (strlen($_POST['correo']) > 0)
			//fwrite($fp,'<form>'.PHP_EOL.'<input type="button" onclick="href=mailto:'.$_POST['correo'].'" value="Correo"/>'.PHP_EOL.'</form>');
			fwrite($fp,'<a href="mailto:'.$_POST['correo'].'">Correo</a></br>');		
			if (strlen($_POST['direccion']) >0)
			fwrite($fp,'<a href="'.$_POST['direccion'].'">Direccion</a></br>');
			//fwrite($fp,'<form>'.PHP_EOL.'<input type="button" onclick="href='.$_POST['direccion'].'value="Correo"/>'.PHP_EOL.'</form>');				
			fwrite($fp,'</div></div>');	//Fin del boton contacto
		}
		
		
		//funcion redes sociales
		fwrite($fp,'<div class="divspoiler">.'.PHP_EOL.'<input type="button" value="Redes Sociales"'."style='width:320px;' onclick=".'"if (this.parentNode.nextSibling.childNodes[0].style.display != '."'') { this.parentNode.nextSibling.childNodes[0].style.display = ''; this.value = 'Ocultar'; } else { this.parentNode.nextSibling.childNodes[0].style.display = 'none'; this.value = 'Redes Sociales'; }".'" />'.PHP_EOL);
		fwrite($fp,'</div><div><div class="spoiler" style="display: none;">'.PHP_EOL);		
		if (strlen($_POST['face']) >0)
		fwrite($fp,'<a href="'.$_POST['face'].'">Facebook</a></br>');
		if (strlen($_POST['twit']) >0)
		fwrite($fp,'<a href="'.$_POST['twit'].'">Twitter</a></br>');		
		fwrite($fp,'</div></div>');	//Fin del boton redes sociales		
		fwrite($fp,PHP_EOL."</center>".PHP_EOL."</body>".PHP_EOL."</html>");
		fclose($fp);			
	}
}		
?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
</head>
<body>
<center>
<table border="1">
<tr>
<td width="150">
<form enctype="multipart/form-data" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
			<input type=file accept="image/*" name="im" style="WIDTH: 320px;">            
            <input type="submit" value="Submit" />
        </form>

</td>
<td width="400">
Chao 
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
<textarea placeholder="Escribe aquí el comentario..." name="descripcion" cols="37" rows="5"></textarea>
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
<textarea placeholder="Escribe aquí el comentario..." name="t1" cols="37" rows="5"></textarea>
<input type=file accept="image/*" name="img5" style="WIDTH: 320px;">
<textarea placeholder="Escribe aquí el comentario..." name="t2" cols="37" rows="5"></textarea>
<input type=file accept="image/*" name="img6" style="WIDTH: 320px;">
<textarea placeholder="Escribe aquí el comentario..." name="t3" cols="37" rows="5"></textarea>
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