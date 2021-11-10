const questionMark = document.getElementById("questionMark");
const resultsTitle = document.getElementById("resultsTitle");
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
    questionMark.src="img/rock.svg";
  }
  else if (num == 2) {
    var compChoice = "paper";
    questionMark.src="img/paper.svg";
  }
  else if (num == 3) {
    var compChoice = "scissors";
    questionMark.src="img/scissors.svg";
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
    resultsTitle.innerHTML = "Congrat, you won this round!";
    winCount.innerHTML++;
    localStorage.wins = winCount.innerHTML;
  }
  else if (result == "loose") {
    resultsTitle.innerHTML = "Aww, looks like you lost.  Want to play again?";
    loseCount.innerHTML++;
    localStorage.loses = loseCount.innerHTML;
  }
  else if (result == "tie") {
    resultsTitle.innerHTML = "It's a tie!  Play again to break it!";
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
}
