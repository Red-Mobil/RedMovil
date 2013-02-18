<?php
include 'connection.php';
session_start();

$e=$_GET["e"];
$pagina = explode("<pass>",$e);
$email = $pagina[0];
$pass = $pagina[1];	
	$pass = md5($pass);			
	$consulta=pg_exec("SELECT * FROM usuarios WHERE correousuario = '".$email."' AND claveusuario= '".$pass."' ");
	$filas=pg_numrows($consulta);
	if($filas == 1 )
	{
		$fila = pg_fetch_assoc($consulta);																				
			$_SESSION['email'] = $fila['correousuario'];
			pg_free_result($consulta);
			echo "si";										
	}
	else
	{								
		echo "existe";				
	}							
	pg_free_result($consulta);
?>