	function crear(pln,obj,str)
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
				//window.open(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/lana.php?q="pln+"/"+obj+"/"+str,true);
		xmlhttp.send();
	}
