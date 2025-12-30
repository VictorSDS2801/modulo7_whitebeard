const prompt = require("prompt-sync")()
const createid = require("./createid")

function addproduct(products) {
    while (true) {
        let id = createid(products)

        let name = prompt("Digite o nome do produto: ")
        let category = prompt("Digite a categoria do produto: ")
        let price = Number(prompt("Digite o preço do produto: "))
        let stock = Number(prompt("Digite o estoque do produto: "))
        if (isNaN(price) || isNaN(stock) || price <= 0 || stock < 1) {
            console.log("Digite preço e estoque válidos.")
            break
        }
        else {
            products.push({id: id, name: name, category: category, price: price, stock: stock})
            console.log("Produto adicionado com sucesso!")
            return products
        }
    }
}
module.exports = addproduct