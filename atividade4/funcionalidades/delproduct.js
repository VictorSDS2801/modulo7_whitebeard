const prompt = require("prompt-sync")()
const idexiste = require("./idexiste")
const buscarposicao = require("./buscarposicao")

function delproduct(products) {
    while (true) {
        let id = Number(prompt("Digite o id do produto que você deseja deletar: "))
        if (isNaN(id) || !idexiste(products, id)) {
            console.log("Digite um id existente!")
            return delproduct(products)
        }
        else {
            let posicao = buscarposicao(products, id)
            products.splice(posicao, 1)
            console.log("Produto deletado com sucesso!")
            return products
        }
    }
}
module.exports = delproduct