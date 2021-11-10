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
  var number = Math.ceil(Math.random() * 3);
  if (number == 1) {
    var compChoice = "rock";
  }
  else if (number == 2) {
    var compChoice = "paper";
  }
  else if (number == 3) {
    var compChoice = "scissors";
  };
  if ((playChoice == "rock") && (compChoice == "paper")) {
    var result = "loose";
  }
  else if ((playChoice == "rock") && (compChoice == scissors)) {
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
  }
  else if (result == "loose") {
    loseCount.innerHTML++;
  }
  else if (result == "tie") {
    tieCount.innerHTML++;
  };
}
