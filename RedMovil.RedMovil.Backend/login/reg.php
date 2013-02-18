<?php
include 'connection.php';
session_start();

$e=$_GET["e"];
$pagina = explode("<pass>",$e);
$email = $pagina[0];
$pass = $pagina[1];	

	$pass = md5($pass);			
	
	$consulta=pg_exec("SELECT * FROM usuarios WHERE correousuario = '".$email."'");
	$filas=pg_numrows($consulta);
	if($filas == 0 )
	{
		pg_free_result($consulta);				
		pg_exec("INSERT INTO usuarios(correousuario,claveusuario) VALUES('".$email."','".$pass."')");
		pg_free_result($consulta);										
		$_SESSION['email'] = $email;
		mkdir("../../RedMovil.RedMovil.UserInterface/Html/paginas/".$email);
		mkdir("../../RedMovil.RedMovil.UserInterface/Html/paginas/".$email."/images");
		copy('http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/images/trans.swf',"../../RedMovil.RedMovil.UserInterface/Html/paginas/".$email."/images/trans.swf");
		echo "si";
	}
	else
	{								
		echo "no";
	}								
	pg_free_result($consulta);
?>