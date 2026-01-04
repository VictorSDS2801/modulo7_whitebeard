const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")
function listDeckFlashcards(flashcards) {
    let idDeck = promptNumber("Digite o id do baralho em que você deseja ver seus flashcards: ")

    let resultado = flashcards.filter(f => f.idDeck === idDeck)

    if (resultado.length === 0) {
        console.log("Nenhum flashcard encontrado.")
        pause()
        return
    }
    console.log("flashcards:")
    resultado.forEach(f => {
        console.log(`id: ${f.id}, 
        pergunta: ${f.question}, 
        resposta: ${f.response}, 
        id do baralho: ${f.idDeck}.`)
    })
    pause()
    return
}
module.exports = listDeckFlashcards