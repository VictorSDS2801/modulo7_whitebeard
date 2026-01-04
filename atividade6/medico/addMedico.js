const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const createid = require("./funcoes especificas/createidmedico")

function addMedico(medicos) {
    console.clear()
    let id = createid(medicos)

    let nome = promptText(prompt, "Digite o nome do novo médico: ")
    let especialidade = promptText(prompt, "Digite a especialidade do novo médico: ")

    medicos.push({id: id, nome: nome, especialidade: especialidade})
    console.log("Médico adicionado com sucesso!")
    return
}
module.exports = addMedico