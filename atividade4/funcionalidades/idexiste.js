function idExiste(products, id) {
    return products.some(product => product.id === id);
}
module.exports = idExiste