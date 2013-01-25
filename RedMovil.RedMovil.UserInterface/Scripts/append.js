
	
	function hacer()
	{
		var mandar;
		mandar = "<center>-skip";
		mandar += "<div id='vista'>-skip";
		mandar += "<script type='text/javascript'>new DragDivScroll( 'vista' );</script>-skip";
		mandar += "<script type='text/javascript'> max = "+max+"</script>-skip";
		mandar += "<div id='expandible'>-skip";
		mandar += "<div id='preview_vista_portada'>-skip";
		if (document.getElementById('gal').value != "")
		{
			mandar += '<img src="../images/' + document.getElementById('gal').value + '"width="200" id="portada" /></br>-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_botones'>-skip";
		mandar += "<button id='home' style='display: none'>Home</button><br>-skip";
		if (max == 2)
		{
			mandar += "<button id='tt0' onclick='mostrar(bb0)' >Titulo1</button>-skip";
		}
		else if (max == 1)
		{
			mandar += "<button id='tt0' onclick='mostrar(bb0)' >Titulo1</button>-skip";
			mandar += "<button id='tt1' onclick='mostrar(bb1)' >Titulo2</button>-skip";
		}
		else if (max == 0)
		{
			mandar += "<button id='tt0' onclick='mostrar(bb0)' >Titulo1</button>-skip";
			mandar += "<button id='tt1' onclick='mostrar(bb1)' >Titulo2</button>-skip";
			mandar += "<button id='tt2' onclick='mostrar(bb2)' >Titulo3</button>-skip";
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_texto'>-skip";
		if (max == 2)
		{
			mandar += "<div id='bb0' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
		}
		else if (max == 1)
		{
			mandar += "<div id='bb0' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb1' style='display: none;'>\n"+document.getElementById("bb1").innerHTML+"\n"+"</div>-skip";
		}
		else if (max == 0)
		{
			mandar += "<div id='bb0' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb1' style='display: none;'>\n"+document.getElementById("bb1").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb2' style='display: none;'>\n"+document.getElementById("bb2").innerHTML+"\n"+"</div>-skip";
		}
		mandar += "</div>-skip";
		mandar += "<div id='gale'>-skip";
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_galeria'>-skip";
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_contacto'>-skip";
		mandar += "<div id='llamanos'>-skip";
		if (document.getElementById('tel').value != "")
		{
			mandar += '<center></br><center><input type="button" value="" id="llamar" class="contacto" onclick="parent.location=\'tel:+56'+ document.getElementById('tel').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='escribenos'>-skip";
		if (document.getElementById('mail').value != "")
		{
			if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value))
			{	
				mandar += '<center><input type="button" id="escribir" class="contacto" value="" onclick="parent.location=\'mailto:'+ document.getElementById('mail').value+ '\'">-skip';
			}
		}
		mandar += "</div>-skip";
		mandar += "<div id='ubicanos'>-skip";
		if (document.getElementById('address').value != "")
		{   
			mandar += '<center></br><center><input type="button" id="ubicar" class="contacto" value="" onclick="mostrarMapa()"></center>-skip';
		}
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "<div id='mapa' style='display:none'>-skip";
		
		//debo ver como meter el mapa aca, lo dejo asi mientras.
		
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_rs'>-skip";
		mandar += "<div id='facebook'>-skip";
		if (document.getElementById('face').value != "")
		{
                        mandar += '<center><input type="button" id="faceb" class="contacto"value="" onclick="parent.location=\'http://www.facebook.com/'+ document.getElementById('face').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='twitter'>-skip";
		if (document.getElementById('twit').value != "")
		{
                      mandar +=  '<center></br><center><input id="twitt" class="contacto" value="" type="button"  onclick="parent.location=\'http://www.twitter.com/'+ document.getElementById('twit').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "</center>-skip";
		return mandar;
	}
	
	
	
	
	function crear(str)
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				window.open(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/crear.php?q="+str,true);
		xmlhttp.send();
	}




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
			document.getElementById('preview_vista_portada').style.display = 'block';
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'block';
			document.getElementById('preview_vista_rs').style.display = 'block';
			document.getElementById('gale').style.display = 'block';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (max == 1)
		{
			document.getElementById('preview_vista_portada').style.display = 'block';
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('bb1').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
			document.getElementById('tt1').style.display = 'block';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'block';
			document.getElementById('preview_vista_rs').style.display = 'block';
			document.getElementById('gale').style.display = 'block';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (max == 0)
		{
			document.getElementById('preview_vista_portada').style.display = 'block';
			document.getElementById('home').style.display = 'none';
			document.getElementById('bb0').style.display = 'block';
			document.getElementById('bb1').style.display = 'block';
			document.getElementById('bb2').style.display = 'block';
			document.getElementById('tt0').style.display = 'block';
			document.getElementById('tt1').style.display = 'block';
			document.getElementById('tt2').style.display = 'block';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'block';
			document.getElementById('preview_vista_rs').style.display = 'block';
			document.getElementById('gale').style.display = 'block';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (vamap()==2)
		{
			document.getElementById('preview_vista_portada').style.display = 'block';
			document.getElementById('home').style.display = 'none';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'block';
			document.getElementById('preview_vista_rs').style.display = 'block';
			document.getElementById('gale').style.display = 'block';			
			document.getElementById('mapa').style.display = 'none'; 
		}
		
		
	}
	
	function hideall()
	{
		if (max == 2)
		{
			document.getElementById('preview_vista_portada').style.display = 'none';
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'none';
			document.getElementById('preview_vista_rs').style.display = 'none';
			document.getElementById('gale').style.display = 'none';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (max == 1)
		{
			document.getElementById('preview_vista_portada').style.display = 'none';
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'none';
			document.getElementById('preview_vista_rs').style.display = 'none';
			document.getElementById('gale').style.display = 'none';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (max == 0)
		{
			document.getElementById('preview_vista_portada').style.display = 'none';
			document.getElementById('home').style.display = 'block';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
			document.getElementById('bb2').style.display = 'none';
			document.getElementById('tt0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
			document.getElementById('tt2').style.display = 'none';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'none';
			document.getElementById('preview_vista_rs').style.display = 'none';
			document.getElementById('gale').style.display = 'none';
			document.getElementById('mapa').style.display = 'none';
		}
		else if (vamap()==2)
		{
			document.getElementById('preview_vista_portada').style.display = 'none';
			document.getElementById('home').style.display = 'block';
			document.getElementById('preview_vista_galeria').style.display = 'none';
			document.getElementById('preview_vista_contacto').style.display = 'none';
			document.getElementById('preview_vista_rs').style.display = 'none';
			document.getElementById('gale').style.display = 'none';
			document.getElementById('mapa').style.display = 'none'; 			
		}
		
	}
	
	function mostrar(id)
	{
		hideall();
		id.style.display = 'block';
	}

$(document).ready(function () {
	
    $("#mp").click(function() {
	document.getElementById('mipagina').style.display = 'block';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
    });
    // Levantar el editor de texto en el area de trabajo //
    $("#add").click(function () {

        //        $("texto").css("display", "block");
        //        $("galeria").css("display", "none");
        //        $("formulario_contacto").css("display", "none");
	document.getElementById('mipagina').style.display = 'none';
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
			$("#preview_vista_botones").append("<button id=" + tt + " onclick='mostrar ("+bb+")' >Titulo"+(id+1)+"</button><br>");
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
	document.getElementById('mipagina').style.display = 'none';	
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	
    });

    // Levantar el formulario de contacto en el area de trabajo //
    $("#btn_contacto").click(function () {
	document.getElementById('mipagina').style.display = 'none';
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
	document.getElementById('mipagina').style.display = 'none';
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
		var send = hacer();
		crear(send);
    });
    
});