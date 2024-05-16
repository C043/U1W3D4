// Parte statica
const createBoard = function () {
  const gameBoard = document.getElementById("game-board");
  for (let i = 1; i <= 76; i++) {
    const gameCell = document.createElement("div");
    gameCell.classList.add("game-cell");
    const number = document.createElement("h3");
    number.innerText = i;
    gameCell.appendChild(number);
    gameBoard.appendChild(gameCell);
  }
};

const extrBtn = document.getElementById("random-number");

extrBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  const number = document.getElementById("number");
  number.innerHTML = "";
  number.innerText = randomNumber;

  const numbers = document.getElementsByClassName("game-cell");
  const extractedNumber = numbers[randomNumber - 1];
  extractedNumber.classList.add("extracted-number");
});

window.addEventListener("DOMContentLoaded", createBoard());
// Parte dinamica
