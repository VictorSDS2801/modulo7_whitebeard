function listStudents(estudantes) {
    for (let i = 0; i < estudantes.length; i++) {
        console.log(`id: ${estudantes[i].id}, 
        nome: ${estudantes[i].name}, 
        matrícula: ${estudantes[i].registration}, 
        curso: ${estudantes[i].course}, 
        ano: ${estudantes[i].year}.`)
    }
}
module.exports = listStudents