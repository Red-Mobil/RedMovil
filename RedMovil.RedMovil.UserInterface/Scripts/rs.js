function mostrarRS(){
            
            if (document.getElementById('face').value != ""){
                        
            $("#facebook").html(
            '<center><input type="button" id="faceb" class="tt" value="Facebook"  onclick=window.open("http://www.facebook.com/'
			//'<center><input type="button" id="faceb" class="contacto"value="" onclick="parent.location=\'http://www.facebook.com/'
            + document.getElementById('face').value
            + '","_blank")>');
            }
            
            if (document.getElementById('twit').value != ""){
                        
            $("#twitter").html(
            '<center></br><center><input id="twitt" class="tt"  type="button" value="Twitter" target="_blank" onclick=window.open("http://www.twitter.com/'
			// '<center></br><center><input id="twitt" class="contacto" value="" type="button"  onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '","_blank")>');
            }
                       
}