const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const idexiste = require("./funcoes especificas/idexisteconsultas")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const pause = require("../funcoes gerais/pause")

function delConsulta(consultas) {
    console.clear()

    let id
    while (true) {
        id = promptNumber(prompt, "Digite o id da consulta que você deseja deletar: ")
        if (idexiste(consultas, id)) break
        console.log("Consulta não encontrada!")
        pause()
    }

    const posicao = buscarposicao(consultas, id)
    console.log("Consulta selecionada:")
    console.log(consultas[posicao])

    const confirmar = prompt("Deseja realmente deletar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Operação cancelada.")
        pause()
        return
    }

    consultas.splice(posicao, 1)
    console.log("Consulta removida com sucesso!")
}
module.exports = delConsulta