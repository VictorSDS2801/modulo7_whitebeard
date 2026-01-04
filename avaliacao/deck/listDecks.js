const pause = require("../funcoes gerais/pause")
function listDecks(decks) {
    console.clear()
    for (let i = 0; i < decks.length; i++) {
        console.log(`id: ${decks[i].id}, 
        título: ${decks[i].title}.`)
    }
    if (decks.length === 0) {
        console.log("Nenhum baralho encontrado!")
        pause()
        return
    }

    pause()
}
module.exports = listDecks