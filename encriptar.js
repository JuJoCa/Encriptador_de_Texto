function mostrartxtEncriptado() {
    if(!validarTexto()) return;
    let cadena = encriptar();
    crearCuadroresultado();
    cuadroResultado.value = cadena;
}

function mostrartxtDesencriptado() {
    if(!validarTexto()) return;
    let cadena = desencriptar();
    crearCuadroresultado();
    cuadroResultado.value = cadena;
}

function crearCuadroresultado(){
    var input = document.createElement("input");
    var micapa = document.getElementById('idRectangulo');
    micapa.innerHTML= '<textarea id="cuadroResultado" class="textoResultado" value="" readonly></textarea><button type="button" id="btnCopiar" class="btnCopiar" onclick="copiarTexto()">Copiar</button>';
    let contenedorAlerta = document.getElementById("contenedorTextonoencontrado");
    let contenedorImagen = document.getElementById("contenedorImagen");
    if(contenedorAlerta){
        contenedorAlerta.remove();
    }
    if(contenedorImagen){
        contenedorImagen.remove();
    }
}

function encriptar(){
    var textoPrincipal = document.getElementById("textoMostrado").value;
    var textNuevo =  textoPrincipal.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a", "ai").replaceAll("o","ober").replaceAll("u","ufat");
    return textNuevo;
}

function desencriptar(){
    var textoPrincipal = document.getElementById("textoMostrado").value;
    var textNuevo =  textoPrincipal.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai", "a").replaceAll("ober","o").replaceAll("ufat","u");
    return textNuevo;
}

function copiarTexto(){
    let textoResultado = document.getElementById("cuadroResultado").value;
    navigator.clipboard.writeText(textoResultado);
}

function validarTexto(){
    var textoPrincipal = document.getElementById("textoMostrado").value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = "";
    for(let letras of textoPrincipal){
        if(!letrasValidas.includes(letras)){
            mensajeError = "Digite solo minusculas sin acentos";
            alert(mensajeError);
        }
    }
    if(mensajeError.length === 0){
        return true;
    }
    return false;
}