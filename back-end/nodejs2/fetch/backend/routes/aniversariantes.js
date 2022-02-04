// Crie um módulo capaz de retornar os aniversariantes do mês, recebendo um número de 1 a 12 e o exporte para usar em uma rota GET.

const d = new Date();
let currentMonth = d.getMonth() + 1;
let aniversariantes = [];

function divide(item) {
    nascimento = item.nasc;
    let dividido = nascimento.split("-");
    // console.log(dividido);
    employeeMonth = parseInt(dividido[1]);
    // console.log(employeeMonth);

    if(employeeMonth == currentMonth) {
        aniversariantes.push(item);
    } else {
        return;
    }
}

function getAniversariantes(array) {
    // console.log(currentMonth);
    let employeeMonth;

    array.map(divide);
    // console.log(aniversariantes);
}

// const teste = [{nome: "bolota", nasc: '2017-01-01'},{nome: "Cleide", nasc: '2017-09-01'}];
// getAniversariantes(teste);



module.exports = {
    getAniversariantes
}


