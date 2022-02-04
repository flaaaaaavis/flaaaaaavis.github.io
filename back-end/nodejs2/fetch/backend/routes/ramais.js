// Crie um módulo capaz de retornar uma lista de ramais ordenado alfabeticamente e o exporte para usar em uma rota GET.

let result;

function reorder(array) {
    result = array.sort(function(a,b) {
        return a.ramal < b.ramal ? -1 : a.ramal > b.ramal ? 1 : 0;
    });
}

// let teste = [{nome: "fulano", setor:"coisa", ramal: "slah"}, {nome: "ciclano", setor:"alpha", ramal: "ué"}, {nome: "beltrano", setor: "coisa", ramal: "eita"}];
// reorder(teste);
// console.log(result);


module.exports = {
    reorder
}