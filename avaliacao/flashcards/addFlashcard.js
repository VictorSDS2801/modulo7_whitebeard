const promptText = require("../funcoes gerais/promptText")
const promptNumber = require("../funcoes gerais/promptNumber")
const createIdFlashcard = require("./especifc functions/createIdFlashcard")
const decks = require("../dados/arrayDecks")

const idExisteDeck = require("../deck/especific functions/idExisteDeck")
function addFlashcard(flashcards) {
    console.clear()
    let id = createIdFlashcard(flashcards)

    let question = promptText("Digite a pergunda do flashcard: ")
    let response = promptText("Digigte a resposta do flashcard: ")

    let idDeck
    while (true) {
        idDeck = promptNumber("Digite o id do baralho do flashcard: ")
        if (idExisteDeck(decks, idDeck)) break
        console.log("Baralho não encontrado.")
        pause()
    }

    flashcards.push({id: id, question: question, response: response, idDeck: idDeck})
    console.log("Flashcard adicionado com sucesso!")
    return
}
module.exports = addFlashcard