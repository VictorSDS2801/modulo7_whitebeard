const promptText = require("../funcoes gerais/promptText")
const promptNumber = require("../funcoes gerais/promptNumber")
const buscarPosicaoFlashcard = require("./especifc functions/buscarPosicaoFlashcard")
const idExisteFlashcard = require("./especifc functions/idExisteFlashcard")
const idExisteDeck = require("../deck/especific functions/idExisteDeck")
const pause = require("../funcoes gerais/pause")

const decks = require("../dados/arrayDecks")
function upFlashcard(flashcards) {
    console.clear()

    let id
    while (true) {
        id = promptNumber("Digite o id do flashcard que você deseja atualizar: ")
        if (idExisteFlashcard(flashcards, id)) break
        console.log("Flashcard não encontrado.")
        pause()
    }
    const position = buscarPosicaoFlashcard(flashcards, id)
    const flashcard = flashcard[position]

    console.log("Flashcard atual:")
    console.log(flashcard)
    console.log("\n(Pressione ENTER para manter o valor atual)\n")

    let question = promptText(`Nova pergunta (${flashcard.question}): `)
    let response = promptText(`Nova resposta (${flashcard.response}): `)

    let idDeck
    while (true) {
        idDeck = promptNumber(`Novo id do deck (${flashcard.idDeck}): `)
        if (idExisteDeck(decks, id)) break
        console.log("Deck não encontrado.")
        pause()
    }

    const confirmar = promptText("Deseja confirmar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Atualização cancelada.")
        return
    }

    flashcards[position] = {...flashcard, question: question, response: response, idDeck: idDeck}
    console.log("Flashcard atualizado com sucesso!")
}
module.exports = upFlashcard