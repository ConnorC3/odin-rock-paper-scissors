function getComputerChoice(){
    choice = Math.floor(Math.random()*3);

    switch (choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice(){
    choice = prompt("Type rock, paper, or scissors");

    if (choice === null) { // if human clicks cancel on prompt
        console.log("Player cancelled");
        return;
    }

    choice = choice.toLowerCase()

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("Invalid Input");
    } else {
        return choice.charAt(0).toUpperCase() + choice.slice(1);
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie game!");
    } else if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    for (i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection !== undefined && humanSelection !== null){
            playRound(humanSelection, computerSelection);
        }
    }

    humanScore > computerScore ? console.log("You win!") : console.log("You lose!");
}

playGame();