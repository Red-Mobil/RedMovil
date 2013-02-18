   	function verificarlapagina()
	{
		var send = verpagina();
		confirmarpagina(send);    
	}
	
	
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
		mandar += '<a href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/redmovil.html" id="banner"><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/fullBanner.png" width="100%"/></a>'
		mandar += "<div id='preview_vista_portada'>-skip";
		if (document.getElementById('gal').value != "")
		{
			objeto += "p";
			var archivo=document.getElementById('gal').value; 
			var extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
			if (extension==".swf")
			{
				respaldo += '../images/'+document.getElementById('gal').value +'-skip';
				mandar += '<object type="application/x-shockwave-flash" data="../images/'+ document.getElementById('gal').value +'" width="100%" height="40%">';		 
				mandar += '<param name="movie" value="../images/' + document.getElementById('gal').value +'" />';
				mandar += '<param name="quality" value="high" />';
				mandar += '<param name="wmode" value="opaque" />';
				mandar += '<param name="swfversion" value="9.0.45.0" />';
				mandar += '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" /></object>';													
			}
			else
			{				
				respaldo += '../images/'+document.getElementById('gal').value +'-skip';
				mandar += '<img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('gal').value + '"width="100%" id="portada" /></br>-skip';
			}
			
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
		mandar += '<input type="button" value="Galeria" class = "tt" onclick="mostrarimagenes()" id="botonimagen" \>-skip';		
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_galeria' style='display: none'>-skip";
		if (document.getElementById('f1').value == '' && document.getElementById('f2').value == '' && document.getElementById('f3').value == '')
		{
		}
		else
		{
		mandar += '<div class="imageRow"><div class="set">-skip';
		if (document.getElementById('f1').value != '')
		{
			objeto += "i";			
			respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f1').value +'-skip';
			mandar += '<div class="single first" id=i1><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f1').value + '"width="100%" float="left" onclick="insertarimagen(\''+ document.getElementById('f1').value +'\')" \></div>-skip';
			if (document.getElementById('f2').value != '')
			{	
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f2').value +'-skip';
				mandar += '<div class="single" id=i2><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f2').value + '"width="100%" float="left" onclick="insertarimagen(\'i2\')" \></div>-skip';
			}
			if (document.getElementById('f3').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f3').value +'-skip';
				mandar += '<div class="single last" id=i3><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f3').value + '"width="100%" float="left" onclick="insertarimagen(\'i3\')" \></div>-skip';
			}
			if (document.getElementById('f4').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f4').value +'-skip';
				mandar += '<div class="single last" id=i4><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f4').value + '"width="100%" float="left" onclick="insertarimagen(\'i4\')" \></div>-skip';
			}
			if (document.getElementById('f5').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f5').value +'-skip';
				mandar += '<div class="single last" id=i5><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f5').value + '"width="100%" float="left" onclick="insertarimagen(\'i5\')" \></div>-skip';
			}
			if (document.getElementById('f6').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f6').value +'-skip';
				mandar += '<div class="single last" id=i6><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f6').value + '"width="100%" float="left" onclick="insertarimagen(\'i6\')" \></div>-skip';
			}
			if (document.getElementById('f7').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f7').value +'-skip';
				mandar += '<div class="single last" id=i7><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f7').value + '"width="100%" float="left" onclick="insertarimagen(\'i7\')" \></div>-skip';
			}
			if (document.getElementById('f8').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f8').value +'-skip';
				mandar += '<div class="single last" id=i8><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f8').value + '"width="100%" float="left" onclick="insertarimagen(\'i8\')" \></div>-skip';
			}
			if (document.getElementById('f9').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f9').value +'-skip';
				mandar += '<div class="single last" id=i9><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f9').value + '"width="100%" float="left" onclick="insertarimagen(\'i9\')" \></div>-skip';
			}
			if (document.getElementById('f10').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f10').value +'-skip';
				mandar += '<div class="single last" id=i10><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f10').value + '"width="100%" float="left" onclick="insertarimagen(\'i10\')" \></div>-skip';
			}
			if (document.getElementById('f11').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f11').value +'-skip';
				mandar += '<div class="single last" id=i11><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f11').value + '"width="100%" float="left" onclick="insertarimagen(\'i11\')" \></div>-skip';
			}
			if (document.getElementById('f12').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f12').value +'-skip';
				mandar += '<div class="single last" id=i12><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f12').value + '"width="100%" float="left" onclick="insertarimagen(\'i12\')" \></div>-skip';
			}
			if (document.getElementById('f13').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f13').value +'-skip';
				mandar += '<div class="single last" id=i13><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f13').value + '"width="100%" float="left" onclick="insertarimagen(\'i13\')" \></div>-skip';
			}
			if (document.getElementById('f14').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f14').value +'-skip';
				mandar += '<div class="single last" id=i14><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f14').value + '"width="100%" float="left" onclick="insertarimagen(\'i14\')" \></div>-skip';
			}
			if (document.getElementById('f15').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f15').value +'-skip';
				mandar += '<div class="single last" id=i15><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f15').value + '"width="100%" float="left" onclick="insertarimagen(\'i15\')" \></div>-skip';
			}
		}	
		mandar += '</div></div>-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='margen' style='display: none'>-skip";
		mandar += "<div class='ac' id='cerrar' style='display: none'><a href='javascript:cerrarimagen();'><img src='../../imagenes/close.png' width='15' height='15'></a></div>-skip";
		mandar += "<div id='fotos'></div>-skip";
		mandar += "<div class='ac' id='der' style='display: none'><a href='javascript:moverderecha(valorimg);'><img src='../../imagenes/next.png' width='15' height='15'></a></div>-skip";
		mandar += "<div class='ac' id='izq' style='display: none'><a href='javascript:moverizquierda(valorimg);'><img src='../../imagenes/prev.png' width='15' height='15'></a></div>-skip";
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
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/crear.php?q="+str,true);
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
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/crear2.php?q="+str,true);
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
				var r = xmlhttp.responseText;
				if (r == "si")
				{
					//texto = 'La pagina Existe actualmente';	
					texto = 'Error, la pagina Existe actualmente <img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/not_ok.png "width=20px" />';	

				}
				else if (r == "no")
				{
					//texto = 'La pagina no existe actualmente';	
					texto = 'La pagina no existe actualmente <img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/ok.png "width=20px" />';	
				}
				$("#recibir_respuesta").html(texto);				
			}
		}
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/buscarexistencia.php?q="+str,true);
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

	tinyMCE.init({
	mode : "none",
	theme_advanced_path : false,
	plugins: "paste,maxchars",
	max_chars : 300,
	max_chars_indicator : "count",
	max_chars_maxText : "Se paso del limite",
	paste_preprocess : function(pl, o) 
		{				
			o.content = o.content.replace(/<\S[^><]*>/g, "");
		},			
	theme_advanced_buttons1 : "bold,underline,italic,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,undo,redo,|,removeformat",
	setup : function(ed) 
	{
		ed.onKeyUp.add(function(ed) 
		{			
			ver();
			ed.undoManager.add();
			
		});
		
		/*ed.onChange.add(function(ed, evt) 
		{						
			var strip = (tinyMCE.activeEditor.getContent()).replace(/(<([^>]+)>)/ig,"");
			var strip2 = 300 - strip.length;
			if (strip2 < 0)
			{
				var text = "0 Caracteres sobrantes";
			}
			else
			{
				var text = strip2 + " Caracteres sobrantes";
			}
			tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), text); 
			if (strip.length > 301)
			{	
				//tinyMCE.activeEditor.undoManager.undo();				
				//evt.preventDefault();
                //evt.stopPropagation();
			}
		});*/
	}
	});
	
    $("#mp").click(function() {
		document.getElementById('landing_page').style.display = 'none';
		document.getElementById('mipagina').style.display = 'block';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';
    });
	
	$("#txt").click(function() {
		document.getElementById('landing_page').style.display = 'none';
		document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'block';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';
    });

    $("#add").click(function () {

		document.getElementById('landing_page').style.display = 'none';
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
			$("#texto").append("<div class='divspoiler'><a href='javascript:showPopup(\""+aux[id]+"\")'><input type='button' value='Seleccione Imagen'/</a><br>");
			$("#texto").append("<input type='hidden' id ="+h+" value='vacio'>");
			$("#texto").append("<div id='count'></div>");
            $("#texto").append("<textarea id=" + t + " maxlength='10' style='width:320px;' onkeyup='ver()'>Titulo"+(id+1)+"</textarea><textarea id=" + b + " style='width:320px;' ></textarea><br>");
			$("#preview_vista_botones").append("<button class='tt' id=" + tt + " onclick='mostrar ("+bb+")' >Titulo"+(id+1)+" </button><br>");
            $("#preview_vista_texto").append("<div class='title' id=" + title + "></div>");
            $("#preview_vista_texto").append("<div class='bb' id=" + bb + "></div>");
			tinyMCE.execCommand('mceAddControl',true,b);
            id++;
            max -= 1;
			showall();
			hidetext();
        }
    });

    // Levantar la galeria de imagenes en el area de trabajo //
    $("#btn_galeria").click(function () {

        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "block");
        //        $("formulario_contacto").css("display", "none");
		document.getElementById('landing_page').style.display = 'none';
	document.getElementById('mipagina').style.display = 'none';	
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	document.getElementById('formulario_diseno').style.display = 'none';
	
    });

    // Levantar el formulario de contacto en el area de trabajo //
    $("#btn_contacto").click(function () {
	document.getElementById('landing_page').style.display = 'none';
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
	 document.getElementById('landing_page').style.display = 'none';
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
	 document.getElementById('landing_page').style.display = 'none';
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
    $("#lp").click(function () {

		document.getElementById('landing_page').style.display = 'block';
		document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';	
    });	
	
    $("#crear_lp").click(function () {

		lpCreate();
    });	

   	function verificarlapagina()
	{
		var send = verpagina();
		confirmarpagina(send);    
	}
	
	
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
		mandar += "<script type='text/javascript'> valorimg = "+valorimg+"</script>-skip";
		mandar += "<script type='text/javascript'> cantfoto = "+cantfoto+"</script>-skip";
		mandar += "<div id='expandible'>-skip";
		mandar += '<a href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/redmovil.html" id="banner"><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/fullBanner.png" width="100%"/></a>'
		mandar += "<div id='preview_vista_portada'>-skip";
		if (document.getElementById('gal').value != "")
		{
			objeto += "p";
			var archivo=document.getElementById('gal').value; 
			var extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
			if (extension==".swf")
			{
				respaldo += '../images/'+document.getElementById('gal').value +'-skip';
				mandar += '<object type="application/x-shockwave-flash" data="../images/'+ document.getElementById('gal').value +'" width="100%" height="40%">';		 
				mandar += '<param name="movie" value="../images/' + document.getElementById('gal').value +'" />';
				mandar += '<param name="quality" value="high" />';
				mandar += '<param name="wmode" value="opaque" />';
				mandar += '<param name="swfversion" value="9.0.45.0" />';
				mandar += '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" /></object>';													
			}
			else
			{				
				respaldo += '../images/'+document.getElementById('gal').value +'-skip';
				mandar += '<img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('gal').value + '"width="100%" id="portada" /></br>-skip';
			}
			
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
		mandar += '<input type="button" value="Galeria" class = "tt" onclick="mostrarimagenes()" id="botonimagen" \>-skip';		
		}
		mandar += "</div>-skip";
		mandar += "<div id='preview_vista_galeria' style='display: none'>-skip";
		if (document.getElementById('f1').value == '' && document.getElementById('f2').value == '' && document.getElementById('f3').value == '')
		{
		}
		else
		{
		mandar += '<div class="imageRow"><div class="set">-skip';
		if (document.getElementById('f1').value != '')
		{
			objeto += "i";			
			respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f1').value +'-skip';
			mandar += '<div class="single first" id=i1><img id="as1" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f1').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f1\')" \></div>-skip';
			if (document.getElementById('f2').value != '')
			{	
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f2').value +'-skip';
				mandar += '<div class="single" id=i2><img id="as2" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f2').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f2\')" \></div>-skip';
			}
			if (document.getElementById('f3').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f3').value +'-skip';
				mandar += '<div class="single last" id=i3><img id="as3" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f3').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f3\')" \></div>-skip';
			}
			if (document.getElementById('f4').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f4').value +'-skip';
				mandar += '<div class="single last" id=i4><img id="as4" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f4').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f4\')" \></div>-skip';
			}
			if (document.getElementById('f5').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f5').value +'-skip';
				mandar += '<div class="single last" id=i5><img id="as5" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f5').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f5\')" \></div>-skip';
			}
			if (document.getElementById('f6').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f6').value +'-skip';
				mandar += '<div class="single last" id=i6><img id="as6" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f6').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f6\')" \></div>-skip';
			}
			if (document.getElementById('f7').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f7').value +'-skip';
				mandar += '<div class="single last" id=i7><img id="as7" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f7').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f7\')" \></div>-skip';
			}
			if (document.getElementById('f8').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f8').value +'-skip';
				mandar += '<div class="single last" id=i8><img id="as8" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f8').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f8\')" \></div>-skip';
			}
			if (document.getElementById('f9').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f9').value +'-skip';
				mandar += '<div class="single last" id=i9><img id="as9" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f9').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f9\')" \></div>-skip';
			}
			if (document.getElementById('f10').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f10').value +'-skip';
				mandar += '<div class="single last" id=i10><img id="as10" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f10').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f10\')" \></div>-skip';
			}
			if (document.getElementById('f11').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f11').value +'-skip';
				mandar += '<div class="single last" id=i11><img id="as11" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f11').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f11\')" \></div>-skip';
			}
			if (document.getElementById('f12').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f12').value +'-skip';
				mandar += '<div class="single last" id=i12><img id="as12" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f12').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f12\')" \></div>-skip';
			}
			if (document.getElementById('f13').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f13').value +'-skip';
				mandar += '<div class="single last" id=i13><img id="as13" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f13').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f13\')" \></div>-skip';
			}
			if (document.getElementById('f14').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f14').value +'-skip';
				mandar += '<div class="single last" id=i14><img id="as14" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f14').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f14\')" \></div>-skip';
			}
			if (document.getElementById('f15').value != '')
			{
				objeto += "i";			
				respaldo += 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas'+document.getElementById('f15').value +'-skip';
				mandar += '<div class="single last" id=i15><img id="as15" src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f15').value + '"width="56px" height=56px" float="left" onclick="insertarimagen2(\'f15\')" \></div>-skip';
			}
		}	
		mandar += '</div></div>-skip';
		}
		mandar += "</div>-skip";
		mandar += "<div id='margen' style='display: none'>-skip";
		mandar += "<div class='ac' id='cerrar' style='display: none'><a href='javascript:cerrarimagen();'><img src='http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/close.png' width='15' height='15'></a></div>-skip";
		mandar += "<div id='fotos'></div>-skip";
		mandar += "<div class='ac' id='der' style='display: none'><a href='javascript:moverderecha(valorimg, 2);'><img src='http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/next.png' width='15' height='15'></a></div>-skip";
		mandar += "<div class='ac' id='izq' style='display: none'><a href='javascript:moverizquierda(valorimg, 2);'><img src='http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/prev.png' width='15' height='15'></a></div>-skip";
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
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/crear.php?q="+str,true);
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
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/crear2.php?q="+str,true);
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
				var r = xmlhttp.responseText;
				if (r == "si")
				{
					//texto = 'La pagina Existe actualmente';	
					texto = 'Error, la pagina Existe actualmente <img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/not_ok.png "width=20px" />';	

				}
				else if (r == "no")
				{
					//texto = 'La pagina no existe actualmente';	
					texto = 'La pagina no existe actualmente <img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/imagenes/ok.png "width=20px" />';	
				}
				$("#recibir_respuesta").html(texto);				
			}
		}
		xmlhttp.open("GET","http://redmovil.mobi/editor/RedMovil.RedMovil.Backend/buscarexistencia.php?q="+str,true);
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

	tinyMCE.init({
	mode : "none",
	theme_advanced_path : false,
	plugins: "paste,maxchars",
	max_chars : 300,
	max_chars_indicator : "count",
	max_chars_maxText : "Se paso del limite",
	paste_preprocess : function(pl, o) 
		{				
			o.content = o.content.replace(/<\S[^><]*>/g, "");
		},			
	theme_advanced_buttons1 : "bold,underline,italic,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,undo,redo,|,removeformat",
	setup : function(ed) 
	{
		ed.onKeyUp.add(function(ed) 
		{			
			ver();
			ed.undoManager.add();
			
		});
		
		/*ed.onChange.add(function(ed, evt) 
		{						
			var strip = (tinyMCE.activeEditor.getContent()).replace(/(<([^>]+)>)/ig,"");
			var strip2 = 300 - strip.length;
			if (strip2 < 0)
			{
				var text = "0 Caracteres sobrantes";
			}
			else
			{
				var text = strip2 + " Caracteres sobrantes";
			}
			tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), text); 
			if (strip.length > 301)
			{	
				//tinyMCE.activeEditor.undoManager.undo();				
				//evt.preventDefault();
                //evt.stopPropagation();
			}
		});*/
	}
	});
	
    $("#mp").click(function() {
		document.getElementById('landing_page').style.display = 'none';
		document.getElementById('mipagina').style.display = 'block';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';
    });
	
	$("#txt").click(function() {
		document.getElementById('landing_page').style.display = 'none';
		document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'block';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';
    });

    $("#add").click(function () {

		document.getElementById('landing_page').style.display = 'none';
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
			$("#texto").append("<div class='divspoiler'><a href='javascript:showPopup(\""+aux[id]+"\")'><input type='button' value='Seleccione Imagen'/</a><br>");
			$("#texto").append("<input type='hidden' id ="+h+" value='vacio'>");
			$("#texto").append("<div id='count'></div>");
            $("#texto").append("<textarea id=" + t + " maxlength='10' style='width:320px;' onkeyup='ver()'>Titulo"+(id+1)+"</textarea><textarea id=" + b + " style='width:320px;' ></textarea><br>");
			$("#preview_vista_botones").append("<button class='tt' id=" + tt + " onclick='mostrar ("+bb+")' >Titulo"+(id+1)+" </button>");
            $("#preview_vista_texto").append("<div class='title' id=" + title + "></div>");
            $("#preview_vista_texto").append("<div class='bb' id=" + bb + "></div>");
			tinyMCE.execCommand('mceAddControl',true,b);
            id++;
            max -= 1;
			showall();
			hidetext();
        }
    });

    // Levantar la galeria de imagenes en el area de trabajo //
    $("#btn_galeria").click(function () {

        //        $("texto").css("display", "none");
        //        $("galeria").css("display", "block");
        //        $("formulario_contacto").css("display", "none");
		document.getElementById('landing_page').style.display = 'none';
	document.getElementById('mipagina').style.display = 'none';	
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
        document.getElementById('formulario_contacto').style.display = 'none';
	document.getElementById('formulario_rs').style.display = 'none';
	document.getElementById('formulario_diseno').style.display = 'none';
	
    });

    // Levantar el formulario de contacto en el area de trabajo //
    $("#btn_contacto").click(function () {
	document.getElementById('landing_page').style.display = 'none';
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
	 document.getElementById('landing_page').style.display = 'none';
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
	 document.getElementById('landing_page').style.display = 'none';
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
    $("#lp").click(function () {

		document.getElementById('landing_page').style.display = 'block';
		document.getElementById('mipagina').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('formulario_contacto').style.display = 'none';
		document.getElementById('formulario_rs').style.display = 'none';
		document.getElementById('formulario_diseno').style.display = 'none';	
    });	
	
    $("#crear_lp").click(function () {

		lpCreate();
    });	
});