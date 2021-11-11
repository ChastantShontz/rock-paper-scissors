const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const questMark = document.getElementById("questMark");
const resultsMsg = document.getElementById("resultsMsg");
const winLabel = document.getElementById("winLabel");
const winCount = document.getElementById("winCount");
const loseLabel = document.getElementById("loseLabel");
const loseCount = document.getElementById("loseCount");
const tieLabel = document.getElementById("tieLabel");
const tieCount = document.getElementById("tieCount");

winCount.innerHTML = localStorage.wins;
loseCount.innerHTML = localStorage.loses;
tieCount.innerHTML = localStorage.ties;

function game(x) {
  if (x == "rock") {
    var playChoice = "rock";
    rock.style.transform = "scale(1.25)";
    paper.style.transform = "scale(1)";
    scissors.style.transform = "scale(1)";
  }
  else if (x == "paper") {
    var playChoice = "paper";
    paper.style.transform = "scale(1.25)";
    rock.style.transform = "scale(1)";
    scissors.style.transform = "scale(1)";
  }
  else if (x == "scissors") {
    var playChoice = "scissors";
    scissors.style.transform = "scale(1.25)";
    rock.style.transform = "scale(1)";
    paper.style.transform = "scale(1)";
  };
  var num = Math.ceil(Math.random() * 3);
  if (num == 1) {
    var compChoice = "rock";
    questMark.src = "img/rock.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
  }
  else if (num == 2) {
    var compChoice = "paper";
    questMark.src = "img/paper.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
  }
  else if (num == 3) {
    var compChoice = "scissors";
    questMark.src = "img/scissors.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
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
    resultsMsg.innerHTML = "Congrats, you won this round!";
    winCount.innerHTML++;
    localStorage.wins = winCount.innerHTML;
    winLabel.style.fontWeight = "bold";
    loseLabel.style.fontWeight = "normal";
    tieLabel.style.fontWeight = "normal";
    winCount.style.fontWeight = "bold";
    loseCount.style.fontWeight = "normal";
    tieCount.style.fontWeight = "normal";
  }
  else if (result == "loose") {
    resultsMsg.innerHTML = "Aww, looks like you lost.  Better luck next time!";
    loseCount.innerHTML++;
    localStorage.loses = loseCount.innerHTML;
    loseLabel.style.fontWeight = "bold";
    winLabel.style.fontWeight = "normal";
    tieLabel.style.fontWeight = "normal";
    loseCount.style.fontWeight = "bold";
    winCount.style.fontWeight = "normal";
    tieCount.style.fontWeight = "normal";
  }
  else if (result == "tie") {
    resultsMsg.innerHTML = "It's a tie!  Play again to break it!";
    tieCount.innerHTML++;
    localStorage.ties = tieCount.innerHTML;
    tieLabel.style.fontWeight = "bold";
    winLabel.style.fontWeight = "normal";
    loseLabel.style.fontWeight = "normal";
    tieCount.style.fontWeight = "bold";
    winCount.style.fontWeight = "normal";
    loseCount.style.fontWeight = "normal";
  };
}

function reset() {
  localStorage.wins = 0;
  winCount.innerHTML = 0;
  localStorage.loses = 0;
  loseCount.innerHTML = 0;
  localStorage.ties = 0;
  tieCount.innerHTML = 0;
  resultsMsg.innerHTML = "Best of luck! &#129310; &#129310;";
}
