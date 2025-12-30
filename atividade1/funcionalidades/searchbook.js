const prompt = require("prompt-sync")()

function searchbook(books) {
    let key = prompt("Buscar por (title, author, year, genre): ").toLowerCase()
    key = key.toLowerCase()
    const validKeys = ["title", "author", "year", "genre"]

    if (!validKeys.includes(key)) {
        console.log("Chave inválida.")
        return searchbook(books)
    }

    let value = prompt(`Digite o valor para buscar por ${key}: `)

    let result = books.filter(book => {
        if (key === "year") {
            return book[key] === Number(value)
        }

        return book[key]
            .toLowerCase()
            .includes(value.toLowerCase())
    })

    if (result.length === 0) {
        console.log("Nenhum livro encontrado.")
    }

    resultados.forEach(book => console.log(book))
}
module.exports = searchbook