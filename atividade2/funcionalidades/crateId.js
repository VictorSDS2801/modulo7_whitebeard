
function createId(estudantes) {
    const posicaoMaxima = estudantes.findIndex(item => item.quantity === Math.max(...estudantes.map(i => i.quantity)));
    let id = estudantes[posicaoMaxima].id + 1
    return id
}
module.exports = createId