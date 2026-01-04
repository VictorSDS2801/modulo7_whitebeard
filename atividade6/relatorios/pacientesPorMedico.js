const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexistemedicos = require("../medico/funcoes especificas/idexistemedicos")
const pause = require("../funcoes gerais/pause")


function pacientesPorMedico(consultas, pacientes, medicos) {

    let idMedico
    while (true) {
        idMedico = promptNumber(prompt, "Digite o id do médico que você deseja ver os pacientes: ")
        if (idexistemedicos(medicos, idMedico)) break
        console.log("Médico não encontrado!")
        pause()
    }

    const idsPacientes = consultas
        .filter(c => c.idMedico === idMedico)
        .map(c => c.idPaciente)

    const idsUnicos = [...new Set(idsPacientes)]

    const resultado = pacientes.filter(p => idsUnicos.includes(p.id))

    if (resultado.length === 0) {
        console.log("Nenhum paciente encontrado.")
        pause()
        return
    }

    resultado.forEach(p => console.log(p))
}
module.exports = pacientesPorMedico