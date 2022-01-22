console.log(`A GAME OF ROCK PAPER SCISSORS [ YOU vs THE COMPUTER ]`);


/**
 * computerPlay() to select random string from an array
 */
const gameOptions = ["Rock", "Paper", "Scissors"]

function computerPlay () {
    randomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomOption
}

/**
 * capitalize() the first letter of string
 */

 function capitalize(string) {
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();    
    }
    let newString = array.join(" ")
    return newString
}


/**
 * playRound(playerSelection, computerSelection) and returns a string that declears 
 * the winner of the round e.g. "you loose! Paper beats Rock"
 */
const playerSelection = capitalize(prompt(`rock, paper or Scissors ?`))
const computerSelection = computerPlay()

function playRound (a, b) {
    console.log(`You: ${a}`);
    console.log(`Computer: ${b}`);

    if ((b === 'Rock' && a === 'Scissors') || (b === 'Scissors' && a === 'Paper') || (b === 'Paper' && a === 'Rock')) {
        return `You Loose! ${b} beats ${a}`
    } else if ((a === 'Rock' && b === 'Scissors') || (a === 'Scissors' && b === 'Paper') || (a === 'Paper' && b === 'Rock')) {
        return `You Win! ${a} beats ${b}`
    } else {
        return `It's a tie! Play again`
    }

}
console.log(playRound(playerSelection, computerSelection));

