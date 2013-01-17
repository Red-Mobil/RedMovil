<?php
	$imagenes =  glob("./images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		echo '<a href="./images/'.$nombres[$i].'"><img src="./images/'.$nombres[$i].'" title="'.$nombres[$i].'"  onClick="echo hola" width="100px" height="100px"></a>';				
		$i = $i+1;
	}	
?>