var form = document.getElementById("formulario");
var valor = parseInt(form.qt.value);

if(valor<1) {
    alert("Escolha um valor maior que zero");
    break;
}

function cal(event) {
    event.preventDefault();
    var i = 0;  

    while (i <= valor) {
    i = i + 1;
    var node = document.createElement("li");
    var textnode = document.createTextNode("Não estamos nus debaixo das roupas.");
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    }
}

if(valor>11) {
    while(i < valor) {
        i = i + 1;
        var node = document.createElement("li");
        var textnode = document.createTextNode("Não estamos nus debaixo das roupas.");
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
    document.querySelector("ul").innerHTML = "";
    break;
}