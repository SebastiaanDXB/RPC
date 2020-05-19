let playerWins = 0;
let computerWins = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerSelection = undefined;
let computerSelection = undefined;
let tie = "It's a tie!";
let computerWin = "Computer wins!";
let playerWin = "You win!";
let onload = setInterval(reset(), 1);

if (onload != null) {
clearInterval(onload);
};

function reset() {
let playerWins = 0;
let computerWins = 0;
document.getElementById("result").innerText = "Best out of 5 wins. Let's Play!";
document.getElementById("computerselection").innerText = " ";
document.getElementById("playerScore").innerText === 0;
document.getElementById("computerScore").innerText === 0;
};


function rockFunc(playerSelection) {
    playerSelection == "rock" 
    let computerSelection = computerPlay()
    playRound("rock", computerSelection)   
};

function paperFunc(playerSelection) {
    playerSelection == "paper" 
    let computerSelection = computerPlay()
    playRound("paper", computerSelection)             
};

function scissorsFunc(playerSelection) {
    playerSelection == "scissors"
    let computerSelection = computerPlay()
    playRound("scissors", computerSelection)
};


function computerPlay(computerSelection) {
computerSelection = Math.floor(Math.random() * 3)
if (computerSelection === 0) {
    return "rock"
     
} else if (computerSelection === 1) {
    return "paper"

} else if (computerSelection === 2) {
    return "scissors"

}
};


function playRound(playerSelection, computerSelection) {

if (playerSelection == "rock" && computerSelection == "rock") {
    document.getElementById("result").innerText = tie
    document.getElementById("computerselection").innerText = "rock"
    return tie
    
} else if (playerSelection == "paper" && computerSelection == "paper") {
    document.getElementById("result").innerText = tie
    document.getElementById("computerselection").innerText = "paper"
    return tie
     
} else if (playerSelection == "scissors" && computerSelection == "scissors") {
    document.getElementById("result").innerText = tie
    document.getElementById("computerselection").innerText = "scissors"
    return tie
    

} else if (playerSelection == "rock" && computerSelection == "paper") {
    document.getElementById("result").innerText = computerWin
    document.getElementById("computerselection").innerText = "paper"
    document.getElementById("computerScore").innerText = computerWins+=1
    if (computerWins >= 5){
        alert("computer is the Winner")
    }
    return computerWin

} else if (playerSelection == "paper" && computerSelection == "scissors") {
    document.getElementById("result").innerText = computerWin
    document.getElementById("computerselection").innerText = "scissors"
    document.getElementById("computerScore").innerText = computerWins+=1
    if (computerWins >= 5){
        alert("computer is the Winner")
    }
    return computerWin

} else if (playerSelection == "scissors" && computerSelection == "rock") {
    document.getElementById("result").innerText = computerWin
    document.getElementById("computerselection").innerText = "rock"
    document.getElementById("computerScore").innerText = computerWins+=1
    if (computerWins >= 5){
        alert("computer is the Winner")
    }
    return computerWin


} else if (playerSelection == "rock" && computerSelection == "scissors") {
    document.getElementById("result").innerText = playerWin
    document.getElementById("computerselection").innerText = "scissors"
    document.getElementById("playerScore").innerText = playerWins+=1
    if (playerWins >= 5) {
        alert("You are the Winner")
    }
    return playerWin

} else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("result").innerText = playerWin
    document.getElementById("computerselection").innerText = "rock"
    document.getElementById("playerScore").innerText = playerWins+=1
    if (playerWins >= 5) {
        alert("You are the Winner")
    }
    return playerWin

} else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.getElementById("result").innerText = playerWin
    document.getElementById("computerselection").innerText = "paper"
    document.getElementById("playerScore").innerText = playerWins+=1
    if (playerWins >= 5) {
        alert("You are the Winner")
    }
    return playerWin
} 
};