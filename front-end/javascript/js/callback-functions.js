const botao = document.getElementById("butaum");
const sorteados = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

botao.onclick = () => {
    const sorteados = [];
    while(sorteados.length < 6) {
        let number = getRandomInt(1, 60);
        if ((sorteados.indexOf(number) === -1) && (sorteados.length < 6)) {
            sorteados.push(number);
        } else {
            continue;
        }
    }
    // let clock = setInterval(function sortear() {
    //     if(sorteados.length >= 6) {clearInterval(clock)}

    //     let number = getRandomInt(1, 60);
    //     if ((sorteados.indexOf(number) === -1) && (sorteados.length < 6)) {
    //         sorteados.push(number);
    //     }
    // }, 1000);

    console.log(sorteados);
}

