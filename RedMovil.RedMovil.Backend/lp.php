<?php


$buffer = [];
$ix = 0;
$plantilla = "../RedMovil.RedMovil.UserInterface/Html/como-crear-una-pagina-web-movil2.html";
if (file_exists($plantilla))
{
	$fp = fopen($plantilla,"r");
	$auxplantilla = fread($fp,filesize($plantilla));
	$claves = "../RedMovil.RedMovil.UserInterface/landingpages/keywords.txt";
	if (file_exists($claves))
	{
		$kw = fopen($claves,"r");
		while(! feof($kw))
		{
			$buffer[$ix] = fgets($kw);
			$newplantilla = str_replace("-keyword-",$buffer[$ix],$auxplantilla);
			$new = fopen("../RedMovil.RedMovil.UserInterface/landingpages/".$buffer[$ix].".html","w");
			fwrite($new,$newplantilla);
			fclose($new);
			$ix++;
		}
		fclose($kw);
		fclose($fp);
	}
	else
	{
		echo "No existen palabras claves";
		return;
	}
}
else
{
	echo "Plantilla no existe";
	return;
}

?>