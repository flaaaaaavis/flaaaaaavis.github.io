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
    subarray["cliente"] = nomeCliente;
    subarray["vencimento"] = dataCompra;
    subarray["valor"] = parseFloat(valorCompra);

    array.push(subarray);

    sendToDocument();
}

let jurosTd, finalTd;

function sendToDocument() {
    let node = document.createElement("tr");
    let tableB = document.getElementById("tabela");
    tableB.appendChild(node);

    let nomeTd = document.createElement("td");
    let nomeText = document.createTextNode(nomeCliente);
    nomeTd.appendChild(nomeText);
    node.appendChild(nomeTd);

    let vencimentoTd = document.createElement("td");
    let vencimentoText = document.createTextNode(dataCompra);
    vencimentoTd.appendChild(vencimentoText);
    node.appendChild(vencimentoTd);

    let valorTd = document.createElement("td");
    let valorText = document.createTextNode(valorCompra);
    valorTd.appendChild(valorText);
    node.appendChild(valorTd);

    jurosTd = document.createElement("td");
    node.appendChild(jurosTd);

    finalTd = document.createElement("td");
    node.appendChild(finalTd);
}

let calc = document.getElementById('calcular');
calc.onclick = function (){
    mapArray();
};


function mapArray() {
    let hoje = new Date();
    let prazo, juros, valorFinal;

    array.map(compra => {
        prazo = new Date(compra.vencimento);
        let Difference_In_Time = hoje.getTime() - prazo.getTime();
        let Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24));
        if (Difference_In_Days > 0) {
            juros = Difference_In_Days*0.1 + 2;
            let valorJuros = juros / 100;
            valorFinal = (compra.valor + compra.valor*valorJuros).toFixed(2);
        }
    });

    subarray["juros"] = juros;
    let jurosText = document.createTextNode(juros + "%");
    jurosTd.appendChild(jurosText);

    subarray["final"] = valorFinal;
    let finalText = document.createTextNode(valorFinal);
    finalTd.appendChild(finalText);

    console.log(juros, valorFinal);
}