//Ocultamos el segundo text area temporalmente
document.getElementById('segundoTexto').style.display = 'none';
document.getElementById('btnCopiar').style.display = 'none';


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

    //Quitamos imagen inactiva y mostramos el resto de contenido
    document.getElementById('segundoTexto').style.display = 'block';
    document.getElementById('btnCopiar').style.display = 'block';
    document.getElementById('cuadroImagenInactiva').style.display = 'none';
    
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

//Quitamos imagen inactiva y mostramos el resto de contenido
    document.getElementById('segundoTexto').style.display = 'block';
    document.getElementById('btnCopiar').style.display = 'block';
    document.getElementById('cuadroImagenInactiva').style.display = 'none';

//Metodo join para coger el array cambiado y mostrarlo como cadena de texto
    let textoFinal = textoPreEncriptado.join("");
    document.getElementById('segundoTexto').value = textoFinal;


}

// *************************** BOTON COPIAR TEXTO ******************************************

function copiarTexto() {

    let textoCopiar = document.getElementById('segundoTexto').value;
    navigator.clipboard.writeText(textoCopiar);
    
}