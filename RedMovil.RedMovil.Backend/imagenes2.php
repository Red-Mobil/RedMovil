<?php
	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/images/*",GLOB_BRACE);
	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
	//	echo '<img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'">';						
		$i = $i+1;				
	}


	if ($_GET["id"] != "")
	{
		$id = $_GET["id"];
	}
	else if ($_GET["iz"] != "")
	{
		$id = $_GET["iz"];
	}
	else
	{
		$id = $_GET["de"];
	}
		$iz= $id - 1;
		if ($iz < 1)
		{
			$iz = 0;
		}
		$de = $id +1;
		if ($de == sizeof($nombres))
		{
			$de = $id;
		}
?>

<table>
<tr>
<td>
<form action="imagenes2.php" method="GET">
<?php echo '<input type="text" name="iz" style="visibility:hidden" value="'.$iz.'">' ?>
<input type="submit" value="Submit">
</form>
</td>
<td>
<center>
<?php	
	if ($_GET["id"] != "")
	{
		$i = $_GET["id"];
	}
	else if ($_GET["iz"] != "")
	{
		$i = $_GET["iz"];
	}
	else if ($_GET["de"] != "")
	{
		$i = $_GET["de"];
	}	
	else
	{
		$i = 0;
	}
	if ($i == "")
	{
		$id = 0;
	}
	echo '<img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'">';								
?>		
</center>
</td>
<td>
<form action="imagenes2.php" method="GET">
<input type="submit" value="Submit">
<?php echo '<input type="text" name="de"  style="visibility:hidden" value="'.$de.'">' ?>
</form>
</td>
</tr>
</table>