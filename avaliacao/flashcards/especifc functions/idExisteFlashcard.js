function idExisteFlashcard(flashcards, id) {
    return flashcards.some(flashcard => flashcard.id === id);
}
module.exports = idExisteFlashcard