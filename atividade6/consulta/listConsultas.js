const pause = require("../funcoes gerais/pause")
function listConsultas(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        console.log(`id: ${consultas[i].id}, 
        data: ${consultas[i].data}, 
        id do médico: ${consultas[i].idMedico}, 
        id do paciente: ${consultas[i].idPaciente}, 
        descrição: ${consultas[i].descricao}.`)
    }
    if (consultas.length === 0) {
        console.log("Nenhuma consulta encontrada.")
        pause()
        return
    }
    pause()
}
module.exports = listConsultas