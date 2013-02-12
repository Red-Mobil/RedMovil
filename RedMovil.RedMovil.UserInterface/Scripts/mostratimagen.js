function mostrarportada() 
{
	var archivo3=document.getElementById('gal').value; 
	var extension3 = (archivo3.substring(archivo3.lastIndexOf("."))).toLowerCase();
	if (extension3==".swf")
	{
		texto = '<object type="application/x-shockwave-flash" data="../images/' + document.getElementById('gal').value + '" width="100%" height="40%">';
		 
		texto += '<param name="movie" value="../images/' + document.getElementById('gal').value + '" />';
		texto += '<param name="quality" value="high" />';
		texto += '<param name="wmode" value="opaque" />';
		texto += '<param name="swfversion" value="9.0.45.0" />';
		texto += '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" /></object>';	
	}
	else
	{
		texto = '<img src="../images/' + document.getElementById('gal').value + '"width="100%" id="portada" />';	
	}
	
	$("#preview_vista_portada").html(texto);
}

function mostrarimagen() 
{   
 if (document.getElementById('f1').value != '' || document.getElementById('f2').value != '' || document.getElementById('f3').value != '')
 {
  $("#gale").html('<input type="button" class="tt" value="Galeria" onclick="mostrarimagenes()" id="botonimagen" \>');
  
  texto = '<div class="imageRow"><div class="set">'; 
  if (document.getElementById('f1').value != '')
  texto = texto + '<div class="single first" id=i1><img src="../images/' + document.getElementById('f1').value + '"width="100%" float="left" onclick="insertarimagen(\'f1\')" \></div>';
  if (document.getElementById('f2').value != '')
  texto = texto + '<div class="single" id=i2><img src="../images/' + document.getElementById('f2').value + '"width="100%" float="left" onclick="insertarimagen(\'f2\')" \></div>';
  if (document.getElementById('f3').value != '')
  texto = texto + '<div class="single last" id=i3><img src="../images/' + document.getElementById('f3').value + '"width="100%" float="left" onclick="insertarimagen(\'f3\')" \></div>';
  texto = texto +'</div></div>';
       
  $("#preview_vista_galeria").html(texto);
  if (document.getElementById('f1').value != '')
  document.getElementById('i1').style.display = 'none';
  if (document.getElementById('f2').value != '')
  document.getElementById('i2').style.display = 'none';
  if (document.getElementById('f3').value != '')
  document.getElementById('i3').style.display = 'none';
 }
}
function insertarimagen(valor)
{
 $("#fotos").html('<img src="../images/' + document.getElementById(valor).value + '"/>');
 hideall();
 document.getElementById('cerrar').style.display = 'block';
 document.getElementById('der').style.display = 'block';
 document.getElementById('izq').style.display = 'block';
 document.getElementById('margen').style.display = 'block';
 document.getElementById('fotos').style.display = 'block';
 document.getElementById('home').style.display = 'none';
 asd = valor.split('f');
 valorimg = asd[1];
}

function cerrarimagen()
{
 document.getElementById('margen').style.display = 'none';
 document.getElementById('home').style.display = 'block';
 document.getElementById('preview_vista_galeria').style.display = 'block';
  
}
function moverderecha(valoor)
{
 if(valoor == "3"){
  valoor ="1";
 }else{
 valoor = parseInt(valoor)+parseInt(1);
 }
 insertarimagen('f'+valoor);
 
}

function moverizquierda(valoor)
{
 if(valoor =="1"){
  valoor ="3";
 }else{
 valoor = valoor-"1";
 }
 insertarimagen('f'+valoor);
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