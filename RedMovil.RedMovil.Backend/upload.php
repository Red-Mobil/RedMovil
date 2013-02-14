<?php		
session_start();

//require("class.image-resize.php"); //incluir la clase en el archivo

		$directorio = '../RedMovil.RedMovil.UserInterface/Html/paginas/'.$_SESSION['email'].'/images/';
		$tmpName  = $_FILES['userfile']['tmp_name'];
		echo $tmpName;
		$name = $_FILES['userfile']['name'];		
		$name = $directorio.$name;				
		file_put_contents($name,file_get_contents($tmpName));
		
//		$obj = new img_opt(); 
//		$obj->max_width(350); 
//		$obj->max_height(363); 
//		$obj->image_path($name); 
//		$obj->image_resize();

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
  echo "success";
} else {
  echo "error";
}
?>