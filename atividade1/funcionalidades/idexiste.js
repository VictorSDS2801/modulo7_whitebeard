function idExiste(books, id) {
    return books.some(book => book.id === id);
}
module.exports = idExiste