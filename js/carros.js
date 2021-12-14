let objeto = {
  popular: {
    maxv: Math.floor(Math.random() * (20)) + 180,
    minv: Math.floor(Math.random() * (20)) + 110,
    derrap: Math.floor(Math.random() * (1)) + 3,
  },
  sport: {
    maxv: Math.floor(Math.random() * (20)) + 195,
    minv: Math.floor(Math.random() * (20)) + 125,
    derrap: Math.floor(Math.random() * (0)) + 3,
  },
  supersport: {
    maxv: Math.floor(Math.random() * (20)) + 210,
    minv: Math.floor(Math.random() * (20)) + 140,
    derrap: Math.floor(Math.random() * (0.75)) + 1,
  }
}



let car;

function choosecar() {
  let choosen = Math.floor(Math.random() * (19)) + 1;
  
  if(choosen > 0 && choosen <=12) {
    car = objeto.popular;
  } else if (choosen > 12 && choosen < 20) {
    car = objeto.sport;
  } else if (choosen == 20) {
    car = objeto.supersport;
  }
}

choosecar();

function calcSpeed() {
  let random = Math.floor(Math.random() * (car.maxv - car.minv)) + car.minv;
  result = random - random * car.derrap/100;
  return result;
}

function win(array) {
  let result;
  if(array[0] > array[1] && array[0] > array[2])
    result = 0;
  else if (array[1]> array[2])
    result = 1;
  else
    result = 2;
  return result;
}

function race(circuits) {
    let wins = [0, 0 ,0];
    let pedro, juca, edna;
    for (let i = 0; i < circuits; i++) {
        pedro = calcSpeed();
        juca  = calcSpeed();
        edna  = calcSpeed();
        wins[win([pedro, juca, edna])] +=1;
    }
  return win(wins);
}

function printwinner() {
  const circuits = document.querySelector('input[name="race"]:checked').value;
  const winner = race(circuits);
  const slot = document.createElement("h2");
  const result = document.getElementById("result");
  result.innerHTML = "";
  slot.innerHTML = "";
  slot.innerHTML = "O ganhador é: "
  result.append(slot);

  if (winner == 0) {
    slot.innerHTML += "Pedro";
  }
  else if(winner == 1) {
    slot.innerHTML += "Juca";
  }
  else {
    slot.innerHTML += "Edna";
  }
}