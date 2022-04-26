import randomPick from './Banco.js'
import { verificarRespuesta } from './Banco.js'
import { guardarPuntaje } from './Game.js'

const mostrarPreguntas = () => {
    let ronda = aumentarRonda()
    let array = randomPick(ronda)
    let etiquetaPregunta = document.getElementById("pregunta")
    document.getElementById("indicePregunta").value = array[1]
    etiquetaPregunta.innerHTML = array[0]
}

const aumentarRonda = () => {
    let etiquetaRonda = document.getElementById("ronda")
    let rondaString = etiquetaRonda.innerHTML
    let ronda = parseInt(rondaString, 10)
    etiquetaRonda.innerHTML = ronda + 1
    return ronda + 1
}

window.onload = mostrarPreguntas()

const continuarSiguientePregunta = () => {
    let ronda = document.getElementById("ronda").innerHTML
    let indice = document.getElementById("indicePregunta").value
    console.log(verificarRadioButton(ronda, indice)+"<----------------");
    if (verificarRadioButton(ronda, indice)) {
        if(ronda === "5"){
            salir()
        }else{
            guardarPuntaje(false)
            mostrarPreguntas()
            alert("Felicidades, siguiente pregunta")
        }
    } else if(!verificarRadioButton(ronda, indice) && verificarRadioButton(ronda, indice) !== 0){
        guardarPuntaje(true)
        alert("Has perdido")
        salir()
    }
    if (verificarRadioButton(ronda, indice) === 0) {
        alert("Responda la pregunta por favor")
    }
}

const verificarRadioButton = (ronda, indice) => {
    let radios = document.getElementsByName("respuesta")
    for (let i=0; i<radios.length;i++) {
        if(radios[i].checked){
            let respuesta = parseInt(radios[i].value)
            return verificarRespuesta(ronda, indice, respuesta)
        }
    }
    return 0
}

const salir = () => {
    let enlaceFinal = document.getElementById("responder")
    enlaceFinal.href = "./final.html"
    enlaceFinal.click()
}

let botonContinuar = document.getElementById("btnResponder")
botonContinuar.addEventListener("click", continuarSiguientePregunta, true)

let botonSalirVoluntario = document.getElementById("salir")
botonSalirVoluntario.addEventListener("click", salir, true)