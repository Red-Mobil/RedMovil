var lista;
var i = 0;

function agregar() {

    i = i + 1;
    lista = document.getElementById("centro");
    lista.insertAdjacentHTML("beforeend", '<input type="text" style="WIDTH: 320px;" id="galeria' + i + '" name="galeria' + i + '" placeholder="Ingrese nombre del Boton de Galeria"/></br>');
    lista.insertAdjacentHTML("beforeend", '<input type="text" style="WIDTH: 120px;" id="im' + i + '1" name="im' + i + '1" /></br>');
    lista.insertAdjacentHTML("beforeend", '<input type="text" style="WIDTH: 120px;" id="im' + i + '2" name="im' + i + '2" /></br>');
    lista.insertAdjacentHTML("beforeend", '<input type="text" style="WIDTH: 120px;" id="im' + i + '3" name="im' + i + '3" /></br>');
    lista.insertAdjacentHTML("beforeend", '<input type="submit" onClick="eliminar(' + i + ')" id="b' + i + '" name="b' + i + '" value="Submit" /></br></br>');
}

function eliminar(id) {
    lista = document.getElementById("final");
    obj = "b" + id;
    elemento = document.getElementById(obj);
    padre = elemento.parentNode;
    padre.removeChild(elemento);
    obj = "galeria" + id;
    elemento = document.getElementById(obj);
    lista.insertAdjacentHTML("beforeend", elemento.value);
    padre = elemento.parentNode;
    padre.removeChild(elemento);
    obj = "im" + id + '1';
    elemento = document.getElementById(obj);
    lista.insertAdjacentHTML("beforeend", '</br><img src="./images/' + elemento.value + '" style="WIDTH: 120px;"></br>');
    padre = elemento.parentNode;
    padre.removeChild(elemento);
    obj = "im" + id + '2';
    elemento = document.getElementById(obj);
    lista.insertAdjacentHTML("beforeend", '<img src="./images/' + elemento.value + '" style="WIDTH: 120px;"></br>');
    padre = elemento.parentNode;
    padre.removeChild(elemento);
    obj = "im" + id + '3';
    elemento = document.getElementById(obj);
    lista.insertAdjacentHTML("beforeend", '<img src="./images/' + elemento.value + '" style="WIDTH: 120px;"></br>');
    padre = elemento.parentNode;
    padre.removeChild(elemento);
}