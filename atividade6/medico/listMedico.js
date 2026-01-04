const pause = require("../funcoes gerais/pause")
function listMedico(medicos, prompt) {
    for (let i = 0; i < medicos.length; i++) {
        console.log(`id: ${medicos[i].id}, 
        nome: ${medicos[i].nome}, 
        especialidade: ${medicos[i].especialidade}.`)
    }
    if (medicos.length === 0) {
        console.log("Nenhum médico encontrado!")
        pause()
        return
    }

    pause()
}
module.exports = listMedico