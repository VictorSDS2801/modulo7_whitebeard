const pause = require("../funcoes gerais/pause")
function listAllFlashcards(flashcards) {
    console.clear()
    if (flashcards.length === 0) {
        console.log("Nenhum flashcard encontrado.")
        pause()
        return
    }
    for (let i = 0; i < flashcards.length; i++) {
        console.log(`id: ${flashcards[i].id}, 
        pergunta: ${flashcards[i].question}, 
        resposta: ${flashcards[i].response}, 
        id do baralho: ${flashcards[i].idDeck}.`)
    }
    
    pause()
}
module.exports = listAllFlashcards