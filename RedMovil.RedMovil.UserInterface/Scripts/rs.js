function mostrarRS(){
            
            if (document.getElementById('face').value != ""){
                        
            $("#facebook").html(
            '<center><input type="button" id="facebook" value="Facebook" onclick="parent.location=\'http://www.facebook.com/'
            + document.getElementById('face').value
            + '\'">');
            }
            
            if (document.getElementById('twit').value != ""){
                        
            $("#twitter").html(
            '<center></br><center><input id="twitter" type="button" value="Twitter" onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '\'">');
            }
                       
}