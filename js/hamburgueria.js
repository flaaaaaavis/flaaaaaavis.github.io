function funcao(valor) {
    var form = document.querySelector("#formulario");

    var pao = parseFloat(form.pao.value);
    var carne = parseFloat(form.carne.value);
    var salada = parseFloat(form.salada.value);
    var queijo = parseFloat(form.queijo.value);

    var valor = eval(pao + carne + salada + queijo);

    if(!isNaN(valor)){
        document.querySelector("#resultado").innerHTML = ("Total: R$ <span>" + valor + "</ span>");
    } else {
        document.querySelector("#resultado").innerHTML = ("Escolha os ingredientes!");
    }
};
