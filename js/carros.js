let popular = {
  maxv: Math.floor(Math.random() * (200 - 180)) + 180,
  minv: Math.floor(Math.random() * (130 - 110)) + 110,
  derrap: Math.floor(Math.random() * (4 - 3)) + 3,
}
let sport = {
  maxv: Math.floor(Math.random() * (215 - 195)) + 195,
  minv: Math.floor(Math.random() * (145 - 125)) + 125,
  derrap: Math.floor(Math.random() * (3 - 3)) + 3,
}
let supersport = {
  maxv: Math.floor(Math.random() * (230 - 210)) + 210,
  minv: Math.floor(Math.random() * (160 - 140)) + 140,
  derrap: Math.floor(Math.random() * (1.75 - 1)) + 1,
}

let car;

function choosecar() {
  let choosen = Math.floor(Math.random() * (20 - 1)) + 1;
  
  if(choosen > 0 && choosen <=12) {
    car = popular;
  } else if (choosen > 12 && choosen < 20) {
    car = sport;
  } else if (choosen == 20) {
    car = supersport;
  }
}

choosecar();

function calculateVelocity() {
  let random = Math.floor(Math.random() * (car.maxv - car.minv)) + car.minv;
  result = random - random * car.derrap/100;
  return result;
}

function greater(array) {
  let result;

  if(array[0] > array[1] && array[0] > array[2])
    result = 0;

  else if (array[1]> array[2])
    result = 1;

  else
    result = 2;

  return result;
}

function race(laps) {
    let wins = [0, 0 ,0];
    let pedro, juca, edna;
    for (let i = 0; i < laps; i++) {
        pedro = calculateVelocity();
        juca  = calculateVelocity();
        edna  = calculateVelocity();
        wins[greater([pedro, juca, edna])] +=1;
    }
  return greater(wins);
}

function insertion() {
  const laps = document.querySelector('input[name="race"]:checked').value;
  const winner = race(laps);
  const winnerElement = document.createElement("h2");
  const result = document.getElementById("result");
  result.innerHTML = "";
  winnerElement.innerHTML = "";
  winnerElement.innerHTML = "O ganhador é: "
  result.append(winnerElement);

  if (winner == 0) {
    winnerElement.innerHTML += "Pedro";
  }
  else if(winner == 1) {
    winnerElement.innerHTML += "Juca";
  }
  else {
    winnerElement.innerHTML += "Edna";
  }
}