<?php
	header("Content-type: text/css");
	$imagenfondo = "url(../imagenes/furley_bg.png)";
	$colorfondo = "#000";
	$colorbotones;
	$colortitulo = "#999";
	$letrasbotones = "#000";
	$letrasparrafo = "#ffffff";
	$fondoparrafo = "#bdd1e3";
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
	background-attachment: fixed;padding-bottom:30%;
}
#home {
	
	
}
.title{
	width: 80%;
	margin-top:3%;
	margin-left: 11%;
	padding-left:3%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: 150%;
	font-weight: bolder;
	text-transform: uppercase;
	color: <?php echo $colortitulo; ?>;
	text-align: left;}

#home:hover{
	
}

.bb{
	float: left;
	width: 68%;
	padding:4%;
	min-height: 40%;
	margin-left: 11%;
	color:	<?php echo $letrasparrafo; ?>;
	border: solid #ffffff 4px;
	-webkit-border-radius: 25px;
	-moz-border-radius: 25px;
	border-radius: 25px;
	background-color: <?php echo $fondoparrafo; ?>;
	
	
	
	
	
	
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



.tt{
width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 130%;
	float: left;
	margin-left: 11%;
	margin-top: 6%;
	-webkit-border-radius: 60px;
	-moz-border-radius: 60px;
	border-radius: 60px;
	-webkit-box-shadow: 0px 2px 3px #666666;
	-moz-box-shadow: 0px 2px 3px #666666;
	box-shadow: 0px 2px 3px #666666;
	text-shadow: 1px 1px 0px #ffffff;
	border: solid #ffffff 2px;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#bdd1e3));
	background: -moz-linear-gradient(top, #ffffff, #bdd1e3);
	<?php echo $letrasbotones; ?>;
}
.tt:hover{
width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: bolder;
	text-transform: uppercase;
	font-size: 130%;
	float: left;
	margin-left: 11%;
	margin-top: 6%;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#bdd1e3), to(#ffffff));
	background: -moz-linear-gradient(top, #bdd1e3,#ffffff );
	
	
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
	font-weight: 130%;
	text-transform: uppercase;
	font-size: 130%;
	float: left;
	margin-left: 11%;
	margin-top: 6%;
	 -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  -webkit-box-shadow: 0px 2px 3px #666666;
  -moz-box-shadow: 0px 2px 3px #666666;
  box-shadow: 0px 2px 3px #666666;
  text-shadow: 1px 1px 0px #ffffff;
  border: solid #ffffff 2px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#bdd1e3));
  background: -moz-linear-gradient(top, #ffffff, #bdd1e3);
  color:#000;
}
.contacto:hover {	width: 80%;
	height: 8%;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: bolder;
	text-transform: uppercase;
	font-size: 130%;
	float: left;
	margin-left: 11%;
	margin-top: 6%;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#bdd1e3), to(#ffffff));
	background: -moz-linear-gradient(top, #bdd1e3,#ffffff );
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
