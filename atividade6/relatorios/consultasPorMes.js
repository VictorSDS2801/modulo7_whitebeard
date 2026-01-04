const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

function consultasPorMes(consultas) {

    let mes = promptNumber(prompt, "Digite o mês (1 a 12): ")
    let ano = promptNumber(prompt, "Digite o ano (ex: 2026): ")

    mes = String(mes).padStart(2, "0")

    const chave = `${mes}/${ano}`

    const resultado = consultas.filter(c => c.data.includes(chave))

    if (resultado.length === 0) {
        console.log("Nenhuma consulta encontrada para este mês.")
        pause()
        return
    }

    resultado.forEach(c => console.log(c))
    pause()
}

module.exports = consultasPorMes
