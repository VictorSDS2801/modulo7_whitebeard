function buscarPosicaoPorId(decks, id) {
    return decks.findIndex(deck => deck.id === id);
}
module.exports = buscarPosicaoPorId
