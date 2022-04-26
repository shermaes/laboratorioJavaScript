import guardarJugador from "./Game.js"
const empezarJuego = () => {
    let nombreJugador = document.getElementById("nombre").value
    if(guardarJugador(nombreJugador)){
        alert("Ese nombre ya existe, por favor ingresar otro")
    }else{
        let enlace = document.getElementById("empezar")
        enlace.href = "./preguntas.html"
    }
}


let botonEmpezar = document.getElementById("empezar")
botonEmpezar.addEventListener("click", empezarJuego, true)


