function buscarPosicaoPorId(flashcards, id) {
    return flashcards.findIndex(flashcard => flashcard.id === id);
}
module.exports = buscarPosicaoPorId
