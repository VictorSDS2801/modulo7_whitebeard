const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexiste = require("./funcoes especificas/idexistepaciente")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const pause = require("../funcoes gerais/pause")

function delPaciente(pacientes) {
    console.clear()

    let id
    while (true) {
        id = promptNumber(prompt, "Digite o id do paciente que você deseja deletar: ")
        if (idexiste(pacientes, id)) break
        console.log("Paciente não encontrado!")
        pause()
    }

    const posicao = buscarposicao(pacientes, id)
    console.log("Paciente selecionado:")
    console.log(pacientes[posicao])

    const confirmar = prompt("Deseja realmente deletar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Operação cancelada.")
        return
    }

    medicos.splice(posicao, 1)
    console.log("Paciente removido com sucesso!")
}
module.exports = delPaciente