<?php
session_start();

	$q=$_GET["q"];			
	$nombre_archivo = "../RedMovil.RedMovil.UserInterface/Html/paginas/".$_SESSION['email']."/".$q."/".$q.".html";
	//echo 'paginas/'.$q.'.html';
	//echo 'alert("hola");'		
	
	if (file_exists($nombre_archivo)) 
	{			
		echo 'si';
	} else 
	{
		echo 'no';
	}
?>