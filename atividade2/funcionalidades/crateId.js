function createid(estudantes) {
    if (estudantes.length === 0) return 1;

    const maiorId = Math.max(...estudantes.map(estudante => estudante.id));
    return maiorId + 1;
}

module.exports = createid;
