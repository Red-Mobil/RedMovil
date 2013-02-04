var nombrecss;

function cambiarArchivoCss(archivo) {
    var algo = archivo.split("/");
    nombrecss = algo[2];
	if (algo[2] == "estilomovil.css")
	{
		$("#c0").val("bg-checker.png");
		$("#c1").val("000000");
		$("#c2").val("0099FF");
		$("#c3").val("79BBFF");
		$("#c4").val("FFFFFF");
		$("#c5").val("79BBFF");
		$("#c6").val("003366");
		$("#c7").val("84BBF3");
	}
	if (algo[2] == "lana.css")
	{
		$("#c0").val("arab.png");
		$("#c1").val("FFFFFF");
		$("#c2").val("990066");
		$("#c3").val("FFE8FF");
		$("#c4").val("333333");
		$("#c5").val("F6EDFA");
		$("#c6").val("990066");
		$("#c7").val("FFFFFF");
	}
	else if (algo[2] == "diente.css")
	{
		$("#c0").val("furley_bg.png");
		$("#c1").val("FFFFFF");
		$("#c2").val("999999");
		$("#c3").val("FFEFFF");
		$("#c4").val("000000");
		$("#c5").val("BDD1E3");
		$("#c6").val("FFFFFF");
		$("#c7").val("FFFFFF");
	}
	else if (algo[2] == "black.css")
	{
		$("#c0").val("iphone.png");
		$("#c1").val("000000");
		$("#c2").val("FFFFFF");
		$("#c3").val("666666");
		$("#c4").val("FFFFFF");
		$("#c5").val("555555");
		$("#c6").val("FFFFFF");
		$("#c7").val("777777");
	}
	else if (algo[2] == "glossy.css")
	{
		$("#c0").val("glossss.png");
		$("#c1").val("000000");
		$("#c2").val("FFFFFF");
		$("#c3").val("006699");
		$("#c4").val("FFFFFF");
		$("#c5").val("006699");
		$("#c6").val("FFFFFF");
		$("#c7").val("006699");
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