function buscarPosicaoPorId(movies, id) {
    return movies.findIndex(movie => movie.id === id);
}
module.exports = buscarPosicaoPorId
