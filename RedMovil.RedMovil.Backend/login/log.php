<?php
include 'connection.php';
session_start();

$e=$_GET["e"];
$pagina = explode("<pass>",$e);
$email = $pagina[0];
$pass = $pagina[1];	
	$pass = md5($pass);			
	$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$email."' AND pass= '".$pass."' ");
	$filas=pg_numrows($consulta);
	if($filas == 1 )
	{
		$fila = pg_fetch_assoc($consulta);																		
		if ($fila['id_tipo_usuario'] == '0')
		{
			echo 'Debe validar su direccion de correo electronico antes de continuar, Gracias.';
		}
		else
		{
			$_SESSION['email'] = $fila['email'];
			pg_free_result($consulta);
			echo "si";
		}										
	}
	else
	{								
		echo "no";				
	}							
	pg_free_result($consulta);
?>