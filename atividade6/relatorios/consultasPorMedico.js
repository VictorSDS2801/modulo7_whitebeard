const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexistemedicos = require("../medico/funcoes especificas/idexistemedicos")
const pause = require("../funcoes gerais/pause")


function consultasPorMedico(consultas, medicos) {

    let idMedico
    while (true) {
        idMedico = promptNumber(prompt, "Digite o id do médico que você deseja ver as consultas: ")
        if (idexistemedicos(medicos, idMedico)) break
        console.log("Médico não encontrado!")
        pause()
    }

    const resultado = consultas.filter(c => c.idMedico === idMedico)

    if (resultado.length === 0) {
        console.log("Nenhuma consulta encontrada para este médico.")
        pause()
        return
    }

    resultado.forEach(c => console.log(c))
}
module.exports = consultasPorMedico