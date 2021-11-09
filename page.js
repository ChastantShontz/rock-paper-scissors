const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const questionMark = document.getElementById("questionMark");
const resultsTitle = document.getElementById("resultsTitle");
const winCount = document.getElementById("winCount");
const loseCount = document.getElementById("loseCount");
const tieCount = document.getElementById("tieCount");

winCount.innerHTML = 0;

loseCount.innerHTML = 0;

tieCount.innerHTML = 0;

function playChoose(rock) {
  var playChoice = "rock";
}

function playChoose(paper) {
  var playChoice = "paper";
}

function playChoose(scissors) {
  var playChoice = "scissors";
}

function compChoose() {
  var number = Math.ceiling(Math.random() * 3);
  var compChoice;
  if (number == 1) {
    compChoice = "rock";
  }
  else if (number == 2) {
    compChoice = "paper";
  }
  else if (number == 3) {
    compChoice = "scissors";
  }
}
