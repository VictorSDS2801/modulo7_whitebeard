const prompt = require("prompt-sync")()
const addbook = require("./funcionalidades/addbook")
const listbooks = require("./funcionalidades/listbooks")
const atuabook = require("./funcionalidades/atuabook")
const removebook = require("./funcionalidades/removebook")
const searchbook = require("./funcionalidades/searchbook")
const quit = require("./funcionalidades/quit")



let books = [
    {id: 1, title: "Robôs e império", author: "Isaac Asimov", year: 1985, genre: "Ficção científica"},
    {id: 2, title: "O Hobbit", author: "J.R.R Tolkien", year: 1937, genre: "Fantasia"},
    {id: 3, title: "Harry Potter e a pedra filosofal", author: "J.K Rowling", year: 1997, genre: "Fantasia"},
    {id: 4, title: "O silmarillion", author: "J.R.R Tolkien", year: 1977, genre: "Fantasia"},
    {id: 5, title: "Segunda fundação", author: "Isaac Asimov", year: 1953, genre: "Ficção científica"}
]


function programa() {
    console.log("Seja bem vindo ao gerenciamento de livros!")
    console.log("Digite 1 se você deseja adicionar um novo livro.")
    console.log("Digite 2 se você deseja listar todos os livros.")
    console.log("Digite 3 se você deseja atualizar algum dos livros.")
    console.log("Digite 4 se você deseja remover algum livro.")
    console.log("Digite 5 se você deseja buscar algum livro.")
    console.log("Digite 6 se você deseja sair do programa.")
    let decisao = prompt("Digite aqui a sua decisão: ")

    switch (decisao) {
        case '1':
            addbook(books)
            programa()
            break
        case '2':
            listbooks(books)
            programa()
            break
        case '3':
            atuabook(books)
            programa()
            break
        case '4':
            removebook(books)
            programa()
            break
        case '5':
            searchbook(books)
            
            programa()
            break
        case '6': 
            quit()
        default:
            console.log("Digite um número correspondente.")
            programa()
    }
}
module.exports = books
programa()