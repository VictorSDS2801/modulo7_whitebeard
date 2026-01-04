const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexiste = require("./funcoes especificas/idexistemedicos")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const pause = require("../funcoes gerais/pause")

function delMedico(medicos) {
    console.clear()

    let id
    while (true) {
        id = promptNumber(prompt, "Digite o id do médico que você deseja deletar: ")
        if (idexiste(medicos, id)) break
        console.log("Médico não encontrado.")
        pause()
    }

    const posicao = buscarposicao(medicos, id)
    console.log("Médico selecionado:")
    console.log(medicos[posicao])

    const confirmar = prompt("Deseja realmente deletar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Operação cancelada.")
        return
    }

    medicos.splice(posicao, 1)
    console.log("Médico removido com sucesso!")
}
module.exports = delMedico