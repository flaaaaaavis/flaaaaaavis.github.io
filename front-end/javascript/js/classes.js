document.getElementById("calc").addEventListener("click", (event) => {
    event.preventDefault();
})

class Calculadora {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }
    setOperand1(_operand1) {
        this.operand1 = parseInt(document.getElementById("operand1"));
    }
    setOperand2(_operand2) {
        this.operand2 = parseInt(document.getElementById("operand2"));
    }
    setOperation(_operation) {
        this.operation = document.getElementById("operation");
    }

    getResult() {
        let resultado;
        // console.log(operand1.value);
        // console.log(operand2.value);
        // console.log(operation.value);

        switch(operation.value) {
            case "+" :
              resultado = parseInt(operand1.value) + parseInt(operand2.value);
              break;
            case "-" :
              resultado = operand1.value - operand2.value;
              break;
            case "*" :
              resultado = operand1.value * operand2.value;
              break;
            case "/" :
              resultado = operand1.value / operand2.value;
              break;
        }

        alert(`O resultado é: ${resultado}.`);
    }

    clearCalculator() {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation; 
    }
}

const calculadora = new Calculadora();