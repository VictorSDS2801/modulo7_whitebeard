const prompt = require("prompt-sync")()
const addproduct = require("./funcionalidades/addproduct")
const listproducts = require("./funcionalidades/listproducts")
const attproduct = require("./funcionalidades/attproduct")
const delproduct = require("./funcionalidades/delproduct")
const searchproduct = require("./funcionalidades/searchproduct")
const quit = require("./funcionalidades/quit")

let products = [
    {id: 1, name: "Arroz", category: "alimento", price: 2, stock: 100},
    {id: 2, name: "Feijão", category: "alimento", price: 2.5, stock: 150},
    {id: 3, name: "Sabão em pó", category: "limpeza", price: 10, stock: 200},
    {id: 4, name: "Shampoo", category: "limpeza", price: 30, stock: 500},
    {id: 5, name: "Iphone 25", category: "eletrônico", price: 100000, stock: 1}
]
function programa() {
    while (true) {
        console.log("Bem vindo ao gerenciamento de produtos!")
        console.log("Digite 1 se você deseja adicionar um novo produto.")
        console.log("Digite 2 se você deseja listar todos os produtos.")
        console.log("Digite 3 se você deseja atualizar um produto.")
        console.log("Digite 4 se você deseja deletar algum produto.")
        console.log("Digite 5 se você deseja buscar algum produto.")
        console.log("Digite 6 se você deseja sair do programa.")
        let decisao = prompt("Digite a sua resposta: ")

        switch (decisao) {
            case '1':
                addproduct(products)
                break
            case '2':
                listproducts(products)
                break
            case '3':
                attproduct(products)
                break
            case '4':
                delproduct(products)
                break
            case '5':
                searchproduct(products)
                break
            case '6':
                quit()
                return
            default:
                console.log("Digite um número correspondente!")
        }
    }
}
programa()