<<<<<<< HEAD
<?php	
	$directorio = '../RedMovil.RedMovil.UserInterface/images/';
	$tmpName  = $_FILES['userfile']['tmp_name'];	
	$name = $_FILES['userfile']['name'];		
	$name = $directorio.$name;				
	file_put_contents($name,file_get_contents($tmpName));		
	
	$fp = fopen("foto.txt","a");
	fwrite($fp,$name.PHP_EOL);
	fclose($fp);			
=======
<?php

		
		$directorio = '../RedMovil.RedMovil.UserInterface/images/';
		$tmpName  = $_FILES['userfile']['tmp_name'];
		echo $tmpName;
		$name = $_FILES['userfile']['name'];		
		$name = $directorio.$name;				
		file_put_contents($name,file_get_contents($tmpName));

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
  echo "success";
} else {
  echo "error";
}
>>>>>>> 0e12f47a4d0cc2d723aceb6dd3eda8feffd523a4
?>