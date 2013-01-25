<?php
// $cliente = // obtener cliente logeado
$q=$_GET["q"];
$aux = "";
$aux = str_replace("-skip","\n",$q);
// ------------------------------- Pagina PopUp

$fp = fopen("../RedMovil.RedMovil.UserInterface/Html/pagina.html","w");
fwrite($fp, "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>\n");
fwrite($fp, "<html>\n");
fwrite($fp, "<head>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/jquery-1.3.1.min.js'></script>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/AjaxUpload.2.0.min.js'></script>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/imagen.js'></script>\n");
fwrite($fp, "	<script src='../Scripts/mostratimagen.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.7.2.min.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/lightbox.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/dragdivscroll.js'></script>\n");
fwrite($fp, "	<link href='../Css/lightbox.css' rel='stylesheet' />\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.8.3.min.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/nicEdit.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDJh5o52Jocg2sFYFF6RI3O_sv9axSmbVw&sensor=false'></script>\n");
fwrite($fp, "	<script type='text/javascript'>        var id = 0; </script>\n");
fwrite($fp, "	<script type='text/javascript'>        var max = 3;</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var imagen = new Array();</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var c_ima = 0; </script>\n");
fwrite($fp, "	<script src='../Scripts/fotos.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/mapa.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/mostrar.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/valfono.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/valmail.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/ver.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/rs.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/append.js' type='text/javascript'></script>\n");
fwrite($fp, "	<link href='../Css/estilo3.css' rel='stylesheet' type='text/css' />\n");
fwrite($fp, "	<link href='../Css/estilomovil.css' rel='stylesheet' type='text/css'>\n");
fwrite($fp, "</head>\n");
fwrite($fp, "<body>\n");
fwrite($fp, "<div id=\"preview\">\n");
fwrite($fp, $aux);
fwrite($fp, "</div>\n");
fwrite($fp, "</body>\n");
fwrite($fp, "</html>\n");
fclose("pagina.html\n");
// ---------------------- Fin PopUp

// ---------------------- PaginaCel

$fp = fopen("../RedMovil.RedMovil.UserInterface/Html/cel.html","w");
fwrite($fp, "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>\n");
fwrite($fp, "<html>\n");
fwrite($fp, "<head>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/jquery-1.3.1.min.js'></script>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/AjaxUpload.2.0.min.js'></script>\n");
fwrite($fp, "	<script language='javascript' src='../ExtLibs/imagen.js'></script>\n");
fwrite($fp, "	<script src='../Scripts/mostratimagen.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.7.2.min.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/lightbox.js'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/dragdivscroll.js'></script>\n");
fwrite($fp, "	<link href='../Css/lightbox.css' rel='stylesheet' />\n");
fwrite($fp, "	<script src='../ExtLibs/jquery-1.8.3.min.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../ExtLibs/nicEdit.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDJh5o52Jocg2sFYFF6RI3O_sv9axSmbVw&sensor=false'></script>\n");
fwrite($fp, "	<script type='text/javascript'>        var id = 0; </script>\n");
fwrite($fp, "	<script type='text/javascript'>        var max = 3;</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var imagen = new Array();</script>\n");
fwrite($fp, "	<script type='text/javascript'>        var c_ima = 0; </script>\n");
fwrite($fp, "	<script src='../Scripts/fotos.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/mapa.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/mostrar.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/valfono.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/valmail.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/ver.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/rs.js' type='text/javascript'></script>\n");
fwrite($fp, "	<script src='../Scripts/append.js' type='text/javascript'></script>\n");
fwrite($fp, "	<link href='../Css/estilomovil.css' rel='stylesheet' type='text/css'>\n");
fwrite($fp, "</head>\n");
fwrite($fp, "<body>\n");
fwrite($fp, $aux);
fwrite($fp, "</body>\n");
fwrite($fp, "</html>\n");
fclose("cel.html\n");
// ---------------------- Fin PopUp

$response = "cel.html";
echo $response;

?>