const promptText = require("../funcoes gerais/promptText")
const pause = require("../funcoes gerais/pause")

function searchFlashcardByQuestion(flashcards) {
    let question = promptText("Digite a pergunta que você deseja buscar: ")

    let resultado = flashcards.filter(f => f.question.toLowerCase() === question.toLowerCase())

    if (resultado.length === 0) {
        console.log("Nenhum flashcard encontrado.")
        pause()
        return
    }
    console.log("flashcards filtrados:")
    resultado.forEach(f => {
        console.log(`id: ${f.id}, 
        pergunta: ${f.question}, 
        resposta: ${f.response}, 
        id do baralho: ${f.idDeck}.`)
    })
    pause()
    return

}