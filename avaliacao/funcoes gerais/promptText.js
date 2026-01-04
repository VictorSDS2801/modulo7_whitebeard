const prompt = require("prompt-sync")()
function promptText(message) {
    let value

    while (true) {
        value = prompt(message)

        if (value && value.trim() !== "") {
            return value.trim()
        }

        console.log("Entrada não pode ser vazia ou só espaços!")
    }
}
module.exports = promptText
