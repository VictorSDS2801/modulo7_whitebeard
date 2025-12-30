function buscarPosicaoPorId(books, id) {
    return books.findIndex(book => book.id === id);
}
module.exports = buscarPosicaoPorId
