// Crie uma função recursiva que retorne o fatorial de um número inteiro.

let result = 1;

function fatorial(num){
    
    if(num==1) {
        return 1;
    } else {
        result = num*fatorial(num-1);
    }
    return result;
}

// fatorial(7);
// console.log(result);



// Crie uma função recursiva que receba como parâmetro uma matriz e seja capaz de exibir no console todos os dados que a compõe. 



let nomes = ["cleide", "joana", "valda"];

let i = nomes.length;

function printOnScreen(array) {
    if(i<0) {
        return 1;
    } else {
        i--;
        console.log(array[i]);
        printOnScreen(array);
    }
}

// printOnScreen(nomes);



