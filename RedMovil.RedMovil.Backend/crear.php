<?php
// $cliente = // obtener cliente logeado
$q=$_GET["q"];
$pagina = explode("</titulo>",$q);
$aux = "";
$aux = str_replace("-skip","\n",$pagina[2]);
$aux = str_replace("../","../../",$aux);
$titulo = $pagina[0];
$css = $pagina[1];

$css = $pagina[0].'.css';

// ------------------------------- Pagina PopUp
$fp = fopen("../RedMovil.RedMovil.UserInterface/Html/paginas/".$titulo.".html","w");
fwrite($fp, "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>\n");
fwrite($fp, "<html>\n");
fwrite($fp, "<head>\n");
fwrite($fp, "	<meta http-equiv='last-modified' content='0'>\n");
fwrite($fp, "	<script language='javascript' src='../../ExtLibs/jquery-1.3.1.min.js'></script>\n");
fwrite($fp, "	<script src='../../Scripts/mostratimagen.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/jquery-1.7.2.min.js'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/lightboxcel.js'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/dragdivscroll.js'></script>\n");
fwrite($fp, "	<link href='../../Css/lightbox.css' rel='stylesheet' />\n");
fwrite($fp, "	<script src='../../ExtLibs/jquery-1.8.3.min.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/tinymce/jscripts/tiny_mce.js' type='text/javascript'></script>");
fwrite($fp, "	<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDJh5o52Jocg2sFYFF6RI3O_sv9axSmbVw&sensor=false'></script>\n");
fwrite($fp, "	<script type='text/javascript'>        var id = 0; </script>\n");
fwrite($fp, "	<script type='text/javascript'>        var max = 3;</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var imagen = new Array();</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var c_ima = 0; </script>\n");

fwrite($fp, "	<script src='../../Scripts/swfobject_modified.js' type='text/javascript'></script>\n");

fwrite($fp, "	<script src='../../Scripts/banner.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/mapa.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/mostrar.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/valfono.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/valmail.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/ver.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/rs.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/append.js' type='text/javascript'></script>\n");
fwrite($fp, "	<link href='../../Css/estilo3.css' rel='stylesheet' type='text/css' />\n");
//fwrite($fp, "	<link href='".$css."' rel='stylesheet' type='text/css'>\n");
fwrite($fp, "	<link href='../../PlantillasCustom/".$css."' rel='stylesheet' type='text/css'>\n");
fwrite($fp, "</head>\n");
fwrite($fp, "<body>\n");
fwrite($fp, "<center>\n");
fwrite($fp, "<div id=\"preview\">\n");
fwrite($fp, "<div id='vista'>\n");
fwrite($fp, "<script type='text/javascript'>new DragDivScroll( 'vista' );</script>\n");
fwrite($fp, $aux);
fwrite($fp, "</div>\n");
fwrite($fp, "</center>\n");
fwrite($fp, "</body>\n");
fwrite($fp, "</html>\n");
fclose($fp);
// ---------------------- Fin PopUp

// ---------------------- PaginaCel

$fp = fopen("../RedMovil.RedMovil.UserInterface/Html/paginas/m.".$titulo.".html","w");
fwrite($fp, "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>\n");
fwrite($fp, "<html>\n");
fwrite($fp, "<head>\n");
fwrite($fp, "	<meta http-equiv='last-modified' content='0'>\n");
fwrite($fp, "<meta name='viewport' content='width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no' />\n");
fwrite($fp, "	<script language='javascript' src='../../ExtLibs/jquery-1.3.1.min.js'></script>\n");
fwrite($fp, "	<script src='../../Scripts/banner.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/mostratimagen.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/jquery-1.7.2.min.js'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/lightboxcel.js'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/dragdivscroll.js'></script>\n");
fwrite($fp, "	<link href='../../Css/lightbox.css' rel='stylesheet' />\n");
fwrite($fp, "	<script src='../../ExtLibs/jquery-1.8.3.min.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../ExtLibs/tinymce/jscripts/tiny_mce.js' type='text/javascript'></script>");
fwrite($fp, "<meta name='viewport' content='user-scalable=0, width=device-width, height=device-height ,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0/>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/jquery-1.3.1.min.js'></script>\n");
fwrite($fp, "	<script src='../Scripts/mostratimagen.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.7.2.min.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/dragdivscroll.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.8.3.min.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/nicEdit.js' type='text/javascript'></script>\n");

fwrite($fp, "	<script src='../../Scripts/swfobject_modified.js' type='text/javascript'></script>\n");

fwrite($fp, "	<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDJh5o52Jocg2sFYFF6RI3O_sv9axSmbVw&sensor=false'></script>\n");
fwrite($fp, "	<script type='text/javascript'>        var id = 0; </script>\n");
fwrite($fp, "	<script type='text/javascript'>        var max = 3;</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var imagen = new Array();</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var c_ima = 0; </script>\n");
fwrite($fp, "	<script src='../../Scripts/mapa.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/mostrar.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/valfono.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/valmail.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/ver.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/rs.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../../Scripts/append.js' type='text/javascript'></script>\n");
fwrite($fp, "	<link href='../../PlantillasCustom/".$css."' rel='stylesheet' type='text/css'>\n");
fwrite($fp, "</head>\n");
fwrite($fp, "<body>\n");
fwrite($fp, "<center>\n");
fwrite($fp, $aux);
fwrite($fp, "</center>\n");
fwrite($fp, "</body>\n");
fwrite($fp, "</html>\n");
fclose($fp);
// ---------------------- Fin Cel

$response = "paginas/".$titulo.".html";
echo $response;

?>