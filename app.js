function encriptarTexto(){

    //Capturamos el texto
        let entradadeTexto = document.getElementById('primerTexto').value;
    
        console.log(entradadeTexto);
    //Convertimos cadena de texto en array
        let cadenaTexto = entradadeTexto.split("");
    
        console.log(cadenaTexto);
    
    //Metodo map para recorrer cada letra y cambiarla con múltiples llamadas al método replace
        let textoPreEncriptado = cadenaTexto.map (function (letra){
        return letra
            .replace('e','enter')    
            .replace('i','imes')
            .replace('a','ai')     
            .replace('o','ober')
            .replace('u','ufat');
        
        })
    
        console.log(textoPreEncriptado);
    
    //Metodo join para coger el array cambiado y mostrarlo como cadena de texto
        let textoFinal = textoPreEncriptado.join("");
        document.getElementById('segundoTexto').value = textoFinal;
    }


// ************************************* BOTON DESENCRIPTAR *********************************************************

function desencriptarTexto() {

    //Capturamos el texto
    let entradadeTexto = document.getElementById('primerTexto').value;
    
    console.log(entradadeTexto);
//Convertimos cadena de texto en array
    let cadenaTexto = entradadeTexto.split();

    console.log(cadenaTexto);

//Metodo map para recorrer cada letra y cambiarla con múltiples llamadas al método replace
    let textoPreEncriptado = cadenaTexto.map (function (letra){
    return letra
        .replace(/enter/g,'e')    
        .replace(/imes/g,'i')
        .replace(/ai/g,'a')     
        .replace(/ober/g,'o')
        .replace(/ufat/g,'u');
    
    })

    console.log(textoPreEncriptado);

//Metodo join para coger el array cambiado y mostrarlo como cadena de texto
    let textoFinal = textoPreEncriptado.join("");
    document.getElementById('segundoTexto').value = textoFinal;


}