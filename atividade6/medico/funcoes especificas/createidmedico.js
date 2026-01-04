function createidmedico(medicos) {
    if (medicos.length === 0) return 1;

    const maiorId = Math.max(...medicos.map(medico => medico.id));
    return maiorId + 1;
}
module.exports = createidmedico;
