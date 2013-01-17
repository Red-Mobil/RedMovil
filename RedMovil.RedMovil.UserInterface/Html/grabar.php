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