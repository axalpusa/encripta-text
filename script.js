var mensaje = null;
var salida = "";

function encripta(){
  
    salida = "";
   mensaje = document.getElementById('txt_mensaje_ini').innerText;
  
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

   // limpiar();
    document.getElementById("contenedor_sinmensaje").style.display='none';
    document.getElementById("contenedor_resultado").style.display='inline';
}                

function desencripta(){
    //mensaje="";
    mensaje = document.getElementById('txt_mensaje_ini').innerText;
  
    for (let index = 0; index < mensaje.length; index++) {
        mensaje = mensaje.replace('ai', 'a');
        mensaje = mensaje.replace('ober', 'o');
        mensaje = mensaje.replace('ufat', 'u');
        mensaje = mensaje.replace('imes', 'i');
        mensaje = mensaje.replace('enter', 'e');
    };
    document.getElementsByName("txt_mensaje_fin")[0].value = mensaje;
    //limpiar();
   
   
}

function copiar(){
    
    mensaje = document.getElementsByName("txt_mensaje_fin")[0].value;
    navigator.clipboard.writeText(mensaje);
   
    
}
function limpiar(){
    //document.getElementById('txt_mensaje_ini').innerText="";
   // document.getElementsByName("txt_mensaje_fin")[0].value="";
   mostrar_ingresar_text()
}
function ocultar_ingresar_text(){
    document.getElementById('txt_mensaje_ini').innerHTML=" ";
   
    
    }
function mostrar_ingresar_text(){
    document.getElementById('txt_mensaje_ini').innerHTML="Ingrese el texto aqui...";
    document.getElementById("contenedor_sinmensaje").style.display='none';
    document.getElementById("txt_resultado").style.display='inline';

    }