const prompt = require("prompt-sync")()
const buscarposicao = require("./buscarposicao")
const idexiste = require("./idexiste")

function attproduct(products) {
    while (true) {
        let id = Number(prompt("Digite o id do produto que você deseja atualizar: "))
        if (isNaN(id) || !idexiste(products, id)) {
            console.log("Digite um id existente!")
            break
        }
        let newname = prompt("Digite o novo nome do produto: ")
        let newcategory = prompt("Digite a nova categoria do produto: ")
        let newprice = Number(prompt("Digite o novo preço do produto: "))
        let newstock = Number(prompt("Digite o novo estoque do produto: "))
        if (isNaN(newprice) || isNaN(newstock) || newprice <= 0 || newstock < 1) {
            console.log("Digite preços e estoques possíveis!")
            break
        }
        let posicao = buscarposicao(products, id)
        products[posicao].name = newname
        products[posicao].category = newcategory
        products[posicao].price = newprice
        products[posicao].stock = newstock
        console.log("Produto atualizado com sucesso!")
        return products
    }
}
module.exports = attproduct