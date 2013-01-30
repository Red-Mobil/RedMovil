<?php



$file=$_GET["file"];
$file = "../RedMovil.RedMovil.UserInterface/Plantillas/".$file;
$newfile = "../RedMovil.RedMovil.UserInterface/Plantillas/new".$file;
if (!copy($file, $newfile)) {
    echo "-1";
}
else{
	echo "1";
}


?>