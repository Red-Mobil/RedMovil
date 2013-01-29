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
?>