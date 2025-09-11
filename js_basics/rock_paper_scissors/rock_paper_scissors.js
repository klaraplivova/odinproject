function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice < 33) {
        return computerChoice = "rock";
    } else if (computerChoice < 66) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
} 

function getHumanChoice () {
    let humanChoice = prompt("Rock, paper, scissors?").toLowerCase()
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    
}