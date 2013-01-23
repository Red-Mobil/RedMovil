<?php	
	$directorio = '../RedMovil.RedMovil.UserInterface/images/';
	$tmpName  = $_FILES['userfile']['tmp_name'];	
	$name = $_FILES['userfile']['name'];		
	$name = $directorio.$name;				
	file_put_contents($name,file_get_contents($tmpName));		
	
	$fp = fopen("foto.txt","a");
	fwrite($fp,$name.PHP_EOL);
	fclose($fp);			
?>