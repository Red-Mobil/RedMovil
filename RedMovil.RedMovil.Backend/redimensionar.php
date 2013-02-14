<html>
<title>Efeito LightBox</title>
<style type="text/css">
*{margin:0; padding:0;}
html,body{overflow:hidden; width:100%; height:100%;}
#corpo{width:100%; height:100%; overflow:auto;}

#fundo1 {
position:absolute; z-index:2;
display:none; background-color:#000000; 
opacity: .6;
filter: alpha(opacity=60);
}	

#fundo2 {width:300; height:300;
position:absolute; z-index:3;
visibility:hidden; background-color:#FFFFFF;
border-left:#555555 1px solid; border-top:#555555 1px solid;
border-right:#000000 1px solid; border-bottom:#000000 1px solid;
}
</style>

<script type="text/javascript">
function abrir_fundo(e) {
var fundo1 = document.getElementById("fundo1");
fundo1.style.top = "0px";
fundo1.style.left = "0px";
fundo1.style.width = document.body.clientWidth;
fundo1.style.height = document.body.clientHeight;
fundo1.style.display = "block";

var fundo3 = document.getElementById("fundo3");
fundo3.innerHTML = "<img src='200px-Gatts1.jpg' border='0px'>";

var fundo2 = document.getElementById("fundo2");
fundo2.style.top = (document.body.clientHeight/2)-(fundo2.offsetHeight/2);
fundo2.style.left = (document.body.clientWidth/2)-(fundo2.offsetWidth/2);
fundo2.style.visibility = "visible";
}

function fechar_fundo() {
var fundo1 = document.getElementById("fundo1");
fundo2.style.visibility = "hidden";
fundo1.style.display = "none";
}
</script>

</head>
<body>
<div id="fundo1"></div>
<div id="fundo2">

<table border="0" width="100%" height="100%">
<tr>
	<td align="right" style="font-family:tahoma,verdana,arial; font-size:11px;"><a href="java script: fechar_fundo()">Fechar</a></td>
</tr>
<tr>
	<td align="center" valign="middle"><div id="fundo3"></div></td>
</tr>
</table>
</div>


<div id="corpo">
<a href="java script: abrir_fundo('200px-Gatts1.jpg')">Clique para abrir: imagem1.jpg</a>
<br><a href="java script: abrir_fundo('imagem2.jpg')">Clique para abrir: imagem2.jpg</a>
<br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";
<br><br><br><br>Conteúdo de sua página dentro da div com id="corpo";

</div>
</body>
</html>