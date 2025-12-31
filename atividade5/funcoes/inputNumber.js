function promptNumber(promptFn, message) {
    let input
    let value

    while (true) {
        input = promptFn(message)

        if (!input || input.trim() === "") {
            console.log("Digite um número!")
            continue
        }

        value = Number(input)

        if (isNaN(value)) {
            console.log("Digite um número válido!")
            continue
        }

        return value
    }
}
module.exports = promptNumber
