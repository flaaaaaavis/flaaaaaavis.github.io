// var valor1 = parseInt(document.querySelector("#numero1"));
// var valor2 = parseInt(document.querySelector("#numero2"));

// var adicao = document.querySelector("#soma");
// adicao.onclick = function(event) {
//     event.preventDefault();

//     var resultado = valor1 + valor2;
//     document.querySelector("#result").innerHTML = resultado;
// };

// var sub = document.querySelector("#subtracao");
// sub.onclick = function(event) {
//     event.preventDefault();

//     var resultado = valor1 - valor2;
//     document.querySelector("#result").innerHTML = resultado;
// };

// var mult = document.querySelector("#multiplicacao");
// mult.onclick = function(event) {
//     event.preventDefault();

//     var resultado = valor1 * valor2;
//     document.querySelector("#result").innerHTML = resultado;
// };

// var divide = document.querySelector("#divisao");
// divide.onclick = function(event) {
//     event.preventDefault();

//     var resultado = valor1 / valor2;
//     document.querySelector("#result").innerHTML = resultado;
// };

function calc(event, e){
    event.preventDefault();
    var operacao = e.value;
    
    var n1=parseFloat(document.getElementById("numero1").value);
    var n2=parseFloat(document.getElementById("numero2").value);
    
    var calculo = eval(n1+operacao+n2);
 
    if(!isNaN(calculo)){
        let myElm = document.createElement("span");
        document.getElementById("result").appendChild(myElm);
        myElm.innerHTML = document.getElementById("numero1").value + operacao + document.getElementById("numero2").value + " = " + calculo;
    };
   
}