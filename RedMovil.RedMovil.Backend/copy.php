<?php



$file=$_GET["file"];
$file = "../RedMovil.RedMovil.UserInterface/Plantillas/".$file;
$newfile = $file."copy";
if (!copy($file, $newfile)) {
    echo "-1";
}
else{
	echo "1";
}


?>