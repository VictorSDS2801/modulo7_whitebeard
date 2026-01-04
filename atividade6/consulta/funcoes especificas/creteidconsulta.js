function createidconsulta(consultas) {
    if (consultas.length === 0) return 1;

    const maiorId = Math.max(...consultas.map(consulta => consulta.id));
    return maiorId + 1;
}
module.exports = createidconsulta
