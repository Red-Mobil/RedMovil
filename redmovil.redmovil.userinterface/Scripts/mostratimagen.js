var cantfoto = 1;

function mostrarportada() 
{
	var archivo3=document.getElementById('gal').value; 
	var extension3 = (archivo3.substring(archivo3.lastIndexOf("."))).toLowerCase();
	if (extension3==".swf")
	{		
		texto = '<object type="application/x-shockwave-flash" data="paginas' + document.getElementById('gal').value + '" width="100%" height="40%">';
		 
		texto += '<param name="movie" value="paginas' + document.getElementById('gal').value + '" />';
		texto += '<param name="quality" value="high" />';
		texto += '<param name="wmode" value="opaque" />';
		texto += '<param name="swfversion" value="9.0.45.0" />';
		texto += '<img src="paginas' + document.getElementById('gal').value + '"width="100%" id="portada" /></object>';	
	}
	else
	{
		texto = '<img src="paginas' + document.getElementById('gal').value + '"width="100%" id="portada" />';	
	}
	
	$("#preview_vista_portada").html(texto);
}

function agregarft()
{
	if (cantfoto != "15")
	{
		if(document.getElementById('f'+cantfoto).value != '')
		{
		cantfoto = parseInt(cantfoto)+parseInt(1);
		document.getElementById('fo'+cantfoto).style.display = 'block';
		}
	}
}

function mostrarimagen() 
{
 if (document.getElementById('f1').value != '' || document.getElementById('f2').value != '' || document.getElementById('f3').value != '' || document.getElementById('f4').value != '' || document.getElementById('f5').value != '' || document.getElementById('f6').value != '' || document.getElementById('f7').value != '' || document.getElementById('f8').value != '' || document.getElementById('f9').value != '' || document.getElementById('f10').value != '' || document.getElementById('f11').value != '' || document.getElementById('f12').value != '' || document.getElementById('f13').value != '' || document.getElementById('f14').value != '' || document.getElementById('f15').value != '')
 {
  $("#gale").html('<input type="button" class="tt" value="Galeria" onclick="mostrarimagenes()" id="botonimagen" \>');
  
  texto = '<div class="imageRow"><div class="set">'; 
  if (document.getElementById('f1').value != '')
  texto = texto + '<div class="single first" id=i1><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f1').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f1\')" \></div>';
  if (document.getElementById('f2').value != '')
  texto = texto + '<div class="single" id=i2><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f2').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f2\')" \></div>';
  if (document.getElementById('f3').value != '')
  texto = texto + '<div class="single last" id=i3><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f3').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f3\')" \></div>';
  if (document.getElementById('f4').value != '')
  texto = texto + '<div class="single last" id=i4><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f4').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f4\')" \></div>';
  if (document.getElementById('f5').value != '')
  texto = texto + '<div class="single last" id=i5><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f5').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f5\')" \></div>';
  if (document.getElementById('f6').value != '')
  texto = texto + '<div class="single last" id=i6><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f6').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f6\')" \></div>';
  if (document.getElementById('f7').value != '')
  texto = texto + '<div class="single last" id=i7><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f7').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f7\')" \></div>';
  if (document.getElementById('f8').value != '')
  texto = texto + '<div class="single last" id=i8><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f8').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f8\')" \></div>';
  if (document.getElementById('f9').value != '')
  texto = texto + '<div class="single last" id=i9><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f9').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f9\')" \></div>';
  if (document.getElementById('f10').value != '')
  texto = texto + '<div class="single last" id=i10><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f10').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f10\')" \></div>';
  if (document.getElementById('f11').value != '')
  texto = texto + '<div class="single last" id=i11><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f11').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f11\')" \></div>';
  if (document.getElementById('f12').value != '')
  texto = texto + '<div class="single last" id=i12><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f12').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f12\')" \></div>';
  if (document.getElementById('f13').value != '')
  texto = texto + '<div class="single last" id=i13><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f13').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f13\')" \></div>';
  if (document.getElementById('f14').value != '')
  texto = texto + '<div class="single last" id=i14><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f14').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f14\')" \></div>';
  if (document.getElementById('f15').value != '')
  texto = texto + '<div class="single last" id=i15><img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById('f15').value + '"width="56px" height=56px" float="left" onclick="insertarimagen(\'f15\')" \></div>';
  texto = texto +'</div></div>';
       
  $("#preview_vista_galeria").html(texto);
  if (document.getElementById('f1').value != '')
  document.getElementById('i1').style.display = 'none';
  if (document.getElementById('f2').value != '')
  document.getElementById('i2').style.display = 'none';
  if (document.getElementById('f3').value != '')
  document.getElementById('i3').style.display = 'none';
  if (document.getElementById('f4').value != '')
  document.getElementById('i4').style.display = 'none';
  if (document.getElementById('f5').value != '')
  document.getElementById('i5').style.display = 'none';
  if (document.getElementById('f6').value != '')
  document.getElementById('i6').style.display = 'none';
  if (document.getElementById('f7').value != '')
  document.getElementById('i7').style.display = 'none';
  if (document.getElementById('f8').value != '')
  document.getElementById('i8').style.display = 'none';
  if (document.getElementById('f9').value != '')
  document.getElementById('i9').style.display = 'none';
  if (document.getElementById('f10').value != '')
  document.getElementById('i10').style.display = 'none';
  if (document.getElementById('f11').value != '')
  document.getElementById('i11').style.display = 'none';
  if (document.getElementById('f12').value != '')
  document.getElementById('i12').style.display = 'none';
  if (document.getElementById('f13').value != '')
  document.getElementById('i13').style.display = 'none';
  if (document.getElementById('f14').value != '')
  document.getElementById('i14').style.display = 'none';
  if (document.getElementById('f15').value != '')
  document.getElementById('i15').style.display = 'none';
 }
}
function insertarimagen(valor)
{
 $("#fotos").html('<img src="http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas' + document.getElementById(valor).value + ' "width="100%"/>');
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

function insertarimagen2(valor)
{
	if(valor == "f1"){
		 $("#fotos").html('<img src="' + document.getElementById('as1').src + ' "width="100%"/>');
		 valorimg = "1";
	}
	if(valor == "f2"){
		 $("#fotos").html('<img src="' + document.getElementById('as2').src + ' "width="100%"/>');
		 valorimg = "2";
	}
	if(valor == "f3"){
		 $("#fotos").html('<img src="' + document.getElementById('as3').src + ' "width="100%"/>');
		 valorimg = "3";
	}
	if(valor == "f4"){
		 $("#fotos").html('<img src="' + document.getElementById('as4').src + ' "width="100%"/>');
		 valorimg = "4";
	}
	if(valor == "f5"){
		 $("#fotos").html('<img src="' + document.getElementById('as5').src + ' "width="100%"/>');
		 valorimg = "5";
	}
	if(valor == "f6"){
		 $("#fotos").html('<img src="' + document.getElementById('as6').src + ' "width="100%"/>');
		 valorimg = "6";
	}
	if(valor == "f7"){
		 $("#fotos").html('<img src="' + document.getElementById('as7').src + ' "width="100%"/>');
		 valorimg = "7";
	}
	if(valor == "f8"){
		 $("#fotos").html('<img src="' + document.getElementById('as8').src + ' "width="100%"/>');
		 valorimg = "8";
	}
	if(valor == "f9"){
		 $("#fotos").html('<img src="' + document.getElementById('as9').src + ' "width="100%"/>');
		 valorimg = "9";
	}
	if(valor == "f10"){
		 $("#fotos").html('<img src="' + document.getElementById('as10').src + ' "width="100%"/>');
		 valorimg = "10";
	}
	if(valor == "f11"){
		 $("#fotos").html('<img src="' + document.getElementById('as11').src + ' "width="100%"/>');
		 valorimg = "11";
	}
	if(valor == "f12"){
		 $("#fotos").html('<img src="' + document.getElementById('as12').src + ' "width="100%"/>');
		 valorimg = "12";
	}
	if(valor == "f13"){
		 $("#fotos").html('<img src="' + document.getElementById('as13').src + ' "width="100%"/>');
		 valorimg = "13";
	}
	if(valor == "f14"){
		 $("#fotos").html('<img src="' + document.getElementById('as14').src + ' "width="100%"/>');
		 valorimg = "14";
	}
	if(valor == "f15"){
		 $("#fotos").html('<img src="' + document.getElementById('as15').src + ' "width="100%"/>');
		 valorimg = "15";
	}
 hideall();
 document.getElementById('cerrar').style.display = 'block';
 document.getElementById('der').style.display = 'block';
 document.getElementById('izq').style.display = 'block';
 document.getElementById('margen').style.display = 'block';
 document.getElementById('fotos').style.display = 'block';
 document.getElementById('home').style.display = 'none';
	
}

function cerrarimagen()
{
 document.getElementById('margen').style.display = 'none';
 document.getElementById('home').style.display = 'block';
 document.getElementById('preview_vista_galeria').style.display = 'block';
  
}
function moverderecha(valoor,ii)
{
 if(valoor == cantfoto){
	
	valoor ="1";
	
 }else{
	
	valoor = parseInt(valoor)+parseInt(1);

 }
 if (ii == "1"){
	if(document.getElementById('f'+valoor).value == '')
	{
		valoor = "1";
	}
 insertarimagen('f'+valoor);
 }else if(ii == "2"){

	insertarimagen2('f'+valoor);
 }
}

function moverizquierda(valoor, ii)
{
 if(valoor == "1"){

	valoor = cantfoto; 
 }else{
 valoor = valoor-"1";
 }
 if (ii == "1"){
	if(document.getElementById('f'+valoor).value == '')
	{
		valoor = parseInt(cantfoto)-parseInt(1);
	}
 insertarimagen('f'+valoor);
 }else if(ii == "2"){
	if(document.getElementById('as'+valoor).src == 'http://redmovil.mobi/editor/RedMovil.RedMovil.UserInterface/Html/paginas')
	{
		valoor = parseInt(cantfoto)-parseInt(1);
	}
	insertarimagen2('f'+valoor);
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
	if (document.getElementById('i4').value != '')
	document.getElementById('i4').style.display = 'block';
	if (document.getElementById('i5').value != '')
	document.getElementById('i5').style.display = 'block';
	if (document.getElementById('i6').value != '')
	document.getElementById('i6').style.display = 'block';
	if (document.getElementById('i7').value != '')
	document.getElementById('i7').style.display = 'block';
	if (document.getElementById('i8').value != '')
	document.getElementById('i8').style.display = 'block';
	if (document.getElementById('i9').value != '')
	document.getElementById('i9').style.display = 'block';
	if (document.getElementById('i10').value != '')
	document.getElementById('i10').style.display = 'block';
	if (document.getElementById('i11').value != '')
	document.getElementById('i11').style.display = 'block';
	if (document.getElementById('i12').value != '')
	document.getElementById('i12').style.display = 'block';
	if (document.getElementById('i13').value != '')
	document.getElementById('i13').style.display = 'block';
	if (document.getElementById('i14').value != '')
	document.getElementById('i14').style.display = 'block';
	if (document.getElementById('i15').value != '')
	document.getElementById('i15').style.display = 'block';
	
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
	else if (i=='d')
	{
		document.aForm.f4.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='e')
	{
		document.aForm.f5.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='f')
	{
		document.aForm.f6.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='z')
	{
		document.aForm.f7.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='x')
	{
		document.aForm.f8.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='y')
	{
		document.aForm.f9.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='w')
	{
		document.aForm.f10.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='v')
	{
		document.aForm.f11.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='u')
	{
		document.aForm.f12.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='s')
	{
		document.aForm.f13.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='t')
	{
		document.aForm.f14.value=valFromPopup;
		mostrarimagen();
	}
	else if (i=='q')
	{
		document.aForm.f15.value=valFromPopup;
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