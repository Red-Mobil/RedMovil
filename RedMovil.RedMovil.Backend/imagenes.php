<?php

	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		echo $nombres[$i].'</br>'.'<img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'" width="100px" height="100px"></br>';
		//echo '<a href="./images/'.$nombres[$i].'"><img src="./images/'.$nombres[$i].'" title="'.$nombres[$i].'"  onClick="echo hola" width="100px" height="100px"></a>';				
		$i = $i+1;
	}	

?>