function createid(products) {
    if (products.length === 0) return 1;

    const maiorId = Math.max(...products.map(product => product.id));
    return maiorId + 1;
}

module.exports = createid;
