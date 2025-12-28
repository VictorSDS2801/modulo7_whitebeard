function listbooks(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(`id: ${books[i].id}, 
        título: ${books[i].title}, 
        autor: ${books[i].author}, 
        ano: ${books[i].year}, 
        gênero: ${books[i].genre}.
        `)
    }
}
module.exports = listbooks
