//Elements Which is created in Html And we will Add some changes
let rollBtn = document.getElementById("rollBtn");
let holdBtn = document.getElementById("holdBtn");
let totalEl1 = document.getElementById("total1");
let totalEl2 = document.getElementById("total2");
let imageDice = document.getElementById("imgDice");
//rest button
let resetbtn = document.getElementById("resetbtn");
//winner
let winEl = document.getElementById("winEl");
// Current Score
let currentEl1 = document.getElementById("currentscore-1");
let currentEl2 = document.getElementById("currentscore-2");
// currents value
let currentValue1 = 0;
let currentValue2 = 0;
// total Value
let totalValue1 = 0;
let totalValue2 = 0;
// plyers
let player1 = "player1";
let player2 = "player2";
let currentP = player1;
let dice = 0;
// creating image
let imgEl = document.createElement("img");
let winner = document.createElement("h1");
// rest button
resetbtn.addEventListener("click", () => {
  location.reload();
});
// Roll Button
rollBtn.addEventListener("click", () => {
  if (totalValue1 >= 100) {
    winner.textContent = "Player 1 is winner";
    winner.style.textAlign = "center";
    winEl.appendChild(winner);
    return resetbtn;
  }
  if (totalValue2 >= 100) {
    winner.textContent = "Player 2 is winner";
    winner.style.textAlign = "center";
    winEl.appendChild(winner);
    return resetbtn;
  }
  let dice1_6 = Math.trunc(Math.random() * 7);
  if (currentP === player1) {
    switch (dice1_6) {
      case 1:
        currentP = player2;
        totalValue1 = totalValue1 + currentValue1;
        totalEl1.innerText = totalValue1;
        imgEl.src = "./dice-1.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        currentValue1 = 0;
        currentEl1.innerText = 0;
        break;
      case 2:
        currentValue1 = currentValue1 + dice1_6;
        currentEl1.innerText = currentValue1;
        imgEl.src = "./dice-2.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 3:
        currentValue1 = currentValue1 + dice1_6;
        currentEl1.innerText = currentValue1;
        imgEl.src = "./dice-3.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 4:
        currentValue1 = currentValue1 + dice1_6;
        currentEl1.innerText = currentValue1;
        imgEl.src = "./dice-4.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 5:
        currentValue1 = currentValue1 + dice1_6;
        currentEl1.innerText = currentValue1;
        imgEl.src = "./dice-5.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 6:
        currentValue1 = currentValue1 + dice1_6;
        currentEl1.textContent = currentValue1;
        imgEl.src = "./dice-6.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      default:
        break;
    }
  } else {
    switch (dice1_6) {
      case 1:
        currentP = player1;
        totalValue2 = totalValue2 + currentValue2;
        totalEl2.innerText = totalValue2;
        imgEl.src = "./dice-1.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        currentValue2 = 0;
        currentEl2.innerText = 0;
        break;
      case 2:
        currentValue2 = currentValue2 + dice1_6;
        currentEl2.innerText = currentValue2;
        imgEl.src = "./dice-2.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 3:
        currentValue2 = currentValue2 + dice1_6;
        currentEl2.innerText = currentValue2;
        imgEl.src = "./dice-3.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 4:
        currentValue2 = currentValue2 + dice1_6;
        currentEl2.innerText = currentValue2;
        imgEl.src = "./dice-4.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 5:
        currentValue2 = currentValue2 + dice1_6;
        currentEl2.innerText = currentValue2;
        imgEl.src = "./dice-5.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      case 6:
        currentValue2 = currentValue2 + dice1_6;
        currentEl2.innerText = currentValue2;
        imgEl.src = "./dice-6.png";
        imgEl.style.width = "90px";
        imgEl.style.borderRadius = "12px";
        imageDice.appendChild(imgEl);
        break;
      default:
        break;
    }
  }
});
// hold Button
holdBtn.addEventListener("click", () => {
  if (currentP === player1) {
    currentP = player2;
    totalValue1 = totalValue1 + currentValue1;
    totalEl1.innerText = totalValue1;
    currentValue1 = 0;
    currentEl1.innerText = 0;
  } else {
    currentP = player1;
    totalValue2 = totalValue2 + currentValue2;
    totalEl2.innerText = totalValue2;
    currentValue2 = 0;
    currentEl2.innerText = 0;
  }
});
