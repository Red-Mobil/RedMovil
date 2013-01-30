<?php



$file=$_GET["file"];
$aux = "../RedMovil.RedMovil.UserInterface/Plantillas/".$file;
$newfile = "../RedMovil.RedMovil.UserInterface/Plantillas/new".$file;
if (!copy($aux, $newfile)) {
    echo "-1";
}
else{
	echo "1";
}


?>