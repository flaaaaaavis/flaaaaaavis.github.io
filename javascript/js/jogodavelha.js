// coordenadas i e j
// ganha se for 3 i = j, 3 i iguais, 3 j iguais, 

const player1 = "o";
const player2 = "x";
let playing = player1;

let gameover = false;

const board = [
    [document.getElementById("a1"), document.getElementById("a2"), document.getElementById("a3")],
    [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")],
    [document.getElementById("c1"), document.getElementById("c2"), document.getElementById("c3")]
];

whoseturn();
choose();


function whoseturn() {
    if (gameover) {return;}

    if (playing == player1) {
        let player = document.getElementById("turn_text_image");
        player.setAttribute("src", "");
        player.setAttribute("src", "./img/circle.png");
    } else if (playing == player2) {
        let player = document.getElementById("turn_text_image");
        player.setAttribute("src", "");
        player.setAttribute("src", "./img/crossed.png");
    }   
}

function choose() {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            let teste = board[i][j];
            teste.addEventListener("click", function pick() {
                if (gameover) {return;}
            
                if (this.querySelectorAll("img").length == 0){
                    if (playing == player1) {
                        this.innerHTML = "<img src='./img/circle.png'>";
                        this.setAttribute("mark", player1);
                        playing = player2;
                    } else {
                        this.innerHTML = "<img src='./img/crossed.png'>";
                        this.setAttribute("mark", player2);
                        playing = player1;
                    }
                    whoseturn();
                    win();
                }
            } );
        }
    }
}


function win() {    
    let a1 = board[0][0].getAttribute("mark");
    let a2 = board[0][1].getAttribute("mark");
    let a3 = board[0][2].getAttribute("mark");
    
    let b1 = board[1][0].getAttribute("mark");
    let b2 = board[1][1].getAttribute("mark");
    let b3 = board[1][2].getAttribute("mark");
    
    let c1 = board[2][0].getAttribute("mark");
    let c2 = board[2][1].getAttribute("mark");
    let c3 = board[2][2].getAttribute("mark");
    
    let winner;

    if (((a1==a2 && a2==a3) || (a1==b1 && b1==c1) || (a1==b2 && b2==c3)) && a1 != '') {
        winner = a1;
    } else if (((b1==b2 && b2==b3) || (a2==b2 && b2==c2) || (a3==b2 && b2==c1)) && b2 != '') {
        winner = b2;
    } else if (((c1==c2 && c2==c3) || (a3==b3 && b3==c3)) && c3 != '') {
        winner = c3;
    } else {return;}

    if (winner != "") {
        gameover = true;
        document.getElementsByTagName("span").innerHTML = winner;
    } else {return;}
}