<?php
include 'connection.php';
session_start();

$e=$_GET["e"];
$pagina = explode("<pass>",$e);
$email = $pagina[0];
$pass = $pagina[1];	

	$pass = md5($pass);			
	
	$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$email."'");
	$filas=pg_numrows($consulta);
	if($filas == 0 )
	{
		pg_free_result($consulta);		
		$confirmar = md5($email);
		pg_exec("INSERT INTO usuarios(email,pass,id_tipo_usuario,confirmacion) VALUES('".$email."','".$pass."','1','".$confirmar."')");
		pg_free_result($consulta);									
		$mensaje = "Bienvenido".PHP_EOL."Para la activacion de su cuenta pulse el siguiente link:".PHP_EOL."http://www.eddiseno.com/post/registrar.php?validar=".$confirmar.PHP_EOL."Gracias";
		mail($email,"No responder",$mensaje);							
		echo "si";
	}
	else
	{								
		echo "no";
	}								
	pg_free_result($consulta);
?>