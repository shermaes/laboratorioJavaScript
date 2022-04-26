import BancoPreguntas from './BancoPreguntas.json' assert {type: "json"}

const randomPick = (ronda) => {
    let preguntaRandom = Math.floor(Math.random() * 5) + 1
    let index = preguntaRandom.toString()
    let preguntaParaMostrar = ""
    switch (ronda) {
        case 1:
            preguntaParaMostrar = BancoPreguntas.ronda1[index][0]
            break

        case 2:
            preguntaParaMostrar = BancoPreguntas.ronda2[index][0]
            break

        case 3:
            preguntaParaMostrar = BancoPreguntas.ronda3[index][0]
            break

        case 4:
            preguntaParaMostrar = BancoPreguntas.ronda4[index][0]
            break

        case 5:
            preguntaParaMostrar = BancoPreguntas.ronda5[index][0]
            break;
    }
    return [preguntaParaMostrar, index]
}

const verificarRespuesta = (ronda, indice, respuesta) => {
    let respuestaCorrecta = BancoPreguntas[`ronda${ronda}`][`${indice}`][1]
    return respuesta == respuestaCorrecta
}

export default randomPick
export {verificarRespuesta}