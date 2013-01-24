var bmail;
var btel;
var bmap;
var bface;
var btwit;
var btext;
var bpvb;
var bpvt;

function botmail(){
    
    bmail = '<center><input type="button" id="escribir" value="Enviar email" onclick="parent.location=\'mailto:'+document.getElementById('mail').value+ '\'">';    
}

function bottel(){
    
    btel = '<center></br><center><input type="button" id="llamar" value="Llamar" onclick="parent.location=\'tel:+56'+document.getElementById('tel').value+ '\'">'    
}

function botmap(){
    
    bmap = '<center></br><center><input type="button" id="ubicar" value="Ubicacion" onclick="mostrarMapa()"></center>'    
}

function botface(){
    
    bface = '<center><input type="button" id="facebook" value="Face" onclick="parent.location=\'http://www.facebook.com/'+document.getElementById('face').value+ '\'">'
}

function bottwit(){
    
    btwit = '<center></br><center><input id="twit" type="button" value="Twitter" onclick="parent.location=\'http://www.twitter.com/'+document.getElementById('twit').value+ '\'">'
    
}

function bottext(){
    
    if (max > 0) {
            t = "t".concat(id);
            b = "b".concat(id);
            tt = "tt".concat(id);
            bb = "bb".concat(id);
            btext = "<textarea id=" + t + " style='width:320px;' >Titulo"+(id+1)+"</textarea><textarea id=" + b + " style='width:320px;' ></textarea><br>";
            bpvb = "<button id=" + tt + " onclick='mostrar("+bb+")' >Titulo"+(id+1)+"</button><br>";
            bpvt = "<div id=" + bb + "></div>";
            asd = new nicEditor({ fullPanel: true }).panelInstance(b);
            id++;
            max -= 1;
			hidetext();
        }
}


