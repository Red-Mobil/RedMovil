<?php
$filas=file('estilomovil.css');
$i=0;
$numero_fila=0;

$fp = fopen("nuevacss.css","w");

while($filas[$i]!=NULL)
{
	$row = $filas[$i+1]; 
	fwrite($fp,$row);
	echo $row.'</br>';
//	$sql = explode(",",$row);
	$i++;
	$numero_fila++;	
//echo 'Id: '.$row[0].'<br/>';
}
fclose($fp);			
?>