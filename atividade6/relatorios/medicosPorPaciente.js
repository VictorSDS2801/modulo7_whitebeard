const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexistepaciente = require("../paciente/funcoes especificas/idexistepaciente")
const pause = require("../funcoes gerais/pause")
function medicosPorPaciente(consultas, medicos, pacientes) {

    let idPaciente
    while (true) {
        idPaciente = promptNumber(prompt, "Digite o id do paciente para ver quais medicos atenderam ele: ")
        if (idexistepaciente(pacientes, idPaciente)) break
        console.log("Paciente não encontrado!")
        pause()
    }

    const idsMedicos = consultas
        .filter(c => c.idPaciente === idPaciente)
        .map(c => c.idMedico)

    const idsUnicos = [...new Set(idsMedicos)]

    const resultado = medicos.filter(m => idsUnicos.includes(m.id))

    if (resultado.length === 0) {
        console.log("Nenhum médico encontrado.")
        pause()
        return
    }

    resultado.forEach(m => console.log(m))
}
module.exports = medicosPorPaciente