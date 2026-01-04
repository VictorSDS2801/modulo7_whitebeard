const promptNumber = require("../funcoes gerais/promptNumber")
const promptText = require("../funcoes gerais/promptText")
const idExisteFlashcard = require("./especifc functions/idExisteFlashcard")
const buscarPosicaoFlashcard = require("./especifc functions/buscarPosicaoFlashcard")
const pause = require("../funcoes gerais/pause")

function remFlashcard(flashcards) {
    console.clear()

    let id
    while (true) {
        id = promptNumber("Digite o id do flashcard que você deseja remover: ")
        if (idExisteFlashcard(flashcards, id)) break
        console.log("Flashcard não encontrado.")
        pause()
    }

    const position = buscarPosicaoFlashcard(flashcards, id)
    console.log("Flashcard selecionado:")
    console.log(flashcards[position])

    const confirmar = promptText("Deseja mesmo deletar? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log('Deleção cancelada.')
        return
    }

    flashcards.splice(position, 1)
    console.log("Flashcard deletado com sucesso!")
}
module.exports = remFlashcard