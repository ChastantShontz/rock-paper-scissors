const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const questionMark = document.getElementById("questionMark");
const resultsTitle = document.getElementById("resultsTitle");
const winCount = document.getElementById("winCount");
const loseCount = document.getElementById("loseCount");
const tieCount = document.getElementById("tieCount");

localStorage.wins = winCount.innerHTML;
var winNumber = localStorage.wins;

localStorage.loses = loseCount.innerHTML;
var loseNumber = localStorage.loses;

localStorage.ties = tieCount.innerHTML;
var tieNumber = localStorage.ties;

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

function game() {
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
  }
}

function result() {
  if (result == "win") {
    winNumber++;
    localStorage.wins = winNumber;
    winCount.innerHTML = localStorage.wins;
  }
  else if (result == "loose") {
    loseNumber++;
    localStorage.loses = loseNumber;
    loseCount.innerHTML = localStorage.loses;
  }
  else if (result == "tie") {
    tieNumber++;
    localStorage.ties = tieNumber;
    tieCount.innerHTML = localStorage.ties;
  }
}
