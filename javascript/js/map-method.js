let submit = document.querySelector('input[type=button]');
submit.onclick = function (){
    keepit();
};

let array = [];
let subarray = {};
let nomeCliente, dataCompra, valorCompra;
let jurosCompra;
let finalCompra;

function keepit() {
    nomeCliente = document.getElementById('cliente').value;
    dataCompra = document.getElementById('vencimento').value;
    valorCompra = document.getElementById('valor').value;
    
    pushToObject();
}

function pushToObject() {
    let subarray = {};
    subarray["cliente"] = nomeCliente.toUpperCase();
    subarray["vencimento"] = dataCompra;
    subarray["valor"] = parseFloat(valorCompra);
    subarray["juros"] = "";
    subarray["final"] = "";

    array.push(subarray);

    sendToDocument();
}

let jurosTd, finalTd;
let contadorTr = -1;

function sendToDocument() {
    contadorTr++;
    let node = document.createElement("tr");
    node.setAttribute("id", contadorTr);
    let tableB = document.getElementById("tabela");
    tableB.appendChild(node);

    let nomeTd = document.createElement("td");
    let nomeText = document.createTextNode(nomeCliente.toUpperCase());
    nomeTd.appendChild(nomeText);
    nomeTd.setAttribute("id", contadorTr+"-cliente");
    node.appendChild(nomeTd);

    let vencimentoTd = document.createElement("td");
    let vencimentoText = document.createTextNode(dataCompra);
    vencimentoTd.appendChild(vencimentoText);
    vencimentoTd.setAttribute("id", contadorTr+"-vencimento");
    node.appendChild(vencimentoTd);

    let valorTd = document.createElement("td");
    let valorText = document.createTextNode(valorCompra);
    valorTd.appendChild(valorText);
    valorTd.setAttribute("id", contadorTr+"-valor");
    node.appendChild(valorTd);

    jurosTd = document.createElement("td");
    jurosTd.setAttribute("id", contadorTr+"-juros");
    node.appendChild(jurosTd);

    finalTd = document.createElement("td");
    finalTd.setAttribute("id", contadorTr+"-final");
    node.appendChild(finalTd);
}

let calc = document.getElementById('calcular');
calc.onclick = function (){
    array.forEach((item, index) => {
        let hoje = new Date();
        let juros;
        let valorFinal;
        let valorJuros;
    
        let prazo = new Date(item.vencimento);
        let Difference_In_Time = hoje.getTime() - prazo.getTime();
        let Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24));
    
        if (Difference_In_Days > 0) {
            juros = (Difference_In_Days*0.1 + 2).toFixed(2);
            valorJuros = juros / 100;
            valorFinal = (item.valor + item.valor*valorJuros).toFixed(2);
        } else {
            juros = 0;
            valorFinal = (item.valor).toFixed(2);
        }

        if(item["juros"] == ""){
            item["juros"] = juros;
            document.getElementById(index + "-juros").textContent = juros;
        }

        if(item["final"] == ""){
            item["final"] = valorFinal;
            document.getElementById(index + "-final").textContent = valorFinal;
        }
        
    });
};



let porNome = document.getElementById('porNome');
porNome.onclick = function (){
    array.sort((a, b) => {
        if(a.cliente > b.cliente) {
            return 1
        } else {
            return -1
        }
    });
    document.getElementById("tabela").innerHTML = "";

    array.forEach((item, index) => {
        let node = document.createElement("tr");
        node.setAttribute("id", index);
        let tableB = document.getElementById("tabela");
        tableB.appendChild(node);
    
        let nomeTd = document.createElement("td");
        let nomeText = document.createTextNode(item.cliente);
        nomeTd.appendChild(nomeText);
        nomeTd.setAttribute("id", index+"-cliente");
        node.appendChild(nomeTd);
    
        let vencimentoTd = document.createElement("td");
        let vencimentoText = document.createTextNode(item.vencimento);
        vencimentoTd.appendChild(vencimentoText);
        vencimentoTd.setAttribute("id", index+"-vencimento");
        node.appendChild(vencimentoTd);
    
        let valorTd = document.createElement("td");
        let valorText = document.createTextNode(item.valor);
        valorTd.appendChild(valorText);
        valorTd.setAttribute("id", index+"-valor");
        node.appendChild(valorTd);
    
        jurosTd = document.createElement("td");
        let jurosText = document.createTextNode(item.juros);
        jurosTd.appendChild(jurosText);
        jurosTd.setAttribute("id", index+"-juros");
        node.appendChild(jurosTd);
    
        finalTd = document.createElement("td");
        let finalText = document.createTextNode(item.final);
        finalTd.appendChild(finalText);
        finalTd.setAttribute("id", index+"-final");
        node.appendChild(finalTd);
    });
}

let porVencimento = document.getElementById('porVencimento');
porVencimento.onclick = function (){
    array.sort((a, b) => {
        if(a.vencimento > b.vencimento) {
            return 1
        } else {
            return -1
        }
    });
    document.getElementById("tabela").innerHTML = "";

    array.forEach((item, index) => {
        let node = document.createElement("tr");
        node.setAttribute("id", index);
        let tableB = document.getElementById("tabela");
        tableB.appendChild(node);
    
        let nomeTd = document.createElement("td");
        let nomeText = document.createTextNode(item.cliente);
        nomeTd.appendChild(nomeText);
        nomeTd.setAttribute("id", index+"-cliente");
        node.appendChild(nomeTd);
    
        let vencimentoTd = document.createElement("td");
        let vencimentoText = document.createTextNode(item.vencimento);
        vencimentoTd.appendChild(vencimentoText);
        vencimentoTd.setAttribute("id", index+"-vencimento");
        node.appendChild(vencimentoTd);
    
        let valorTd = document.createElement("td");
        let valorText = document.createTextNode(item.valor);
        valorTd.appendChild(valorText);
        valorTd.setAttribute("id", index+"-valor");
        node.appendChild(valorTd);
    
        jurosTd = document.createElement("td");
        let jurosText = document.createTextNode(item.juros);
        jurosTd.appendChild(jurosText);
        jurosTd.setAttribute("id", index+"-juros");
        node.appendChild(jurosTd);
    
        finalTd = document.createElement("td");
        let finalText = document.createTextNode(item.final);
        finalTd.appendChild(finalText);
        finalTd.setAttribute("id", index+"-final");
        node.appendChild(finalTd);
    });
}

let sum = document.getElementById('sum');
sum.onclick = function() {
    console.log(array);
    array.forEach((curr, next) => {
        if(curr.cliente == next.cliente && curr.vencimento == next.vencimento) {
            array.reduce((curr, next) => {
                curr.final = curr.final + next.final;
                splice(next, 1);
                return curr;
            });
        }
    });
    console.log(array);
}