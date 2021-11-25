var valor1 = document.querySelector("#numero1").value;
var valor2 = document.querySelector("#numero2").value;



var igual = document.querySelector("button");
igual.onclick = function (event) {
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var operacao = form.operador.value;

    switch (operacao) {
        case "1":
            var resultado = valor1 + valor2;
            document.querySelector("#op").innerHTML = "+";
            document.querySelector("#result").innerHTML = resultado;
            break;
        case "2":
            var resultado = valor1 - valor2;
            document.querySelector("#op").innerHTML = "-";
            document.querySelector("#result").innerHTML = resultado;
            break;
        case "3":
            var resultado = valor1 * valor2;
            document.querySelector("#op").innerHTML = "x";
            document.querySelector("#result").innerHTML = resultado;
            break;
        case "4":
            if (valor2 == 0) {
                alert("Operação Invalida");
            } else {
                var resultado = valor1 / valor2;
                document.querySelector("#op").innerHTML = "/";
                document.querySelector("#result").innerHTML = resultado;
                break;
            }
        default:
            alert("Operação Invalida");
            break;
    };
};