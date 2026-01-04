const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const idexiste = require("./funcoes especificas/idexistepaciente")
const pause = require("../funcoes gerais/pause")

function atuaPaciente(pacientes) {
    console.clear()

    let id
    while (true) {
        id = promptText(prompt, "Digite o id do paciente que você deseja atualizar: ")
        if (idexiste(pacientes, id)) break
        console.log("Paciente não encontrado!")
        pause()
    }
    const posicao = buscarposicao(pacientes, id)
    const paciente = pacientes[posicao]

    console.log("Paciente atual:")
    console.log(paciente)
    console.log("\n(Pressione ENTER para manter o valor)\n")

    let nome = prompt(`Novo nome (${paciente.nome}): `)
    let dataNascimento = prompt(`Nova data de nascimento (${paciente.dataNascimento}): `)

    const confirmar = prompt("Confirmar atualização? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Atualização cancelada!")
        return 
    }

    pacientes[posicao] = {...paciente, nome, dataNascimento}

    console.log("Paciente atualizado com sucesso!")
}
module.exports = atuaPaciente