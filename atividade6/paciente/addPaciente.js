const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const createid = require("./funcoes especificas/createidpaciente")

function addPaciente(pacientes) {
    console.clear()
    let id = createid(pacientes)

    let nome = promptText(prompt, "Digite o nome do paciente: ")
    let dataNascimento = promptText(prompt, "Digite a data de nascimento do paciente: ")

    pacientes.push({id: id, nome: nome, dataNascimento: dataNascimento})
    console.log("Paciente adicionado com sucesso!")
    return
}
module.exports = addPaciente