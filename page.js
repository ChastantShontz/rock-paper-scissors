const questMark = document.getElementById("questMark");
const resultsMsg = document.getElementById("resultsMsg");
const winCount = document.getElementById("winCount");
const loseCount = document.getElementById("loseCount");
const tieCount = document.getElementById("tieCount");

winCount.innerHTML = localStorage.wins;
loseCount.innerHTML = localStorage.loses;
tieCount.innerHTML = localStorage.ties;

function game(x) {
  if (x == "rock") {
    var playChoice = "rock";
  }
  else if (x == "paper") {
    var playChoice = "paper";
  }
  else if (x == "scissors") {
    var playChoice = "scissors";
  };
  var num = Math.ceil(Math.random() * 3);
  if (num == 1) {
    var compChoice = "rock";
    questMark.src = "img/rock.svg";
  }
  else if (num == 2) {
    var compChoice = "paper";
    questMark.src = "img/paper.svg";
  }
  else if (num == 3) {
    var compChoice = "scissors";
    questMark.src = "img/scissors.svg";
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
    resultsMsg.innerHTML = "Congrat, you won this round!";
    resultsMsg.style.visibility = "visible";
    winCount.innerHTML++;
    localStorage.wins = winCount.innerHTML;
  }
  else if (result == "loose") {
    resultsMsg.innerHTML = "Aww, looks like you lost.  Want to play again?";
    resultsMsg.style.visibility = "visible";
    loseCount.innerHTML++;
    localStorage.loses = loseCount.innerHTML;
  }
  else if (result == "tie") {
    resultsMsg.innerHTML = "It's a tie!  Play again to break it!";
    resultsMsg.style.visibility = "visible";
    tieCount.innerHTML++;
    localStorage.ties = tieCount.innerHTML;
  };
}

function reset() {
  localStorage.wins = 0;
  winCount.innerHTML = 0;
  localStorage.loses = 0;
  loseCount.innerHTML = 0;
  localStorage.ties = 0;
  tieCount.innerHTML = 0;
  resultsMsg.style.visibility = "hidden";
  resultsMsg.innerHTML = ".";
}
