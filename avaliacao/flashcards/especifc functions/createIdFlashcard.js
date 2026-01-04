function createIdFlashcard(flashcards) {
    if (flashcards.length === 0) return 1;

    const maiorId = Math.max(...flashcards.map(falshcard => falshcard.id));
    return maiorId + 1;
}
module.exports = createIdFlashcard
