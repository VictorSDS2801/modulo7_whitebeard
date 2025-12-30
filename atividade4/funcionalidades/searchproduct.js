const prompt = require("prompt-sync")()

function searchproduct(products) {
    while (true) {
        let chave = prompt("Digite a chave pela qual você deseja buscar o seu produto (name, category, price, stock): ")
        chave = chave.toLowerCase()
        let possiveis = ["name", "category", "price", "stock"]
        if (!possiveis.includes(chave)) {
            console.log("Digite um achave possível!")
            break
        }
        let valor = prompt(`Digite o valor que você quer buscar em ${chave}.`)
        let resultado = products.filter(product => {
            if (chave === "price" || chave === "stock") {
                return product[chave] === Number(valor)
            }

            return product[chave].toLowerCase().includes(valor.toLowerCase())
        })

        if (resultado.length === 0){
            console.log("Nenhum produto encontrado.")
        }
        else {
            resultado.forEach(product => console.log(product))
        }
    }
}
module.exports = searchproduct