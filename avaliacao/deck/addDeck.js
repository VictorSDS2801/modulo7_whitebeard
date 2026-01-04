const promptText = require("../funcoes gerais/promptText")
const createIdDeck = require("./especific functions/createIdDeck")
function addDeck(decks) {
    console.clear()
    let id = createIdDeck(decks)

    let title = promptText("Digite o título do baralho: ")

    decks.push({id: id, title: title})
    console.log("Baralho adicionado com sucesso!")
    return
}
module.exports = addDeck