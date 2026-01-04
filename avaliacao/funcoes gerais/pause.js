const prompt = require("prompt-sync")()
function pause() {
    let input

    do {
        input = prompt("\nPressione ENTER para continuar...")
    } while (input !== "")
}
module.exports = pause