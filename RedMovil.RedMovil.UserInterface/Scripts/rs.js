function mostrarRS(){
            
<<<<<<< HEAD
            if (document.getElementById('face').value != "" && document.getElementById('twit').value == ""){
                        
            $("#facebook").html(
            '<center><input type="button" value="Facebook" onclick="parent.location=\'http://www.facebook.com/'
=======
            if (document.getElementById('face').value != ""){
                        
            $("#facebook").html(
            '<center><input type="button" id="facebook" value="Face" onclick="parent.location=\'http://www.facebook.com/'
>>>>>>> 0e12f47a4d0cc2d723aceb6dd3eda8feffd523a4
            + document.getElementById('face').value
            + '\'">');
            }
            
<<<<<<< HEAD
            if (document.getElementById('face').value == "" && document.getElementById('twit').value != ""){
                        
            $("#twitter").html(
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
=======
            if (document.getElementById('twit').value != ""){
                        
            $("#twitter").html(
            '<center></br><center><input id="twit" type="button" value="Twitter" onclick="parent.location=\'http://www.twitter.com/'
            + document.getElementById('twit').value
            + '\'">');
            }
                       
>>>>>>> 0e12f47a4d0cc2d723aceb6dd3eda8feffd523a4
}