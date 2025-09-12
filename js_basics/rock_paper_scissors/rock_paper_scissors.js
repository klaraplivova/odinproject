function getComputerChoice () {
    let choice = Math.random();
    if (choice < 1/3) {
        return "rock";
    } else if (choice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
} 

function getHumanChoice () {
    let choice = prompt("Rock, paper, scissors?")
    return choice
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

     function playRound (humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("Draw!")
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You loose: ${computerChoice} beats ${humanChoice}`);
            computerScore: ++computerScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You loose: ${computerChoice} beats ${humanChoice}`); 
            computerScore: ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You loose: ${computerChoice} beats ${humanChoice}`);
            ++computerScore; 
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win: ${humanChoice} beats ${computerChoice}`); 
            ++humanScore;
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win: ${humanChoiceChoice} beats ${computerChoice}`); 
            humanScore = ++humanScore; 
        } else {
            console.log(`You win: ${humanChoiceChoice} beats ${computerChoice}`); 
            humanScore = ++humanScore;
        }    
    }  

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore === computerScore) {
        console.log("It's a draw. Play again!")
    } else if (humanScore > computerScore) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game.")
    }
}   