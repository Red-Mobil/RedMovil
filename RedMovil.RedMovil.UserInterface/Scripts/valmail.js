function validarEmail(valor) {

    if (/^[0-9a-zA-Z]+(?:[._][0-9a-zA-Z]+)*@[0-9a-zA-Z]+(?:[._-][0-9a-zA-Z]+)*\.[0-9a-zA-Z]{2,4}$/.test(valor))
        return true;
    else
        return false;
}

function telefonoValido(telefono) {
    if (telefono.length >= 0) {
        return true;
    }

    return false;
}