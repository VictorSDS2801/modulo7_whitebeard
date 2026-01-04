const promptNumber = require("../funcoes gerais/promptNumber")
const promptText = require("../funcoes gerais/promptText")
const idExisteDeck = require("./especific functions/idExisteDeck")
const buscarPosicaoDeck = require("./especific functions/buscarPosicaoDeck")
const pause = require("../funcoes gerais/pause")

function remDeck(decks) {
    console.clear()

    let id
    while (true) {
        id = promptNumber("Digite o id do baralho que você deseja remover: ")
        if (idExisteDeck(decks, id)) break
        console.log("Baralho não encontrado!")
        pause()
    }

    const position = buscarPosicaoDeck(decks, id)
    console.log("Baralho selecionado:")
    console.log(decks[position])

    const confirmar = promptText("Deseja mesmo deletar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Deleção cancelada.")
        return
    }

    decks.splice(position, 1)
    console.log("Baralho deletado com sucesso!")
}
module.exports = remDeck