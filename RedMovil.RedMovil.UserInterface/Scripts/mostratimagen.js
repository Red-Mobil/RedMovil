function mostrarportada() 
{
	texto = '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" />';	
	$("#preview_vista_portada").html(texto);
}

function mostrarimagen() 
{			
	if (document.getElementById('f1').value != '' || document.getElementById('f2').value != '' || document.getElementById('f3').value != '')
	{
		$("#gale").html('<center></br><center><input type="button" class="tt" value="Galeria" onclick="mostrarimagenes()" id="botonimagen" \>');
		
		texto = '<div class="imageRow"><div class="set">';	
		if (document.getElementById('f1').value != '')
		texto = texto + '<div class="single first" id=i1><a href="../images/' + document.getElementById('f1').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f11').value +'"><img src="../images/' + document.getElementById('f1').value + '"width="60px" height="60px"/></a></div>';
		if (document.getElementById('f2').value != '')
		texto = texto + '<div class="single" id=i2><a href="../images/' + document.getElementById('f2').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f22').value +'"><img src="../images/' + document.getElementById('f2').value + '"width="60px" height="60px"/></a></div>';
		if (document.getElementById('f3').value != '')
		texto = texto + '<div class="single last" id=i3><a href="../images/' + document.getElementById('f3').value + '"rel="lightbox[plants]" title="'+ document.getElementById('f33').value +'"><img src="../images/' + document.getElementById('f3').value + '"width="60px" height="60px"/></a></div>';
		texto = texto +'</div></div></tr></table>';
							
		$("#preview_vista_galeria").html(texto);
		if (document.getElementById('f1').value != '')
		document.getElementById('i1').style.display = 'none';
		if (document.getElementById('f2').value != '')
		document.getElementById('i2').style.display = 'none';
		if (document.getElementById('f3').value != '')
		document.getElementById('i3').style.display = 'none';
	}
}

function mostrarimagenes()
{
	hideall();
	document.getElementById('preview_vista_galeria').style.display = 'block';
	document.getElementById('home').style.display = 'block';
	document.getElementById('gale').style.display = 'none';
	if (document.getElementById('i1').value != '')
	document.getElementById('i1').style.display = 'block';
	if (document.getElementById('i2').value != '')
	document.getElementById('i2').style.display = 'block';
	if (document.getElementById('i3').value != '')
	document.getElementById('i3').style.display = 'block';
	
	vaim();
}

function vaim(){
	var idim =2;
	return idim;
}
	function showPopup(refe)
{
	window.showModalDialog('../../RedMovil.RedMovil.Backend/imagenes.php?'+refe,window,'center:yes');
}

function setTheVal(valFromPopup,i)
{
	if (i=='a')
	{				
		document.aForm.f1.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='b')
	{
		document.aForm.f2.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='c')
	{
		document.aForm.f3.value=valFromPopup;
		mostrarimagen();
	}  
	else if (i=='g')
	{
		document.bForm.gal.value=valFromPopup;
		mostrarportada();
	} 
	else if (i=='j')
	{
		document.cForm.h0.value=valFromPopup;
		ver();
	}  
	else if (i=='k')
	{
		document.cForm.h1.value=valFromPopup;
		ver();
	}  
	else if (i=='l')
	{
		document.cForm.h2.value=valFromPopup;
		ver();
	} 
else if (i=='m')
	{
		document.dForm.c0.value=valFromPopup;
		cssChange("c0");
	}  	
}