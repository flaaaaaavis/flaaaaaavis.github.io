const text = document.querySelector('#texto');

function zoomin() {
    let tamanho = parseInt(text.style.fontSize);
    function zoomIn(){
        tamanho += 2;
        tamanho = tamanho.toString() + "px";
        text.style.fontSize = tamanho;
    }
    zoomIn();
    console.log(tamanho);
}

zoomin();

function zoomout() {
    let tamanho = parseInt(text.style.fontSize);
    function zoomOut(){
        tamanho -= 2;
        tamanho = tamanho.toString() + "px";
        text.style.fontSize = tamanho;
    }
    zoomOut();
}