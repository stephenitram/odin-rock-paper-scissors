


/**
 * computerPlay() to select random string from an array | Helper function 1
 */
const gameOptions = ["Rock", "Paper", "Scissors"]

function computerPlay () {
    randomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomOption
}



/**
 * capitalize() the first letter of string | Helper function 2
 */

 function capitalize(string) {
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();    
    }
    let newString = array.join(" ")
    return newString
}



function playRound (a, b) {
    console.log(`You:${a} --- Computer:${b}`);

    if ((b === 'Rock' && a === 'Scissors') || (b === 'Scissors' && a === 'Paper') || (b === 'Paper' && a === 'Rock')) {
        console.log(`You Lose! ${b} beats ${a}`);
        return 1
    } else if ((a === 'Rock' && b === 'Scissors') || (a === 'Scissors' && b === 'Paper') || (a === 'Paper' && b === 'Rock')) {
        console.log(`You Win! ${a} beats ${b}`);
        return 2
    } else {
        console.log(`It's a tie! Play again`);
        return 0
    }

}

// console.log(playRound(playerSelection,computerSelection));


/**
 * 
 
 * Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that 
 * keeps score and reports a winner or loser at the end.You have not officially learned how to “loop” over code 
 * to repeat function calls… 
 * 
 * At this point you should be using console.log() to display the results of each round and the winner at the end.
 */




function game(){
    console.log(`A GAME OF ROCK PAPER SCISSORS [ YOU vs THE COMPUTER ]`);
    let playerScore = 0
    let computerScore = 0
    let numOfPlay = 0

    while (numOfPlay !== 5 ) {
        /**
     * playRound(playerSelection, computerSelection) and returns a string that declears 
     * the winner of the round e.g. "you loose! Paper beats Rock"
     */
    const playerSelection = capitalize(prompt(`rock, paper or Scissors ?`))
    const computerSelection = computerPlay()

    const gameRoundWinner = playRound(playerSelection, computerSelection)
    
    if (gameRoundWinner === 1) {
        computerScore += 1
        
        console.log(`computer currently has ${computerScore}`);
    }

    if (gameRoundWinner === 2) {
        playerScore += 1
        
        console.log(`player currently has ${playerScore}`);
    }

    if (computerScore === 5 || playerScore === 5) {
        numOfPlay = 5
    }

    }


    

    if (computerScore === 5) {
        console.log(`Computer  Wins`);
    } else {
        console.log(`You  Win`);
}

       
}

game()


