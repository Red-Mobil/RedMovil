	function copy(str)
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
				{
					alert("Error, intente denuevo");
				}
			}
		}
		xmlhttp.open("GET","../../RedMovil.RedMovil.Backend/copy.php?file="+str,true);
		xmlhttp.send();
	}