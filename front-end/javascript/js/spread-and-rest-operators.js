// Crie uma função que receba quatro parâmetros e retorne o produto da multiplicação de todos eles. Utilize o spread operator para enviar os itens de um vetor como parâmetros da sua função; 

function multiply (a,b,c,d) {
    return a*b*c*d;
}

let numbers = [1, 2, 3, 4];

// console.log(multiply(...numbers));


// Crie uma função que receba dois vetores e retorne a concatenação dos dois em um novo vetor. Utilize o spread operator para realizar a concatenação;

let mix

function concat(param1, param2) {
    mix = [...param1,...param2];
    return mix;
}

let letters = ["a", "b", "c", "d"];

// concat(numbers, letters);
// console.log(mix);



// Crie uma função que sorteie 10 números inteiros aleatórios entre 1 e 100 e armazene-os em um vetor. Em seguida retorne o maior valor sorteado entre os 10. Utilize o spread operator combinado com a biblioteca “Math” para escrever seu código.

let sorteados = [];

function sort() {
    for(var i=0;i<10;i++) {
        sorteados.push(Math.floor(Math.random() * 1000) + 1);
    }
}

// sort();
// console.log(Math.max(...sorteados));


// Crie uma função capaz de receber infinitos parâmetros e arranjá-los em um único array.

function setParameters(...parameters) {
    console.log(parameters);
}

setParameters("a","b","c");
setParameters("f","g","w");