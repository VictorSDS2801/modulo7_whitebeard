const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

const decks = require("../dados/arrayDecks")

const addDeck = require("../deck/addDeck")
const listDecks = require("../deck/listDecks")
const upDeck = require("../deck/upDeck")
const remDeck = require("../deck/remDeck")
function menuDecks() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao gerenciamento de baralhos!
        1 - Adicionar baralho.
        2 - Listar baralhos.
        3 - Atualizar baralho.
        4 - Deletar baralho.
        0 - Voltar ao menu principal.
        `)
        let decisao = promptNumber("Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                addDeck(decks)
                pause()
                break
            case 2:
                listDecks(decks)
                break
            case 3:
                upDeck(decks)
                pause()
                break
            case 4:
                remDeck(decks)
                pause()
                break
            case 0:
                return
            default:
                console.log("Digite um número possível!")
                continue
        }
    }
}
module.exports = menuDecks