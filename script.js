var mensaje = null;

function encripta(){
   
    mensaje= document.getElementsByName("txt_mensaje_ini")[0].value;
    var arr = mensaje.split('');
    var salida = "";
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
  
    console.log(salida);

    document.getElementsByName("txt_mensaje_fin")[0].value = salida;

}                

