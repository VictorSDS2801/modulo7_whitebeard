function listproducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(`id: ${products[i].id}, 
            nome: ${products[i].name}, 
            categoria: ${products[i].category}, 
            preço: ${products[i].price}, 
            estoque: ${products[i].stock}.`)
    }
}
module.exports = listproducts