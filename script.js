var mensaje = null;
var salida = "";

function encripta(){
    mensaje = document.getElementsByName("txt_mensaje_ini")[0].value;
    var arr = mensaje.split('');
    arr.forEach(element => {
        switch (element) {
            case "e":
                element="enter";
                break;
            case "i":
                element="imes";
                break;
            case "a":
                element="ai";
                break;
            case "o":
                element="ober";
                break;
            case "u":
                element="ufat";
                break;
            default:
                break;
        }
       salida = salida + element;
    });
    document.getElementsByName("txt_mensaje_fin")[0].value = salida;
}                

function desencripta(){
    mensaje = document.getElementsByName("txt_mensaje_ini")[0].value;
    for (let index = 0; index < mensaje.length; index++) {
        mensaje = mensaje.replace('ai', 'a');
        mensaje = mensaje.replace('ober', 'o');
        mensaje = mensaje.replace('ufat', 'u');
        mensaje = mensaje.replace('imes', 'i');
        mensaje = mensaje.replace('enter', 'e');
    };
    document.getElementsByName("txt_mensaje_fin")[0].value = mensaje;
}

function copiar(){
    
    mensaje = document.getElementsByName("txt_mensaje_fin")[0].value;
    navigator.clipboard.writeText(mensaje);
   

}

