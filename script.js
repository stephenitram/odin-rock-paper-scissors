const playerScore_span = document.querySelector(".player-score");
const computerScore_span = document.querySelector(".computer-score");
const rockSelection_btn = document.querySelector(".rock");
const paperSelection_btn = document.querySelector(".paper");
const scissorsSelection_btn = document.querySelector(".scissors");
const gameEnd_div = document.querySelector(".game-end");
const roundFeedBack = document.querySelector(".winner-description");

const gameOptions = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let numOfPlay = 0;

rockSelection_btn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const gameRoundWinner = playRound("Rock", computerSelection);
  game(gameRoundWinner);
  //   console.log("rock selected");
});

paperSelection_btn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const gameRoundWinner = playRound("Paper", computerSelection);
  game(gameRoundWinner);
  //   console.log("paper selected");
});

scissorsSelection_btn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const gameRoundWinner = playRound("Scissors", computerSelection);
  game(gameRoundWinner);
  //   console.log("scissors selected");
});

//  function capitalize(string) {
//     let array = string.split(" ")
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
//     }
//     let newString = array.join(" ")
//     return newString
// }

function game(gameRoundWinner) {
  //   console.log(`A GAME OF ROCK PAPER SCISSORS [ YOU vs THE COMPUTER ]`);

  // const playerSelection = capitalize(prompt(`rock, paper or Scissors ?`))
  //   console.log("gameRoundWinner:", gameRoundWinner);

  if (playerScore === 0 || computerScore === 0) {
    gameEnd_div.innerHTML = ``;
    computerScore_span.innerHTML = 0;
    playerScore_span.innerHTML = 0;
  }

  if (gameRoundWinner === 1) {
    computerScore += 1;
    computerScore_span.innerHTML = computerScore;
    console.log(`computer currently has ${computerScore}`);
  }

  if (gameRoundWinner === 2) {
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    console.log(`player currently has ${playerScore}`);
  }

  if (computerScore === 5) {
    gameEnd_div.innerHTML = `computer wins!`;
    computerScore = 0;
    playerScore = 0;
    // console.log(`Computer  Wins`);
  }

  if (playerScore === 5) {
    gameEnd_div.innerHTML = `you win!`;
    computerScore = 0;
    playerScore = 0;
    // console.log(`You  Win`);
  }
}

function computerPlay() {
  randomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return randomOption;
}

function playRound(a, b) {
  //   console.log(`You:${a} --- Computer:${b}`);

  if (
    (b === "Rock" && a === "Scissors") ||
    (b === "Scissors" && a === "Paper") ||
    (b === "Paper" && a === "Rock")
  ) {
    roundFeedBack.innerHTML = `You Lose! ${b} beats ${a}`;
    // console.log(`You Lose! ${b} beats ${a}`);
    return 1;
  } else if (
    (a === "Rock" && b === "Scissors") ||
    (a === "Scissors" && b === "Paper") ||
    (a === "Paper" && b === "Rock")
  ) {
    roundFeedBack.innerHTML = `You Lose! ${a} beats ${b}`;
    // console.log(`You Win! ${a} beats ${b}`);
    return 2;
  } else {
    roundFeedBack.innerHTML = `It's a tie! Play again`;
    // console.log(`It's a tie! Play again`);
    return 0;
  }
}

// game()
