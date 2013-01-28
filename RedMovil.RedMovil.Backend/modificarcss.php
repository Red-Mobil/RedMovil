<?php
$linea = 3; //linea a modificar, linea + 1
$filas=file('estilomovil.css');
$i=0;
$numero_fila=0;

$fp = fopen("nuevacss.css","w");

while($filas[$i]!=NULL)
{
	$row = $filas[$i+1]; 
	if ($i ==$linea)
	{
		fwrite($fp,"Funciona".PHP_EOL);	
		echo'Funciona</br>';
	}
	else
	{
		fwrite($fp,$row);	
		echo $row.'</br>';
	}
//	$sql = explode(",",$row);
	$i++;
	$numero_fila++;	
//echo 'Id: '.$row[0].'<br/>';
}
fclose($fp);			
?>