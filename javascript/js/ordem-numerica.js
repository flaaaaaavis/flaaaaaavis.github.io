var numbers = [];

function keep(event) {
    event.preventDefault();
    let number1 = document.getElementById("n1");
    let number2 = document.getElementById("n2");
    let number3 = document.getElementById("n3");
    let number4 = document.getElementById("n4");

    const element1 = document.createElement("li");
    element1.setAttribute("id", "trem0");
    element1.innerHTML = number1.value;

    const element2 = document.createElement("li");
    element2.setAttribute("id", "trem1");
    element2.innerHTML = number2.value;

    const element3 = document.createElement("li");
    element3.setAttribute("id", "trem2");
    element3.innerHTML = number3.value;

    const element4 = document.createElement("li");
    element4.setAttribute("id", "trem3");
    element4.innerHTML = number4.value;

    const output = document.getElementById("result");
    output.append(element1, element2, element3, element4);

    
    numbers.push(element1.innerHTML);
    numbers.push(element2.innerHTML);
    numbers.push(element3.innerHTML);
    numbers.push(element4.innerHTML);

    return;
}

const reordenar = document.querySelector("#reorder");
reordenar.addEventListener("click", function(){
    reorder();
});

function reorder() {
    for(let i=0; i < numbers.length; i++) {
        document.getElementById(`trem${i +4}`).innerHTML = numbers[numbers.length -i -1];
    }
}

const crescente = document.querySelector("#crescent");
crescente.addEventListener("click", function(){
    crescent();
});

function crescent () {
    let i;
    let j;
    let aux;
    for (i=0;i<numbers.length;i++){
        for (j=i+1; j<numbers.length; j++){
            if (numbers[j] < numbers[i]){
                aux = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = aux;
            }
        }
    }
    document.querySelector('#trem4').innerHTML = numbers[0];
    document.querySelector('#trem5').innerHTML = numbers[1];
    document.querySelector('#trem6').innerHTML = numbers[2];
    document.querySelector('#trem7').innerHTML = numbers[3];

}