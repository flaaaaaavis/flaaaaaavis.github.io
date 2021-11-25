var enviar = document.querySelector('#enviar');

enviar.onclick = function(event) {

    event.preventDefault();

    var form = document.querySelector("#formulario");

    var email = form.email.value;
    var recomend = form.star1.value;
    var atend = form.star2.value;
    var comp = form.star3.value;

    if(email != '' && recomend != '' && atend != '' && comp != '') {
        var avaliacaoTr = document.createElement("tr");

        document.getElementById("parent").appendChild(avaliacaoTr);

        var emailTd = document.createElement("td");
        var recomendTd = document.createElement("td");
        var atendTd = document.createElement("td");
        var compTd = document.createElement("td");

        emailTd.textContent = email;
        recomendTd.textContent = recomend;
        atendTd.textContent = atend;
        compTd.textContent = comp;

        avaliacaoTr.appendChild(emailTd);
        avaliacaoTr.appendChild(recomendTd);
        avaliacaoTr.appendChild(atendTd);
        avaliacaoTr.appendChild(compTd);
    }

    window.scrollTo(window.location);
    window.location = article;

};
