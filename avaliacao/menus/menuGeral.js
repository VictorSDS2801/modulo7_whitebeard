const promptNumber = require("../funcoes gerais/promptNumber")

const menuDecks = require("./menuDecks")
const menuFlashcards = require("./menuFlashcards")
function programa() {
    while (true) {
        console.clear()
        console.log(`Bem vindo ao gerenciamento de baralhos e flashcards!
        1 - Gerenciar baralhos.
        2 - Gerenciar flashcards.
        0 - Sair do programa.`)

        let decisao = promptNumber('Digite a sua decisão: ')
        switch (decisao) {
            case 1:
                menuDecks()
                break
            case 2:
                menuFlashcards()
                break
            case 0:
                console.log("Saindo...")
                process.exit()
            default:
                console.log("Digite um número possível!")
                continue
        }
    }
}
programa()