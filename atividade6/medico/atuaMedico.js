const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const idExiste = require("./funcoes especificas/idexistemedicos")
const pause = require("../funcoes gerais/pause")

function atuaMedico(medicos) {
    console.clear()

    let id
    while (true) {
        id = promptText(prompt, "Digite o id do médico que você deseja atualizar: ")
        if (idExiste(medicos, id)) break
        console.log("Médico não encontrado!")
        pause()
    }
    const posicao = buscarposicao(medicos, id)
    const medico = medicos[posicao]

    console.log("Médico atual:")
    console.log(medico)
    console.log("\n(Pressione ENTER para manter o valor atual)\n")

    let nome = prompt(`Novo nome (${medico.nome}): `) || medico.nome
    let especialidade = prompt(`Nova especialidade: (${medico.especialidade}) `) || medico.especialidade

    const confirmar = prompt("Confirmar atualização? (s/n): ").toLowerCase()
    if (confirmar !== 's') {
        console.log("Operação cancelada!")
        return
    }

    medicos[posicao] = {...medico, nome, especialidade}

    console.log("Médico atualizado com sucesso!")
}
module.exports = atuaMedico
