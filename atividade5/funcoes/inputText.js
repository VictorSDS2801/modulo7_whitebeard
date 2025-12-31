function promptText(promptFn, message) {
    let value

    while (true) {
        value = promptFn(message)

        if (value && value.trim() !== "") {
            return value.trim()
        }

        console.log("Entrada não pode ser vazia ou só espaços!")
    }
}
module.exports = promptText
