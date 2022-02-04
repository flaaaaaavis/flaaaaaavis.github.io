// Concatenar tudo numa string só
// = executa a operação com eval()


const visor = document.getElementById("visor");

let valor = "";

class Calculadora {

    concat(botao) {
        let button = document.getElementById(botao);
        valor = valor + button.value;

        visor.innerHTML = valor;
    }

    getResult() {
        let resultado = eval(valor);

        valor = valor + " = " + resultado;

        visor.innerHTML = valor;
    }

    clearCalculator() {
        visor.innerHTML = "";
        valor = "";
    }
}

const calculadora = new Calculadora();