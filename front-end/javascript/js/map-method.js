let submit = document.querySelector('input[type=button]');
submit.onclick = function (){
    keepit();
};

let array = [
    {cliente: 'CLEITON', vencimento: '2021-12-14', valor: 200, juros: '', final: ''},
    {cliente: 'LARA', vencimento: '2014-10-14', valor: 35, juros: '', final: ''},
    {cliente: 'GRAÇA', vencimento: '2021-05-30', valor: 120, juros: '', final: ''}
];
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
let contadorTr = 2;

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

// let sum = document.getElementById('sum');
// sum.onclick = function() {
//     console.log(array);
//     array.forEach((curr, next) => {
//         if(curr.cliente == next.cliente && curr.vencimento == next.vencimento) {
//             array.reduce((curr, next) => {
//                 next.final = curr.final + next.final;
//                 curr = next;
//                 splice(next, 1);
//                 return curr;
//             });
//         }
//     });
//     console.log(array);
// }

let min_date = document.getElementById("filtro_min-date").value;
let max_date = document.getElementById("filtro_max-date").value;
let min_value = document.getElementById("filtro_min-value").value;
let max_value = document.getElementById("filtro_max-value").value;

function filtrar() {
    if(min_date != "" && max_date != "") {
        return min_date <= this.vencimento <= max_date;
    }
    else if(min_date != "" && max_date == "") {
        return this.vencimento >= min_date;
    }
    else if(min_date == "" && max_date != "") {
        return this.vencimento <= max_date;
    }

    if(min_value != "" && max_value != "") {
        return min_value <= this.valor <= max_value;
    }
    else if(min_value != "" && max_value == "") {
        return this.valor >= min_value;
    }
    else if(min_value == "" && max_value != "") {
        return this.valor <= max_value;
    }
}

let filtrada = array.filter(filtrar);

let filtro = document.getElementById("filtro_submit");
filtro.addEventListener("click", function() {
    console.log(filtrada);
});