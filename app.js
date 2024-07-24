let numeroSecreto = 0;
let intentos = 0;
let listaNumerosRandom = [];
let numeroMaximo = 10;

//numero();
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',  `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor');
        }
        else{
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista:
    
    console.log(numeroGenerado);
    console.log(listaNumerosRandom);
    if (listaNumerosRandom.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se salieron todos los números posibles')
    }
    //si ya salieron todos los numeros
    else {
       if (listaNumerosRandom.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        //si no esta:
        else {
            listaNumerosRandom.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar numero aleatorio
    //iniciar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
/*function numero(numero1){
    numero1 = parseInt(prompt("Indica un número:"));
    for (var i=0; i < 11; i++) {
        console.log(`${numero1} x ${i} = ${numero1*i}`);
    }
    return;
}*/
condicionesIniciales();