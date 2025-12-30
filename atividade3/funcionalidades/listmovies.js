function listmovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        console.log(`id: ${movies[i].id}, 
        título: ${movies[i].title}, 
        diretor: ${movies[i].director}, 
        ano: ${movies[i].year}, 
        genre: ${movies[i].genre}.`)
    }
}
module.exports = listmovies