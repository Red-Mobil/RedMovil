var nombrecss;

function cambiarArchivoCss(archivo) {
    mostrarbotones();  
    document.getElementById('cssArchivo').href=archivo;
    
    var algo = archivo.split("/");
    nombrecss = algo[2];   
}