function cambiarArchivoCss(archivo) {
    
    document.getElementById('cssArchivo').href=archivo;
    
    var algo = archivo.split("/");
    nombrecss = algo[2];
    
}