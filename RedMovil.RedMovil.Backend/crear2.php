<?php

$q=$_GET["q"];
$pagina = explode("</titulo>",$q);
$q = str_replace("-skip",PHP_EOL,$pagina[1]);
$q = str_replace("../","../../",$q);

$fp = fopen("../RedMovil.RedMovil.UserInterface/Html/paginas/".$pagina[0].".txt","w");
fwrite($fp, $q);
fclose($fp);

?>