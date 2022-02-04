// Crie um módulo capaz de retornar a lista de funcionários de um determinado setor e o exporte para usar em uma rota GET.

let porSetor;

function setores(array, testando) {
    porSetor = array.filter(item => { 
        if(item.setor == testando) {
            return item;
        } 
    })
    return porSetor;
}

// let teste = [{nome: "fulano", setor:"coisa"}, {nome: "ciclano", setor:"alpha"}, {nome: "beltrano", setor: "coisa"}];
// setores(teste, "coisa");
// console.log(porSetor);

module.exports = {
    setores
}