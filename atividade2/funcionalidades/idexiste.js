function idExiste(estudantes, id) {
    return estudantes.some(estudante => estudante.id === id);
}
module.exports = idExiste