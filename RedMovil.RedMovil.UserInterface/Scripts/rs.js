function mostrarRS(){
            
            if (document.getElementById('face').value != "" && document.getElementById('twit').value == ""){
                        
            $("#preview_vista_rs").html(
            '<center><input type="button" value="Facebook" onclick="parent.location=\'http://www.facebook.com/'
            + document.getElementById('face').value
            + '\'">');
            }
            
            if (document.getElementById('face').value == "" && document.getElementById('twit').value != ""){
                        
            $("#preview_vista_rs").html(
            '<center></br><center><input type="button" value="Twitter" onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '\'">');
            }
            
            if (document.getElementById('face').value != "" && document.getElementById('twit').value != ""){
                        
            $("#preview_vista_rs").html(
            '<center><input type="button" value="Facebook" onclick="parent.location=\'http://www.facebook.com/'
            + document.getElementById('face').value
            + '\'"><center></br><center><input type="button" value="Twitter" onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '\'">');
            }
}