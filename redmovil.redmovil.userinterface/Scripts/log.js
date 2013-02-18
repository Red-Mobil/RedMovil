function ValidateEmail()
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(document.getElementById('mail').value.match(mailformat))
	{
		texto = '<img src="../imagenes/ok.png "width=20px" />';	
		document.getElementById("log").disabled=false;
		document.getElementById("reg").disabled=false;
	}
	else
	{
		document.getElementById("log").disabled=true;
		document.getElementById("reg").disabled=true;
		texto = '<img src="../imagenes/not_ok.png "width=20px" />';			
	}
	$("#mailrespuesta").html(texto);
}

function mandardatoslogin()
{
	var send = ver();
	login(send);    
}

function mandardatosregistro()
{
	var send = ver();	
	registro(send);    
}
		
function ver()
{
	var mail;
	var pass;
	var datos;
	mail = document.getElementById('mail').value;
	pass = document.getElementById('pass').value;	
	datos = "?e="+mail+"<pass>"+pass;	
	return datos;
}

	
function login(str)
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
				location.href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/edu.html";
			}
			else if (r == "existe")
			{
				texto = 'Error. Usuario y contrasenia no coinciden ';
			}			
			else if (r == "validar")
			{
				texto = 'Error. Debe validar su cuenta antes de continuar. ';
			}
			$("#respuesta").html(texto);
		}
	}
	xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/login/log.php"+str,true);
	xmlhttp.send();		
}

function registro(str)
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
				location.href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/edu.html";
			}
			else if (r == "no")
			{				
				texto = 'Error. El mail ingresado ya existe en la base de datos ';
			}		
			$("#respuesta").html(texto);
		}
	}
	xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/login/reg.php"+str,true);
	xmlhttp.send();		
}

function logout()
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
			xmlhttp.responseText;						
			location.href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/redmovil.html";
		}
	}
	xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/login/cerrarsesion.php",true);
	xmlhttp.send();		
}
