
function createid(books) {
    const posicaoMaxima = books.findIndex(item => item.quantity === Math.max(...books.map(i => i.quantity)));
    return id
}
module.exports = createid