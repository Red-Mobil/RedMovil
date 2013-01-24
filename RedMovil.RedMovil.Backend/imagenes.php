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

<?php

	$url="http://".$_SERVER['HTTP_HOST'].":".$_SERVER['SERVER_PORT'].$_SERVER['REQUEST_URI'];	
	if ($url[strlen($url)-1] == "a")
	{
		$url ="a";
	}
	else if ($url[strlen($url)-1] == "b")
	{
		$url ="b";
	}	
	else if ($url[strlen($url)-1] == "c")
	{
		$url ="c";
	}		
	else if ($url[strlen($url)-1] == "g")
	{
		$url ="g";
	}		

	$imagenes =  glob("../RedMovil.RedMovil.UserInterface/images/*",GLOB_BRACE);

	foreach ($imagenes as $ima)
    $nombres[]=array_pop(split("/",$ima));
	$i = 0;
	while ($i < sizeof($nombres))
	{
		echo '<img src="../RedMovil.RedMovil.UserInterface/images/'.$nombres[$i].'" '."onclick='submitVal(".'"'.$nombres[$i].'"'.",".'"'.$url.'"'.")'".' width="100px" height="100px"></br>';								
		$i = $i+1;		
	}	

?>

</body>

</html>






