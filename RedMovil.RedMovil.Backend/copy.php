<?php



$file=$_GET["file"];
$file = "../RedMovil.RedMovil.UserInterface/Plantillas/".$file;
$newfile = "nuevo.css";
if (!copy($file, $newfile)) {
    echo "-1";
}
else{
	echo "1";
}


?>