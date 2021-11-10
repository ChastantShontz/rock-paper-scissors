const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const questionMark = document.getElementById("questionMark");
const resultsTitle = document.getElementById("resultsTitle");
const winCount = document.getElementById("winCount");
const loseCount = document.getElementById("loseCount");
const tieCount = document.getElementById("tieCount");

winCount.innerHTML = localStorage.wins;
loseCount.innerHTML = localStorage.loses;
tieCount.innerHTML = localStorage.ties;

function game(x) {
  if (x == rock) {
    var playChoice = "rock";
  }
  else if (x == paper) {
    var playChoice = "paper";
  }
  else if (x == scissors) {
    var playChoice = "scissors";
  };
  var num = Math.ceil(Math.random() * 3);
  if (num == 1) {
    var compChoice = "rock";
  }
  else if (num == 2) {
    var compChoice = "paper";
  }
  else if (num == 3) {
    var compChoice = "scissors";
  };
  if ((playChoice == "rock") && (compChoice == "paper")) {
    var result = "loose";
  }
  else if ((playChoice == "rock") && (compChoice == "scissors")) {
    var result = "win";
  }
  else if ((playChoice == "paper") && (compChoice == "rock")) {
    var result = "win";
  }
  else if ((playChoice == "paper") && (compChoice == "scissors")) {
    var result = "loose";
  }
  else if ((playChoice == "scissors") && (compChoice == "rock")) {
    var result = "loose";
  }
  else if ((playChoice == "scissors") && (compChoice == "paper")) {
    var result = "win";
  }
  else if (playChoice == compChoice) {
    var result = "tie";
  };
  if (result == "win") {
    winCount.innerHTML++;
    localStorage.wins = winCount.innerHTML;
  }
  else if (result == "loose") {
    loseCount.innerHTML++;
    localStorage.loses = loseCount.innerHTML;
  }
  else if (result == "tie") {
    tieCount.innerHTML++;
    localStorage.ties = tieCount.innerHTML;
  };
}
