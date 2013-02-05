function mostrarbotones()
{
    document.getElementById('btns_css').style.display = 'block';
}

function cssChange(id)
{
	if (id == "c0")
	{
		var aux = "url(../images/"+$("#c0").val()+")";
		$("#expandible").css("background-image",aux);
		$("#c1").val("");
	}
	if (id == "c1")
	{
		var aux = "#"+$("#c1").val();
		$("#expandible").css("background-image","url()");
		$("#c0").val("");
		$("#expandible").css("background-color",aux);
	}
	else if (id == "c2")
	{
		var aux = "#"+$("#c2").val();
		$(".title").css("color",aux);
	}
	else if (id == "c3")
	{
		var aux = "#"+$("#c3").val();
		$(".tt").css("background",aux);
		$(".contacto").css("background",aux);
		if(nombrecss == "black.css" || nombrecss == "glossy.css")
		{
			$(".tt").css("background-image","url(../imagenes/glosy.png)");
			
		}
	}
	else if (id == "c4")
	{
		var aux = "#"+$("#c4").val();
		$(".tt").css("color",aux);
		
	}
	else if (id == "c5")
	{
		var aux = "#"+$("#c5").val();
		$(".bb").css("background-color",aux);
	}
	else if (id == "c6")
	{
		var aux = "#"+$("#c6").val();
		$(".bb").css("color",aux);
	}
	else if (id == "c7")
	{
		var aux = "#"+$("#c7").val();
		$(".tt").css("border-color",aux);
		
	}
}
