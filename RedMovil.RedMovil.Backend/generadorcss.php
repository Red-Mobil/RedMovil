<?php
	$q=$_GET["q"];
	$pagina = explode("/",$q);
	
	header("Content-type: text/css");
	
	$imagenfondo = 'url("../images/'.$pagina[9].'")';	
	$colorfondo = $pagina[0];
	$colorbotones = $pagina[2];
	$colortitulo = $pagina[1];
	$letrasbotones = $pagina[3];
	$letrasparrafo = $pagina[5];
	$fondoparrafo = $pagina[4];
	$bordebotones = $pagina[6];
	$titulo = $pagina[7];
	$namecss = $pagina[8];
	
	// --- Codigo Lana --- //
	
	if($namecss == "lana.css"){
	
	$fp = fopen("../RedMovil.RedMovil.UserInterface/PlantillasCustom/".$titulo.".css","w");
	
	fwrite($fp, "@charset 'utf-8';".PHP_EOL);
	fwrite($fp, "body {margin:0px;".PHP_EOL."padding:opx;}".PHP_EOL);
	
	fwrite($fp, "#expandible {".PHP_EOL);
	fwrite($fp, "min-height: 100%;".PHP_EOL);
	fwrite($fp, "padding-bottom:25%;".PHP_EOL);
	fwrite($fp, "width: 100%;".PHP_EOL);
	fwrite($fp, "background-color:".$colorfondo.';'.PHP_EOL);
	fwrite($fp, "background-image:".$imagenfondo.";".PHP_EOL);
	fwrite($fp, "background-repeat: repeat;".PHP_EOL);
	fwrite($fp, "background-attachment: fixed;".PHP_EOL);
	fwrite($fp, "padding-bottom:30%;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".title{".PHP_EOL);
	fwrite($fp, "width: 80%;".PHP_EOL);
	fwrite($fp, "margin-left: 11%;".PHP_EOL);
	fwrite($fp, "margin-top:3%;".PHP_EOL);
	fwrite($fp, "padding-left:3%;".PHP_EOL);
	fwrite($fp, "font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;".PHP_EOL);
	fwrite($fp, "font-size: 150%;".PHP_EOL);
	fwrite($fp, "font-weight: bolder;".PHP_EOL);
	fwrite($fp, "text-transform: uppercase;".PHP_EOL);
	fwrite($fp, "color:".$colortitulo.";".PHP_EOL);
	fwrite($fp, "text-align: left;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".tt{".PHP_EOL);
	fwrite($fp, "width: 80%;".PHP_EOL);
	fwrite($fp, "height: 8%;".PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: normal;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 120%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 0px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 0px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 0px;'.PHP_EOL);
	fwrite($fp, '-webkit-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, '-moz-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'text-shadow: 1px 1px 0px #ffffff;'.PHP_EOL);
	fwrite($fp, 'border: solid #ffffff 0px;'.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'color: '.$letrasbotones.';'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.tt:hover{'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: bolder;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 120%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, 'background: #f6edfa;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.bb{'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'width: 72%;'.PHP_EOL);
	fwrite($fp, 'padding:4%;'.PHP_EOL);
	fwrite($fp, 'min-height: 40%;'.PHP_EOL);
	fwrite($fp, 'background-color: '.$fondoparrafo.';'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'border-radius: 7px;'.PHP_EOL);
	fwrite($fp, 'margin-top:2%;'.PHP_EOL);
	fwrite($fp, 'color:	'.$letrasparrafo.';'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-size: 100%;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#mapa {'.PHP_EOL);
	fwrite($fp, 'height: 100%;'.PHP_EOL);
	fwrite($fp, 'width: 100%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
		
	fwrite($fp, '#botonimagen{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#botonimagen:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: normal;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 120%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 0px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 0px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 0px;'.PHP_EOL);
	fwrite($fp, '-webkit-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, '-moz-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'text-shadow: 1px 1px 0px #ffffff;'.PHP_EOL);
	fwrite($fp, 'border: solid #ffffff 0px;'.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'color: #333;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto:hover {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: bolder;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 120%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, 'background: #f6edfa;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.imagerow{'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.single,single first,single last {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, 'margin-left:10%;'.PHP_EOL);
	fwrite($fp, '}');
	
	fclose($fp);
	}
	
	
	// --Codigo Diente-- //
	if($namecss == "diente.css"){
	$fp = fopen("../RedMovil.RedMovil.UserInterface/PlantillasCustom/".$titulo.".css","w");
	
	fwrite($fp, "@charset 'utf-8';".PHP_EOL);
	fwrite($fp, "body {margin:0px;".PHP_EOL."padding:opx;}".PHP_EOL);
	
	fwrite($fp, "#expandible {".PHP_EOL);
	fwrite($fp, "min-height: 100%;".PHP_EOL);
	fwrite($fp, "padding-bottom:25%;".PHP_EOL);
	fwrite($fp, "width: 100%;".PHP_EOL);
	fwrite($fp, "background-color:".$colorfondo.';'.PHP_EOL);
	fwrite($fp, "background-image:".$imagenfondo.";".PHP_EOL);
	fwrite($fp, "background-repeat: repeat;".PHP_EOL);
	fwrite($fp, "background-attachment: fixed;".PHP_EOL);
	fwrite($fp, "padding-bottom:30%;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".title{".PHP_EOL);
	fwrite($fp, "width: 80%;".PHP_EOL);
	fwrite($fp, "margin-left: 11%;".PHP_EOL);
	fwrite($fp, "margin-top:3%;".PHP_EOL);
	fwrite($fp, "padding-left:3%;".PHP_EOL);
	fwrite($fp, "font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;".PHP_EOL);
	fwrite($fp, "font-size: 150%;".PHP_EOL);
	fwrite($fp, "font-weight: bolder;".PHP_EOL);
	fwrite($fp, "text-transform: uppercase;".PHP_EOL);
	fwrite($fp, "color:".$colortitulo.";".PHP_EOL);
	fwrite($fp, "text-align: left;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".tt{".PHP_EOL);
	fwrite($fp, "width: 80%;".PHP_EOL);
	fwrite($fp, "height: 8%;".PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: normal;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 130%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 6%;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 60px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 60px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 60px;'.PHP_EOL);
	fwrite($fp, '-webkit-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, '-moz-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'text-shadow: 1px 1px 0px #ffffff;'.PHP_EOL);
	fwrite($fp, 'border: solid #ffffff 2px;'.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'color: '.$letrasbotones.';'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.tt:hover{'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: bolder;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 130%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 6%;'.PHP_EOL);
	fwrite($fp, '-webkit-gradient(linear, 0 0, 0 100%, from(#bdd1e3), to(#ffffff));'.PHP_EOL);
	fwrite($fp, '-moz-linear-gradient(top, #bdd1e3, #ffffff );'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.bb{'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'width: 68%;'.PHP_EOL);
	fwrite($fp, 'padding:4%;'.PHP_EOL);
	fwrite($fp, 'min-height: 40%;'.PHP_EOL);
	fwrite($fp, 'background-color: '.$fondoparrafo.';'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'border-radius: 25px;'.PHP_EOL);
	fwrite($fp, 'color:	'.$letrasparrafo.';'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 25px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 25px;'.PHP_EOL);
	fwrite($fp, '-border: solid #ffffff 4px;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#mapa {'.PHP_EOL);
	fwrite($fp, 'height: 100%;'.PHP_EOL);
	fwrite($fp, 'width: 100%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
		
	fwrite($fp, '#botonimagen{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#botonimagen:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: 130%;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 130%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 6%;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 60px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 60px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 60px;'.PHP_EOL);
	fwrite($fp, '-webkit-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, '-moz-box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'box-shadow: 0px 2px 3px #666666;'.PHP_EOL);
	fwrite($fp, 'text-shadow: 1px 1px 0px #ffffff;'.PHP_EOL);
	fwrite($fp, 'border: solid #ffffff 2px;'.PHP_EOL);
	fwrite($fp, 'background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffe8ff), to(#d8c3e8));'.PHP_EOL);
	fwrite($fp, 'background: -moz-linear-gradient(top, #ffe8ff, #d8c3e8);'.PHP_EOL);
	fwrite($fp, 'color: #333;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'color: '.$letrasbotones.';'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto:hover {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'height: 8%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-weight: bolder;'.PHP_EOL);
	fwrite($fp, 'text-transform: uppercase;'.PHP_EOL);
	fwrite($fp, 'font-size: 130%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'margin-left: 11%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 6%;'.PHP_EOL);
	fwrite($fp, 'background: -webkit-gradient(linear, 0 0, 0 100%, from(#bdd1e3), to(#ffffff));'.PHP_EOL);
	fwrite($fp, 'background: -moz-linear-gradient(top, #bdd1e3,#ffffff );'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.imagerow{'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.single,single first,single last {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, 'margin-left:10%;'.PHP_EOL);
	fwrite($fp, '}');
	
	fclose($fp);
	
	}
	
	//--Codigo Black--//
	
	if($namecss == "black.css"){
		
	$fp = fopen("../RedMovil.RedMovil.UserInterface/PlantillasCustom/".$titulo.".css","w");
	
	fwrite($fp, "@charset 'utf-8';".PHP_EOL);
	fwrite($fp, "body {margin:0px;".PHP_EOL."padding:opx;}".PHP_EOL);
	
	fwrite($fp, "#expandible {".PHP_EOL);
	fwrite($fp, "min-height: 100%;".PHP_EOL);
	fwrite($fp, "padding-bottom:25%;".PHP_EOL);
	fwrite($fp, "width: 100%;".PHP_EOL);
	fwrite($fp, "background-color:".$colorfondo.';'.PHP_EOL);
	fwrite($fp, "background-image:".$imagenfondo.";".PHP_EOL);
	fwrite($fp, "background-repeat: repeat;".PHP_EOL);
	fwrite($fp, "background-attachment: fixed;".PHP_EOL);
	fwrite($fp, "padding-bottom:30%;".PHP_EOL);
	fwrite($fp, "float: left;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".title{".PHP_EOL);
	fwrite($fp, "width: 80%;".PHP_EOL);
	fwrite($fp, "margin-left: 9%;".PHP_EOL);
	fwrite($fp, "margin-top:3%;".PHP_EOL);
	fwrite($fp, "padding-left:2%;".PHP_EOL);
	fwrite($fp, "font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;".PHP_EOL);
	fwrite($fp, "font-size: 150%;".PHP_EOL);
	fwrite($fp, "font-weight: bolder;".PHP_EOL);
	fwrite($fp, "text-transform: uppercase;".PHP_EOL);
	fwrite($fp, "color:".$colortitulo.";".PHP_EOL);
	fwrite($fp, "text-align: left;".PHP_EOL);
	fwrite($fp, "float: left;".PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, ".tt{".PHP_EOL);
	fwrite($fp, "font-weight: bolder;".PHP_EOL);
	fwrite($fp, "text-transform: uppercase;".PHP_EOL);
	fwrite($fp, 'margin-top: 4%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'width: 105px;'.PHP_EOL);
	fwrite($fp, 'height: 105px;'.PHP_EOL);
	fwrite($fp, 'margin-left: 9%;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 8px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 8px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 8px;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-size:100%;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 13px;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 13px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 7px;'.PHP_EOL);
	fwrite($fp, 'border: 4px solid;'.PHP_EOL);
	fwrite($fp, 'background-color: #79bbff;'.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#666", endColorstr="#333");'.PHP_EOL);
	fwrite($fp, 'border-top-color:	 #888;'.PHP_EOL);
	fwrite($fp, 'border-left-color:	 #CCC;'.PHP_EOL);
	fwrite($fp, 'border-bottom-color: #999;'.PHP_EOL);
	fwrite($fp, 'border-right-color:#777;'.PHP_EOL);
	fwrite($fp, 'color: '.$letrasbotones.';'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.tt:hover{'.PHP_EOL);
	fwrite($fp, 'background-color:#666;'.PHP_EOL);
	fwrite($fp, 'background:-webkit-gradient( linear, left top, left bottom, color-stop(46%, #666), color-stop(80%, #333) );'.PHP_EOL);
	fwrite($fp, 'background: -moz-linear-gradient( center top, #666 46%, #333 80% );'.PHP_EOL);
	fwrite($fp, 'background: -ms-linear-gradient( top, #666 46%, #333 80% );'.PHP_EOL);
	fwrite($fp, 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#666", endColorstr="#333");color:#0CF;'.PHP_EOL);
	fwrite($fp, 'text-shadow: 0px 0px 3px #1DA2DB;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#home:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.bb{'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'width: 72%;'.PHP_EOL);
	fwrite($fp, 'padding:4%;'.PHP_EOL);
	fwrite($fp, 'min-height: 40%;'.PHP_EOL);
	fwrite($fp, 'background-color: '.$fondoparrafo.';'.PHP_EOL);
	fwrite($fp, 'margin-left: 9%;'.PHP_EOL);
	fwrite($fp, 'border-radius: 7px;'.PHP_EOL);
	fwrite($fp, 'color:	'.$letrasparrafo.';'.PHP_EOL);
	fwrite($fp, 'margin-top:2%;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-size: 100%;'.PHP_EOL);
	fwrite($fp, 'filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=85);'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#bb2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#mapa {'.PHP_EOL);
	fwrite($fp, 'height: 100%;'.PHP_EOL);
	fwrite($fp, 'width: 100%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 10px;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt0:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt1:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2 {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#tt2:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
		
	fwrite($fp, '#botonimagen{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#botonimagen:hover{'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto {'.PHP_EOL);
	fwrite($fp, 'font-weight: bolder;'.PHP_EOL);
	fwrite($fp, 'margin-top: 4%;'.PHP_EOL);
	fwrite($fp, 'float: left;'.PHP_EOL);
	fwrite($fp, 'width: 105px;'.PHP_EOL);
	fwrite($fp, 'height: 105px;'.PHP_EOL);
	fwrite($fp, 'margin-left: 9%;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 8px;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 8px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 8px;'.PHP_EOL);
	fwrite($fp, 'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;'.PHP_EOL);
	fwrite($fp, 'font-size:100%;'.PHP_EOL);
	fwrite($fp, '-moz-border-radius: 13px;'.PHP_EOL);
	fwrite($fp, '-webkit-border-radius: 13px;'.PHP_EOL);
	fwrite($fp, 'border-radius: 7px;'.PHP_EOL);
	fwrite($fp, 'border: 4px solid;'.PHP_EOL);
	fwrite($fp, 'background-color: #79bbff;'.PHP_EOL);
	fwrite($fp, 'background: '.$colorbotones.';'.PHP_EOL);
	fwrite($fp, 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#666", endColorstr="#333");'.PHP_EOL);
	fwrite($fp, 'border-top-color:	 #888;'.PHP_EOL);
	fwrite($fp, 'border-left-color:	 #CCC;'.PHP_EOL);
	fwrite($fp, 'border-bottom-color: #999;'.PHP_EOL);
	fwrite($fp, 'border-right-color:#777;'.PHP_EOL);
	fwrite($fp, 'color: '.$letrasbotones.';'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.contacto:hover {'.PHP_EOL);
	fwrite($fp, 'background-color:#666;'.PHP_EOL);
	fwrite($fp, 'background:-webkit-gradient( linear, left top, left bottom, color-stop(46%, #666), color-stop(80%, #333) );'.PHP_EOL);
	fwrite($fp, 'background: -moz-linear-gradient( center top, #666 46%, #333 80% );'.PHP_EOL);
	fwrite($fp, 'background: -ms-linear-gradient( top, #666 46%, #333 80% );'.PHP_EOL);
	fwrite($fp, 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#666", endColorstr="#333");'.PHP_EOL);
	fwrite($fp, 'text-shadow: 0px 0px 3px #1DA2DB;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#llamar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#escribir:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#ubicar:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#faceb:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '#twitt:hover {'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.imagerow{'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, '}'.PHP_EOL.PHP_EOL);
	
	fwrite($fp, '.single,single first,single last {'.PHP_EOL);
	fwrite($fp, 'width: 80%;'.PHP_EOL);
	fwrite($fp, 'margin-top: 2%;'.PHP_EOL);
	fwrite($fp, 'margin-left:10%;'.PHP_EOL);
	fwrite($fp, '}');
	
	fclose($fp);
	}
	
?>