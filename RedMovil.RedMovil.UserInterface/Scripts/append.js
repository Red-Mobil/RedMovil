	function verpagina()
	{
		var titulo;
		titulo = document.getElementById('nombrepagina').value;
		return titulo;
	}
	
	function hacer()
	{
		var mandar;
		
		var objeto= "</objeto>";
		var respaldo = "</objeto>";
		objeto += document.getElementById('nombrepagina').value+"</titulo>";
		
		mandar = document.getElementById('nombrepagina').value+"</titulo>";
		mandar += document.getElementById('cssArchivo').href+"</titulo>";
		mandar += "<script type='text/javascript'> max = "+max+"</script>-skip";
		mandar += "<div id='expandible'>-skip";
		mandar += '<a href="http://www.eddiseno.com/post/red/RedMovil.RedMovil.UserInterface/Html/edu.html" id="banner"><img src="../imagenes/fullBanner.png" width="100%"/></a>'
		mandar += "<div id='preview_vista_portada'>-skip";
		if (document.getElementById('gal').value != "")
		{
			objeto += "p";
			respaldo += '../images/'+document.getElementById('gal').value +'-skip';
			mandar += '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" /></br>-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_botones'>-skip";
		mandar += "<button id='home' class = 'tt' style='display: none'>Home</button><br>-skip";
		if (max == 2)
		{
			objeto += "t";			
			mandar += "<button id='tt0' class= 'tt' onclick='mostrar(bb0)' >"+document.getElementById("tt0").innerHTML+"</button>-skip";
		}
		else if (max == 1)
		{
			objeto += "tt";			
			mandar += "<button id='tt0' class= 'tt' onclick='mostrar(bb0)' >"+document.getElementById("tt0").innerHTML+"</button>-skip";
			mandar += "<button id='tt1' class= 'tt' onclick='mostrar(bb1)' >"+document.getElementById("tt1").innerHTML+"</button>-skip";
		}
		else if (max == 0)
		{
			objeto += "ttt";			
			mandar += "<button id='tt0' class= 'tt' onclick='mostrar(bb0)' >"+document.getElementById("tt0").innerHTML+"</button>-skip";
			mandar += "<button id='tt1' class= 'tt' onclick='mostrar(bb1)' >"+document.getElementById("tt1").innerHTML+"</button>-skip";
			mandar += "<button id='tt2' class= 'tt' onclick='mostrar(bb2)' >"+document.getElementById("tt2").innerHTML+"</button>-skip";
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_texto'>-skip";
		if (max == 2)
		{
			respaldo += document.getElementById("title0").innerHTML+"-skip";
			respaldo += document.getElementById("bb0").innerHTML+"-skip";
			mandar += "<div id='title0' class = 'title' style='display: none;'>\n"+document.getElementById("title0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb0' class = 'bb' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
		}
		else if (max == 1)
		{
			respaldo += document.getElementById("title0").innerHTML+"-skip";
			respaldo += document.getElementById("bb0").innerHTML+"-skip";
			respaldo += document.getElementById("title1").innerHTML+"-skip";
			respaldo += document.getElementById("bb1").innerHTML+"-skip";
			mandar += "<div id='title0' class = 'title' style='display: none;'>\n"+document.getElementById("title0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='title1' class = 'title' style='display: none;'>\n"+document.getElementById("title1").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb0' class = 'bb' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb1' class = 'bb' style='display: none;'>\n"+document.getElementById("bb1").innerHTML+"\n"+"</div>-skip";
		}
		else if (max == 0)
		{
			respaldo += document.getElementById("title0").innerHTML+"-skip";
			respaldo += document.getElementById("bb0").innerHTML+"-skip";
			respaldo += document.getElementById("title1").innerHTML+"-skip";
			respaldo += document.getElementById("bb1").innerHTML+"-skip";
			respaldo += document.getElementById("title2").innerHTML+"-skip";
			respaldo += document.getElementById("bb2").innerHTML+"-skip";
			mandar += "<div id='title0' class = 'title' style='display: none;'>\n"+document.getElementById("title0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='title1' class = 'title' style='display: none;'>\n"+document.getElementById("title1").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='title2' class = 'title' style='display: none;'>\n"+document.getElementById("title2").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb0' class = 'bb' style='display: none;'>\n"+document.getElementById("bb0").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb1' class = 'bb' style='display: none;'>\n"+document.getElementById("bb1").innerHTML+"\n"+"</div>-skip";
			mandar += "<div id='bb2' class = 'bb' style='display: none;'>\n"+document.getElementById("bb2").innerHTML+"\n"+"</div>-skip";
		}
		mandar += "</div>-skip";
		mandar += "<div id='gale'>-skip";
				
		if (document.getElementById('f1').value == '' && document.getElementById('f2').value == '' && document.getElementById('f3').value == '')
		{			
		}
		else
		{
		mandar += '<center></br><center><input type="button" value="Galeria" class = "tt" onclick="mostrarimagenes()" id="botonimagen" \></br></br>-skip';		
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_galeria'>-skip";
		if (document.getElementById('f1').value == '' && document.getElementById('f2').value == '' && document.getElementById('f3').value == '')
		{
		}
		else
		{
		mandar += '<div class="imageRow"><div class="set">-skip';
		if (document.getElementById('f1').value != '')
		{
			objeto += "i";			
			respaldo += '../images/'+document.getElementById('f1').value +'-skip';
			mandar += '<div class="single first" id=i1 style="display: none"><a href="../images/' + document.getElementById('f1').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f11').value +'"><img src="../images/' + document.getElementById('f1').value + '"width="100%"/></a></div>-skip';
			if (document.getElementById('f2').value != '')
			{	
				objeto += "i";			
				respaldo += '../images/'+document.getElementById('f2').value +'-skip';
				mandar += '<div class="single first" id=i2 style="display: none"><a href="../images/' + document.getElementById('f2').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f22').value +'"><img src="../images/' + document.getElementById('f2').value + '"width="100%" /></a></div>-skip';
			}
			if (document.getElementById('f3').value != '')
			{
				objeto += "i";			
				respaldo += '../images/'+document.getElementById('f3').value +'-skip';
				mandar += '<div class="single first" id=i3 style="display: none"><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f33').value +'"><img src="../images/' + document.getElementById('f3').value + '"width="100%" /></a></div>-skip';
			}
		}	
		else if (document.getElementById('f2').value != '')
		{
			objeto += "i";			
			respaldo += '../images/'+document.getElementById('f2').value +'-skip';
			mandar += '<div class="single first" id=i1 style="display: none"><a href="../images/' + document.getElementById('f2').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f22').value +'"><img src="../images/' + document.getElementById('f2').value + '"width="100%" /></a></div>-skip';
			if (document.getElementById('f3').value != '')
			{
				objeto += "i";			
				respaldo += '../images/'+document.getElementById('f3').value +'-skip';
				mandar += '<div class="single first" id=i2 style="display: none"><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f33').value +'"><img src="../images/' + document.getElementById('f3').value + '"width="100%" /></a></div>-skip';
			}
		}
		else if (document.getElementById('f3').value != '')
		{
			objeto += "i";			
			respaldo += '../images/'+document.getElementById('f3').value +'-skip';
			mandar += '<div class="single first" id=i1 style="display: none"><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f33').value +'"><img src="../images/' + document.getElementById('f3').value + '"width="100%" /></a></div>-skip';
		}
		mandar += '</div></div>-skip';
		}				
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_contacto'>-skip";
		mandar += "<div id='llamanos'>-skip";
		if (document.getElementById('tel').value != "")
		{
			objeto += "f";			
			respaldo += 'tel+56'+document.getElementById('tel').value +'-skip';
			mandar += '<center></br><center><input type="button" value="llamanos" id="llamar" class="tt" onclick="parent.location=\'tel:+56'
			+ document.getElementById('tel').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='escribenos'>-skip";
		if (document.getElementById('mail').value != "")
		{
			if (camposValidos(document.getElementById('mail').value, document.getElementById('tel').value))
			{	
				objeto += "m";			
				respaldo += 'mailto:' + document.getElementById('mail').value +'-skip';
				mandar += '<center><input type="button" id="escribir" class="tt" value="escribenos" onclick="parent.location=\'mailto:'+ document.getElementById('mail').value+ '\'">-skip';
			}
		}
		mandar += "</div>-skip";
		mandar += "<div id='ubicanos'>-skip";
		if (document.getElementById('address').value != "")
		{   
			objeto += "u";	
			respaldo +=	document.getElementById('address').value + '-skip';	
			mandar += '<center></br><center><input type="button" id="ubicar" class="tt" value="ubicanos" onclick="mostrarMP(\''+document.getElementById('address').value+'\')"></center>-skip';
		}
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "<div id='mapa' style='display:none'>-skip";
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_rs'>-skip";
		mandar += "<div id='facebook'>-skip";
		if (document.getElementById('face').value != "")
		{
						objeto += "b";	
						respaldo +=	'http://www.facebook.com/'+ document.getElementById('face').value+'-skip';
                        mandar += '<center><input type="button" id="faceb" class="tt"value="Facebook" onclick="parent.location=\'http://www.facebook.com/'+ document.getElementById('face').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='twitter'>-skip";
		if (document.getElementById('twit').value != "")
		{
					objeto += "w";	
					respaldo +=	'http://www.twitter.com/'+ document.getElementById('twit').value+'-skip';
                    mandar +=  '<center></br><center><input id="twitt" class="tt" value="Twitter" type="button"  onclick="parent.location=\'http://www.twitter.com/'+ document.getElementById('twit').value+ '\'">-skip';
		}
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		mandar += "</div>-skip";
		
		mandar += objeto;
		mandar += respaldo;
				
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
	
	function crear2(str)
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
				
			}
		}
		xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/crear2.php?q="+str,true);
		xmlhttp.send();
	}	
	
	
	
	
	function confirmarpagina(str)
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
		xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/buscarexistencia.php?q="+str,true);
		xmlhttp.send();		
	}




	function hidetext()
	{
		if (max == 2)
		{
		document.getElementById('title0').style.display = 'none';
		document.getElementById('bb0').style.display = 'none';
		}
		if (max == 1)
		{
		document.getElementById('title0').style.display = 'none';
		document.getElementById('title1').style.display = 'none';
		document.getElementById('bb0').style.display = 'none';
        document.getElementById('bb1').style.display = 'none';
		}
		if (max == 0)
		{
		document.getElementById('title0').style.display = 'none';
		document.getElementById('title1').style.display = 'none';
		document.getElementById('title2').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
			document.getElementById('bb0').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
			document.getElementById('title1').style.display = 'none';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
			document.getElementById('title1').style.display = 'none';
			document.getElementById('title2').style.display = 'none';
			document.getElementById('bb0').style.display = 'none';
			document.getElementById('bb1').style.display = 'none';
			document.getElementById('bb2').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
			document.getElementById('title1').style.display = 'none';
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
			document.getElementById('title0').style.display = 'none';
			document.getElementById('tt1').style.display = 'none';
			document.getElementById('title1').style.display = 'none';
			document.getElementById('tt2').style.display = 'none';
			document.getElementById('title2').style.display = 'none';
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
		var aux = "title"+id.id[2]
		document.getElementById(aux).style.display = 'block';
		id.style.display = 'block';
	}
	
			
$(document).ready(function () {
	
    $("#mp").click(function() {
	document.getElementById('mipagina').style.display = 'block';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	document.getElementById('formulario_diseno').style.display = 'none';
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
	document.getElementById('formulario_diseno').style.display = 'none';

        if (max > 0) {
			aux = ["j","k","l"];
            t = "t".concat(id);
            b = "b".concat(id);
			h = "h".concat(id);
            tt = "tt".concat(id);
            bb = "bb".concat(id);
			title = "title".concat(id);
			$("#texto").append("<div><a href='javascript:showPopup(\""+aux[id]+"\")'>Seleccione Imagen</a><br>");
			$("#texto").append("<input type='hidden' id ="+h+" value='vacio'>");
            $("#texto").append("<textarea id=" + t + " style='width:320px;' >Titulo"+(id+1)+"</textarea><textarea id=" + b + " style='width:320px;' ></textarea><br>");
            //$("#preview_vista_botones").append("<a href=#" + bb + "><button id=" + tt + " >Titulo"+(id+1)+"</button></a><br>");
			$("#preview_vista_botones").append("<button class='tt' id=" + tt + " onclick='mostrar ("+bb+")' >Titulo"+(id+1)+" </button><br>");
            $("#preview_vista_texto").append("<div class='title' id=" + title + "></div>");
            $("#preview_vista_texto").append("<div class='bb' id=" + bb + "></div>");
            asd = new nicEditor({ fullPanel: true }).panelInstance(b);
            id++;
            max -= 1;
			ver();
			showall();
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
	document.getElementById('formulario_diseno').style.display = 'none';
	
    });

    // Levantar el formulario de contacto en el area de trabajo //
    $("#btn_contacto").click(function () {
	document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'block';
	document.getElementById('formulario_rs').style.display = 'none';
	document.getElementById('formulario_diseno').style.display = 'none';
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
	document.getElementById('formulario_diseno').style.display = 'none';
        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "none");
        //        $("formulario_contacto").css("display", "block");
    });
     
     $("#btn_dise").click(function (){
	document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	document.getElementById('formulario_diseno').style.display = 'block';
	});
	
    $("#home").click(function () {

		showall();
		hidetext();
    });	
	
    $("#crear").click(function () {
		var send = hacer();		
		var elem = send.split('</objeto>');
		send = elem[0];
		objeto = elem[1];				
		objeto += "-skip";
		objeto += elem[2];
		crear2(objeto);
		crear(send);		
		var send2 = tomardatoscss();
		mandardatoscss(send2);    
	});
		
	$("#verificar").click(function () {
		var send = verpagina();
		confirmarpagina(send);    
    });    
});