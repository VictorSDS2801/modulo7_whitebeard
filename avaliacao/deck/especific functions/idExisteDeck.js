function idExisteDeck(decks, id) {
    return decks.some(deck => deck.id === id);
}
module.exports = idExisteDeck