<script>
function select_item(item)
{
	targetitem.value = item;
	top.close();
	return false;
}
</script>

<?php
	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		echo '<a href="" onClick="return('.$nombres[$i].')"><img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'" title="'.$nombres[$i].'" width="100px" height="100px"></a>';				
		$i = $i+1;
	}	
?>
<?php
	if (isset($_GET['agregar']))
	{		
		$directorio = '../RedMovil.RedMovil.UserInterface/images/';		
		$tmpName  = $_FILES['img']['tmp_name'];
		echo $tmpName;
		$name = $_FILES['img']['name'];		
		$name = $directorio.$name;				
		file_put_contents($name,file_get_contents($tmpName));						
		header('Location: http://localhost/RedMovil.RedMovil.Backend/imagenes.php');
	}
?>
</br></br>
<form enctype="multipart/form-data" id="crear" action="imagenes.php?agregar" method="post" style="margin:0px;">
<input type=file accept="image/*" name="img" style="WIDTH: 320px;">            
<input type="submit" value="Subir Imagen" style='width:320px;' /></br>
</form>