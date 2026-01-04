const pause = require("../funcoes gerais/pause")
function listPacientes(pacientes) {
    for (let i = 0; i < pacientes.length; i++) {
        console.log(`id: ${pacientes[i].id}, 
        nome: ${pacientes[i].nome}, 
        data de nascimento: ${pacientes[i].dataNascimento}.`)
    }
    if (pacientes.length === 0) {
        console.log("Nenhum paciente encontrad!")
        pause()
        return
    }
    pause()
}
module.exports = listPacientes