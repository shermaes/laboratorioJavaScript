let jsonJugadores = JSON.parse(localStorage.getItem("Jugadores"))
let jugadores = jsonJugadores.jugadores
console.log(jugadores);
let tablaJugadores = document.getElementById("jugadores")
for (let i = 0; i < jugadores.length; i++) {
    let jugador = jugadores[i]
    let nombre = jugador.nombre
    let puntaje = jugador.puntaje
    let fila = document.createElement("tr")
    fila.innerHTML = `<td>${nombre}</td><td>${puntaje}</td>`
    tablaJugadores.appendChild(fila)
    
}

const volverAInicio = () => {
    let enlaceVovler = document.getElementById("enlaceVolver")
    enlaceVovler.href = "./index.html"
    enlaceVovler.click()
}

let btnVolver = document.getElementById("btnVolver")
btnVolver.addEventListener("click", volverAInicio)