	function hidetext()
	{
		if (max == 2)
		{
		document.getElementById('bb0').style.display = 'none';
		}
		if (max == 1)
		{
		document.getElementById('bb0').style.display = 'none';
        document.getElementById('bb1').style.display = 'none';
		}
		if (max == 0)
		{
		document.getElementById('bb0').style.display = 'none';
        document.getElementById('bb1').style.display = 'none';
        document.getElementById('bb2').style.display = 'none';	
		}
	}
	
	function showall()
	{
		if (max == 2)
		{
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
		}
		else if (max == 1)
		{
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('bb1').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
			document.getElementById('tt1').style.display = 'block';
		}
		else if (max == 0)
		{
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('bb1').style.display = 'block';
			document.getElementById('bb2').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
			document.getElementById('tt1').style.display = 'block';
			document.getElementById('tt2').style.display = 'block';	
		}
	}
	
	function hideall()
	{
		if (max == 2)
		{
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
		}
		else if (max == 1)
		{
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
		}
		else if (max == 0)
		{
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
			document.getElementById('bb2').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
			document.getElementById('tt2').style.display = 'none';	
		}
	}
	
	function mostrar(id)
	{
		hideall();
		id.style.display = 'block';
	}

$(document).ready(function () {
    // Levantar el editor de texto en el area de trabajo //
    $("#add").click(function () {

        //        $("texto").css("display", "block");
        //        $("galeria").css("display", "none");
        //        $("formulario_contacto").css("display", "none");

        document.getElementById('texto').style.display = 'block';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';

        if (max > 0) {
            t = "t".concat(id);
            b = "b".concat(id);
            tt = "tt".concat(id);
            bb = "bb".concat(id);
            $("#texto").append("<textarea id=" + t + " style='width:320px;' >Titulo"+(id+1)+"</textarea><textarea id=" + b + " style='width:320px;' ></textarea><br>");
            //$("#preview_vista_botones").append("<a href=#" + bb + "><button id=" + tt + " >Titulo"+(id+1)+"</button></a><br>");
			$("#preview_vista_botones").append("<button id=" + tt + " onclick='mostrar("+bb+")' >Titulo"+(id+1)+"</button><br>");
            $("#preview_vista_texto").append("<div id=" + bb + "></div>");
            asd = new nicEditor({ fullPanel: true }).panelInstance(b);
            id++;
            max -= 1;
			hidetext();
        }
    });

    // Levantar la galeria de imagenes en el area de trabajo //
    $("#btn_galeria").click(function () {

        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "block");
        //        $("formulario_contacto").css("display", "none");
		
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	
    });

    // Levantar el formulario de contacto en el area de trabajo //
    $("#btn_contacto").click(function () {

        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'block';
	document.getElementById('formulario_rs').style.display = 'none';
        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "none");
        //        $("formulario_contacto").css("display", "block");
    });
    
    //Levantar el formulario de Redes Sociales en el area de trabajo //
     $("#btn_rs").click(function () {

        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'block';
        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "none");
        //        $("formulario_contacto").css("display", "block");
    });
	
    $("#home").click(function () {

		showall();
		hidetext();
    });	
	
    $("#crear").click(function () {
		var yourDOCTYPE = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>";
		var printPreview = window.open('about:blank', 'print_preview');
		var printDocument = printPreview.document;
		printDocument.open();
		printDocument.write(yourDOCTYPE+
           "<html>"+
               document.documentElement.innerHTML+
           "</html>");
		printDocument.close();
    });	
});