
const verificarQueExiste = (jugadores, nombre) => {
    let arrayJugadores = jugadores.jugadores
    for (let i = 0; i < arrayJugadores.length; i++) {
        if (arrayJugadores[i].nombre == nombre) {
            return true
        }
    }
    return false
}

const guardarJugador = (nombre) => {
    let jsonLocalStorage = JSON.parse(localStorage.getItem("Jugadores"))
    if (isVacio(jsonLocalStorage)) {
        let jugadores = {}
        let arrayJugadores = []
        let jugador = { "nombre": nombre, "puntaje": 0 }
        localStorage.setItem("JugadorActual", JSON.stringify(jugador))
        jugadores.jugadores = arrayJugadores
        jugadores.jugadores.push({ "nombre": nombre, "puntaje": 0 })
        localStorage.setItem("Jugadores", JSON.stringify(jugadores))
    } else {
        if (verificarQueExiste(jsonLocalStorage, nombre)) {
            return true
        }
        let jugador = { "nombre": nombre, "puntaje": 0 }
        localStorage.setItem("JugadorActual", JSON.stringify(jugador))
        jsonLocalStorage.jugadores.push({ "nombre": nombre, "puntaje": 0 })
        localStorage.setItem("Jugadores", JSON.stringify(jsonLocalStorage))
        return false
    }
}


const guardarPuntaje = (isPerdedor) => {
    let jsonLocalStorage = JSON.parse(localStorage.getItem("Jugadores"))
    let jsonJugadorActual = JSON.parse(localStorage.getItem("JugadorActual"))
    let nombre = jsonJugadorActual.nombre
    let arregloJugadores = jsonLocalStorage.jugadores
    let arregloActualizado = arregloJugadores.map(jugador => {
        if (jugador.nombre === nombre) {
            if (isPerdedor) {
                jugador.puntaje = 0
            }else{
                jugador.puntaje += 100
            }
        }
        return jugador
    })
    jsonLocalStorage.jugadores = arregloActualizado
    let nuevoJSON = JSON.stringify(jsonLocalStorage)
    localStorage.setItem("Jugadores", nuevoJSON)
}

const isVacio = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return false
    }

    return true
}

export default guardarJugador
export { guardarPuntaje }