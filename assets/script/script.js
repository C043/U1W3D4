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

window.addEventListener("DOMContentLoaded", createBoard());
// Parte dinamica
