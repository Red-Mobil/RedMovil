<?php
session_start();
?>

<html>
<head>
<script src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Scripts/swfobject_modified.js" type="text/javascript"></script>   
<script type="text/javascript">
 function submitVal(val,i)
{
     var myObj=window.dialogArguments;
      myObj.setTheVal(val,i); //calls the js method in the main page.
      window.close();
 }
</script>
</head>
<body>

<table border="1">
<tr>
<?php

	$url="http://".$_SERVER['HTTP_HOST'].":".$_SERVER['SERVER_PORT'].$_SERVER['REQUEST_URI'];	
	$pagina = explode("?",$url);
	$url = $pagina[1];
	
	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/Html/paginas/".$_SESSION['email']."/images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		if ($i % 5 == 0)
		{
			echo '</tr><tr>';
		}
		$trozos = explode(".", $nombres[$i]); 
		$extension = end($trozos); 
		if ($extension != 'swf')
		{
			echo '<td><img src="../RedMovil.RedMovil.UserInterface/Html/paginas/'.$_SESSION['email'].'/images/'.$nombres[$i].'" '."onclick='submitVal(".'"/'.$_SESSION['email'].'/images/'.$nombres[$i].'"'.",".'"'.$url.'"'.")'".' width="100px" height="100px"></br></td>';								
		}
		else
		{
			echo '<td><object type="application/x-shockwave-flash" data="../RedMovil.RedMovil.UserInterface/Html/paginas/'.$_SESSION['email'].'/images/'.$nombres[$i].'" width="100px" height="100px">';
			echo '<param name="movie" value="../RedMovil.RedMovil.UserInterface/Html/paginas/'.$_SESSION['email'].'/images/'.$nombres[$i].'" />';
			echo '<param name="quality" value="high" />';
			echo '<param name="wmode" value="opaque" />';
			echo '<param name="swfversion" value="9.0.45.0" />';
			echo '<img src="../RedMovil.RedMovil.UserInterface/Html/paginas/'.$_SESSION['email'].'/images/'.$nombres[$i].'" width="100px" height="100px"></br></object></br>';											
			echo '<input type="button" value="Elegir" '."onclick='submitVal(".'"/'.$_SESSION['email'].'/images/'.$nombres[$i].'"'.",".'"'.$url.'"'.")'".'  style="width: 100px;" /></td>';							
		}
		$i = $i+1;		
	}	

?>
</tr>
</table>
</body>

</html>






