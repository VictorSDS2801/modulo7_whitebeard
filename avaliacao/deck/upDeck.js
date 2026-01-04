const promptText = require("../funcoes gerais/promptText")
const promptNumber = require("../funcoes gerais/promptNumber")
const buscarPosicaoDeck = require("./especific functions/buscarPosicaoDeck")
const idExisteDeck = require("./especific functions/idExisteDeck")
const pause = require("../funcoes gerais/pause")

function upDeck(decks) {
    console.clear()

    let id
    while (true) {
        id = promptNumber("Digite o id do baralho que você deseja atualizar: ")
        if (idExisteDeck(decks, id)) break
        console.log("Baralho não encontrado!")
        pause()
    }
    const position = buscarPosicaoDeck(decks, id)
    const deck = decks[position]

    console.log("Baralho atual:")
    console.log(deck)
    console.log("\n(Pressione ENTER para manter o valor atual)\n")

    let title = promptText(`Novo título (${deck.title}): `) || deck.title

    const confirmar = promptText("Confirmar atualização? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Atualização cancelada.")
        return
    }

    decks[position] = { ...deck, title: title }
    console.log("Baralho atualizado com sucesso!")
}
module.exports = upDeck