function idExiste(movies, id) {
    return movies.some(movie => movie.id === id);
}
module.exports = idExiste