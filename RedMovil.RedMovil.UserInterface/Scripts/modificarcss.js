function tomardatoscss()
	{
		var mandar;
		
		mandar = document.getElementById('c1').value+"/";
		mandar += document.getElementById('c2').value+"/";
		mandar += document.getElementById('c3').value+"/";
		mandar += document.getElementById('c4').value+"/";
		mandar += document.getElementById('c5').value+"/";
		mandar += document.getElementById('c6').value+"/";
		mandar += document.getElementById('c7').value+"/";		
		mandar += document.getElementById('nombrepagina').value+"/";
		if (document.getElementById('c0').value != '')
		mandar += document.getElementById('c0').value;
		else
		mandar += "arab.png";
		return mandar;
	}

function mandardatoscss(str)
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
	xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/generadorcss.php?q="+str,true);
	xmlhttp.send();
}
	
$(document).ready(function () 
{
	$("#csscambiar").click(function () 
	{
		var send = tomardatoscss();
		mandardatoscss(send);    
    });    
});