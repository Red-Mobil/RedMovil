function mostrarimagen() 
{
	c_ima = 0;
	var texto = '<center></br><center><input type="button" value="'+ document.getElementById('ng').value +'"\></br></br>';	
	
	if (document.getElementById('f1').value != "")
	{	
		texto = texto + '<img src="../images/'+ document.getElementById('f1').value +'" width="100"></br>';
		imagen[c_ima] = document.getElementById('f1').value;
		c_ima = c_ima+1;
	}
	
	if (document.getElementById('f2').value != "")
	{	
		texto = texto + '<img src="../images/'+ document.getElementById('f2').value +'" width="100"></br>';
		imagen[c_ima] = document.getElementById('f2').value;
		c_ima = c_ima+1;
	}
	
	if (document.getElementById('f3').value != "")
	{	
		texto = texto + '<img src="../images/'+ document.getElementById('f3').value +'" width="100"></br></br>';
		imagen[c_ima] = document.getElementById('f3').value;
		//imagen[c_ima] = document.getElementById('f3').value;
		c_ima = c_ima+1;
	}			
	$("#preview_vista_galeria").html(texto);
	

}