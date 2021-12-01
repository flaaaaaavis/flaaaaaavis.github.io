function funcao() {
    var form = document.querySelector("#formulario");

    var pao = parseFloat(form.pao.value);
    var carne = parseFloat(form.carne.value);
    var salada = parseFloat(form.salada.value);
    var queijo = parseFloat(form.queijo.value);

    var valor = eval(pao + carne + salada + queijo);

    if(isNaN(valor)){
        document.querySelector("#resultado").textContent = ("Escolha os ingredientes!")
    } else {
        document.querySelector("#resultado").textContent = ("Total: R$ " + valor);
    }
}

function descricao() {
// PÃO

var bread = document.querySelector('input[name = "pao"]:checked').id;

    if(bread == frances) {
    document.querySelector(".pao").textContent = ("Pão Francês;");
    } else if (bread == australiano) {
        document.querySelector(".pao").textContent = ("Pão Australiano;");
    } else if (bread == brioche) {
        document.querySelector(".pao").textContent = ("Pão Brioche;");
    } else {
        document.querySelector("#resultado").textContent = ("Escolha os ingredientes!");
    }

// CARNE

var meat = document.querySelector('input[name = "carne"]:checked').id;

    if(meat == picanha) {
    document.querySelector(".carne").textContent = ("Hamburguer de Picanha;");
    } else if (meat == costela) {
        document.querySelector(".carne").textContent = ("Hamburguer de Costela;");
    } else if (meat == vegano) {
        document.querySelector(".carne").textContent = ("Hamburguer Vegano;");
    } else {
        document.querySelector("#resultado").textContent = ("Escolha os ingredientes!");
    }


// SALADA
var salad = document.querySelector('input[name = "salada"]:checked').id;
    if(salad == alface) {
    document.querySelector(".salada").textContent = ("Alface;");
    } else if (salad == tomate) {
        document.querySelector(".salada").textContent = ("Tomate;");
    } else if (salad == nada) {
        document.querySelector(".salada").textContent = ("Sem salada;");
    } else {
        document.querySelector("#resultado").textContent = ("Escolha os ingredientes!");
    }

// QUEIJO
var cheese = document.querySelector('input[name = "queijo"]:checked').id;
    if(cheese == mussarela) {
    document.querySelector(".queijo").textContent = ("Queijo Mussarela;");
    } else if (cheese == prato) {
        document.querySelector(".queijo").textContent = ("Queijo Prato;");
    } else if (cheese == cheddar) {
        document.querySelector(".queijo").textContenti = ("Queijo Cheddar;");
    } else {
        document.querySelector("#resultado").textContent = ("Escolha os ingredientes!");
    }

}

