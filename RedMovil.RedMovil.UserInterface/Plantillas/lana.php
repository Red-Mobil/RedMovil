<?php
	header("Content-type: text/css");
	$imagenfondo = "url(../imagenes/arab.png)";
	$colorfondo = "#000";
	$colorbotonesini = "#ffe8ff";
	$colorbotonesfin = "#d8c3e8";
	$colortitulo = "#906";
	$letrasbotones = "#333";
	$letrasparrafo = "#906";
	$fondoparrafo = "#f6edfa";
	$bordebotones = "#000";
?>


@charset "utf-8";
/* CSS Document */

body {margin:0px;
padding:opx;}

#expandible {
	min-height: 100%;
	padding-bottom:25%;
	width: 100%;
	background-color:<?php echo $colorfondo; ?>;
	background-image: <?php echo $imagenfondo; ?>;
	background-repeat: repeat;
	background-attachment: fixed;
	padding-bottom:30%;
}
.title{
width: 80%;
	margin-left: 11%;
	margin-top:3%;
	padding-left:3%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: 150%;
	font-weight: bolder;
	text-transform: uppercase;
	color: <?php echo $colortitulo; ?>;
	text-align: left;	
}

.tt{
	width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 120%;
	float: left;
	margin-left: 11%;
	margin-top: 10px;
	-webkit-border-radius: 0px;
	-moz-border-radius: 0px;
	border-radius: 0px;
	-webkit-box-shadow: 0px 2px 3px #666666;
	-moz-box-shadow: 0px 2px 3px #666666;
	box-shadow: 0px 2px 3px #666666;
	text-shadow: 1px 1px 0px #ffffff;
	border: solid #ffffff 0px;
	background: <?php echo $colorbotones; ?>;        
	color: <?php echo $letrasbotones; ?>;
	
}
.tt:hover{
	width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: bolder;
	text-transform: uppercase;
	font-size: 120%;
	float: left;
	margin-left: 11%;
	margin-top: 10px;
	background: #f6edfa;
	
}
#home {
	
	
}

#home:hover{

}
.bb{
	float: left;
	width: 72%;
	padding:4%;
	min-height: 40%;
	background-color: <?php echo $fondoparrafo; ?>;
	margin-left: 11%;
	border-radius: 7px;
	margin-top:2%;
	color:	<?php echo $letrasparrafo; ?>;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: 100%;
	
	

}

#bb0 {
	
}
#bb1 {
	
}
#bb2 {
	
}


#mapa {
	height: 100%;
	width: 100%;
	margin-top: 10px;
}


#tt0 {
	
}

#tt0:hover{
	
}

#tt1 {

}
#tt1:hover{
	

}
#tt2 {
	
}
#tt2:hover{
	
}
#botonimagen{
	
}
#botonimagen:hover{
	
}
.contacto {
	width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 120%;
	float: left;
	margin-left: 11%;
	margin-top: 10px;
	-webkit-border-radius: 0px;
	-moz-border-radius: 0px;
	border-radius: 0px;
	-webkit-box-shadow: 0px 2px 3px #666666;
	-moz-box-shadow: 0px 2px 3px #666666;
	box-shadow: 0px 2px 3px #666666;
	text-shadow: 1px 1px 0px #ffffff;
	border: solid #ffffff 0px;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffe8ff), to(#d8c3e8));
	background: -moz-linear-gradient(top, #ffe8ff, #d8c3e8);
	color: #333;
	
}
.contacto:hover {	width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: bolder;
	text-transform: uppercase;
	font-size: 120%;
	float: left;
	margin-left: 11%;
	margin-top: 10px;
	background: #f6edfa;
	
		 }
#llamar {
	
			 	   
}
#llamar:hover {
	
	
}
#escribir {
	
	
}
#escribir:hover {
	
	
}
#ubicar {
	
	
}
#ubicar:hover {
	
	
}
#faceb {
	
	
		
}
#faceb:hover {
	
	
	
}
#twitt {
	
	
}
#twitt:hover {
	
	
}
.imagerow{
margin-top: 2%;	
}
.single,single first,single last {
	width: 80%;
	margin-top: 2%;
	margin-left:10%;
}