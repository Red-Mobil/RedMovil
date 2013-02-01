var nombrecss;

function cambiarArchivoCss(archivo) {
    var algo = archivo.split("/");
    nombrecss = algo[2];
	if (algo[2] == "estilomovil.css")
	{
		$("#c0").val("bg-checker.png");
		$("#c1").val("000");
		$("#c2").val("09F");
		$("#c3").val("79BBFF");
		$("#c4").val("FFFFFF");
		$("#c5").val("79BBFF");
		$("#c6").val("036");
		$("#c7").val("84BBF3");
	}
	if (algo[2] == "lana.css")
	{
		$("#c0").val("arab.png");
		$("#c1").val("FFFFFF");
		$("#c2").val("906");
		$("#c3").val("FFE8FF");
		$("#c4").val("333");
		$("#c5").val("F6EDFA");
		$("#c6").val("906");
		$("#c7").val("FFFFFF");
	}
	else if (algo[2] == "diente.css")
	{
		$("#c0").val("furley_bg.png");
		$("#c1").val("FFFFFF");
		$("#c2").val("999");
		$("#c3").val("FFEFFF");
		$("#c4").val("000");
		$("#c5").val("BDD1E3");
		$("#c6").val("FFFFFF");
		$("#c7").val("FFFFFF");
	}
	else if (algo[2] == "black.css")
	{
		$("#c0").val("iphone.png");
		$("#c1").val("000");
		$("#c2").val("FFF");
		$("#c3").val("666");
		$("#c4").val("FFF");
		$("#c5").val("555");
		$("#c6").val("fff");
		$("#c7").val("777");
	}
	cssChange("c0");
	cssChange("c2");
	cssChange("c3");
	cssChange("c4");
	cssChange("c5");
	cssChange("c6");
	cssChange("c7");
    mostrarbotones();  
    document.getElementById('cssArchivo').href=archivo;
    
}