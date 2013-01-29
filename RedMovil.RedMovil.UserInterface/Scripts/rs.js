function mostrarRS(){
            
            if (document.getElementById('face').value != ""){
                        
            $("#facebook").html(
            '<center><input type="button" id="faceb" class="contacto" value="Facebook" onclick="parent.location=\'http://www.facebook.com/'
			//'<center><input type="button" id="faceb" class="contacto"value="" onclick="parent.location=\'http://www.facebook.com/'
            + document.getElementById('face').value
            + '\'">');
            }
            
            if (document.getElementById('twit').value != ""){
                        
            $("#twitter").html(
            '<center></br><center><input id="twitt" class="contacto"  type="button" value="Twitter"  onclick="parent.location=\'http://www.twitter.com/'
			// '<center></br><center><input id="twitt" class="contacto" value="" type="button"  onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '\'">');
            }
                       
}