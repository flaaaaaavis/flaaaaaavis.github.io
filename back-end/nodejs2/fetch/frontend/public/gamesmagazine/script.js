const modal = document.getElementById("modal");
const main = document.getElementById('container');
const form = document.querySelector('form');
const data = new FormData(form);

const cadastrar = document.getElementById("btn-cadastrar");
cadastrar.addEventListener("click", () => {
    modal.style.visibility = "visible";
    main.style.visibility = "hidden";
});