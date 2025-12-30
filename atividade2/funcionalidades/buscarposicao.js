function buscarPosicaoPorId(estudantes, id) {
    return estudantes.findIndex(estudante => estudante.id === id);
}
module.exports = buscarPosicaoPorId
