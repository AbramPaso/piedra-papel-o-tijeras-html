document.getElementById("name").innerHTML = window.localStorage.getItem(1)

function Aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Vusuario=0
let Vmaquina=0
let partidas=localStorage.getItem('2')

function elegir(Usuario) {
    const numero = Aleatorio(0, 2);
    const opciones = ['piedra', 'papel', 'tijera'];
    const Maquina = opciones[numero];

    if (Usuario === Maquina) {
        //animacion de empate
        document.getElementById("rol").innerHTML="EMPATE"
        setTimeout(function() {
        document.getElementById("rol").innerHTML=""
        }, 3000);

        console.log(Maquina)
        document.getElementById("escorpio").src = "files/gif/scorpion-damage.gif";;
        document.getElementById("subzero").src = "files/gif/subzero-damage.gif";
            setTimeout(function() {
                document.getElementById("subzero").src = "files/gif/subzero.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);
            setTimeout(function() {
                document.getElementById("escorpio").src = "files/gif/escorpio.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);
    } 
      
      else if (
        (Usuario === 'piedra' && Maquina === 'papel') ||
        (Usuario === 'papel' && Maquina === 'tijera') ||
        (Usuario === 'tijera' && Maquina === 'piedra')
    ) {
        //animacion de perder
        document.getElementById("rol").innerHTML="PERDISTE"
        setTimeout(function() {
        document.getElementById("rol").innerHTML=""
        }, 3000);
  
        document.getElementById("subzero").src = "files/gif/subzero-punch.gif";
        document.getElementById("escorpio").src = "files/gif/scorpion-damage.gif";
            setTimeout(function() {
                document.getElementById("subzero").src = "files/gif/subzero.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);
            setTimeout(function() {
                document.getElementById("escorpio").src = "files/gif/escorpio.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);

        console.log(Maquina)
        Vmaquina=Vmaquina+1
    } else {
        //animacion de ganarç
        document.getElementById("rol").innerHTML="GANASTE"
        setTimeout(function() {
        document.getElementById("rol").innerHTML=""
        }, 3000);
        console.log(Maquina)
        Vusuario=Vusuario+1


        document.getElementById("escorpio").src = "files/gif/scorpion-punch.gif";
        document.getElementById("subzero").src = "files/gif/subzero-damage.gif";
            setTimeout(function() {
                document.getElementById("subzero").src = "files/gif/subzero.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);
            setTimeout(function() {
                document.getElementById("escorpio").src = "files/gif/escorpio.gif"; // Cambiar a la imagen original después de 3 segundos
            }, 1000);

    }    
    
    ////condiciones para ver la seleccion del usuario
    if (Usuario=="piedra"){
        ;
        document.getElementById("upiedra").src = "files/cosas/piedra.png" 
        setTimeout(function() {
        document.getElementById("upiedra").src = ""
        }, 1000);
    }
    if (Usuario=="papel"){
        document.getElementById("upapel").src = "files/cosas/papel.png";
        setTimeout(function() {
            document.getElementById("upapel").src = "";
        }, 1000);
    }
    if (Usuario=="tijera"){
        document.getElementById("utijera").src = "files/cosas/tijera.png";
        setTimeout(function() {
        document.getElementById("utijera").src = "";
        }, 1000);
    }

    ////condiciones para ver la seleccion de la maquina
    if (Maquina=="piedra"){
        document.getElementById("vpiedra").src = "files/cosas/piedra.png";
        setTimeout(function() {
        document.getElementById("vpiedra").src = "";
        }, 1000);
    }
    if (Maquina=="papel"){
        document.getElementById("vpapel").src = "files/cosas/papel.png";
        setTimeout(function() {
        document.getElementById("vpapel").src = "";
        }, 1000);
    }
    if (Maquina=="tijera"){
        document.getElementById("vtijera").src = "files/cosas/tijera.png";
        setTimeout(function() {
        document.getElementById("vtijera").src = "";
        }, 1000);
    }

    console.log('VICTORIAS DEL USUARIO '+ Vusuario)
    console.log('VICTORIAS DE LA MAQUINA '+ Vmaquina)
    console.log(partidas)

    document.getElementById("you").innerHTML=Vusuario
    document.getElementById("pc").innerHTML=Vmaquina

    if (Vusuario==partidas){
        setTimeout(function() {
            localStorage.setItem('re', 'u');
            window.location.href="victoria.html"
            }, 1000);

     } else if(Vmaquina==partidas){
        setTimeout(function() {
            window.location.href="victoria.html"
            localStorage.setItem('re', 'm');
            }, 1000);
     /*  window.location.href="victoria.html"
       localStorage.setItem('re', 'm');*/

     } 
 
}
function back() {
    window.location.href="index.html"
}