<html>
<head>
<script type="text/javascript">
 function submitVal(val,i){
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
	$url = $url[strlen($url)-1];
	
	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		if ($i % 5 == 0)
		{
			echo '</tr><tr>';
		}
		echo '<td><img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'" '."onclick='submitVal(".'"'.$nombres[$i].'"'.",".'"'.$url.'"'.")'".' width="100px" height="100px"></br></td>';								
		$i = $i+1;		
	}	

?>
</tr>
</table>
</body>

</html>






