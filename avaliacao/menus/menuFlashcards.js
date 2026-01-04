const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

const flashcards = require("../dados/arrayFlashcards")

const addFlashcard = require("../flashcards/addFlashcard")
const listAllFlashcards = require("../flashcards/listAllFlashcards")
const listDeckFlashcards = require("../flashcards/listDeckFlashcards")
const upFlashcard = require("../flashcards/upFlashcard")
const remFlashcard = require("../flashcards/remFlashcard")
const searchFlashcardByQuestion = require("../flashcards/searchFlashcardByQuestion")
function menuFlashcards() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao gerenciamento de flashcards.
        1 - Adicionar flashcard.
        2 - Listar todos os flashcards.
        3 - Listar flashcards de um certo baralho.
        4 - Atualizar flashcard.
        5 - Deletar flashcard.
        6 - Buscar flashcard por pergunta.
        0 - Voltar ao menu principal.`)
        let decisao = promptNumber("Digite a sua decisão: ")

        switch (decisao) {
            case 1:
                addFlashcard(flashcards)
                pause()
                break
            case 2:
                listAllFlashcards(flashcards)
                break
            case 3:
                listDeckFlashcards(flashcards)
                break
            case 4:
                upFlashcard(flashcards)
                pause()
                break
            case 5:
                remFlashcard(flashcards)
                pause()
                break
            case 6:
                searchFlashcardByQuestion(flashcards)
                break
            case 0:
                return
            default:
                console.log("Digite um número possível!")
                continue
        }
    }
}
module.exports = menuFlashcards