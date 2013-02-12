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
			alert (r);
			if (r == "si")
			{
				//texto = 'La pagina Existe actualmente';	
				location.href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/edu.html";
			}
			else if (r == "no")
			{
				//texto = 'La pagina no existe actualmente';	
				texto = 'La pagina no existe actualmente <img src="../imagenes/ok.png "width=20px" />';	
			}			
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
			alert (r);
			if (r == "si")
			{
				//texto = 'La pagina Existe actualmente';	
				location.href="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/edu.html";
			}
			else if (r == "no")
			{
				//texto = 'La pagina no existe actualmente';	
				texto = 'La pagina no existe actualmente <img src="../imagenes/ok.png "width=20px" />';	
			}			
		}
	}
	xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/login/reg.php"+str,true);
	xmlhttp.send();		
}


