const ROCK = 1
const PAPER = 2
const SCISSOR = 3
const computerResponse = computerPlay(1, 3)
const playerSelection = "rock"
const computerSelection = computerPlay()
let tie = "It's a tie!"
let computerWin = "Computer wins!"
let playerWin = "You win!"

function computerPlay(min,max) {
    return Math.floor(Math.random()
    * (max - min + 1) + min);
}

// alert(computerResponse)

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == "rock" && computerSelection == 1) {
        return tie
    } else if (playerSelection == "rock" && computerSelection == 2){
        return playerWin
    } else if (playerSelection == "rock" && computerSelection == 3){
        return computerWin
    }
}


console.log(playRound(playerSelection, computerSelection))