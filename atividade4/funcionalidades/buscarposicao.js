function buscarPosicaoPorId(products, id) {
    return products.findIndex(product => product.id === id);
}
module.exports = buscarPosicaoPorId
