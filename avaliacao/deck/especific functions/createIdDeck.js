function createIdDeck(decks) {
    if (decks.length === 0) return 1;

    const maiorId = Math.max(...decks.map(deck => deck.id));
    return maiorId + 1;
}
module.exports = createIdDeck;
