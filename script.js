let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundWinner = "tie";
    }
    else if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {
        humanScore++;
        roundWinner = "human";
    } else {
        computerScore++;
        roundWinner = "computer";
    }
}

function isGameOver(){
    return humanScore >= 5 || computerScore >= 5;
}

const selectionDiv = document.querySelector(".selection");
const rockBtn = selectionDiv.querySelector("#rock-btn");
const paperBtn = selectionDiv.querySelector("#paper-btn");
const scissorsBtn = selectionDiv.querySelector("#scissors-btn");
const humanTurn = document.querySelector("p#human-turn");
const computerTurn = document.querySelector("p#computer-turn");
const humanResult = document.querySelector(".human-score");
const computerResult = document.querySelector(".computer-score");
const scoreMsg = document.querySelector(".score-msg");
const resultInfo = document.querySelector(".result");
const playAgainBtn = document.querySelector(".restart-btn");

humanResult.textContent = humanScore;
computerResult.textContent = computerScore;

function updateScoreInfo(winner, humanChoice, computerChoice){
    if (winner === 'tie'){
        scoreMsg.textContent = `${humanChoice} ties with ${computerChoice}`;
    } else if (winner === 'human') {
        scoreMsg.textContent = `${humanChoice} beats ${computerChoice}`;
    } else {
        scoreMsg.textContent = `${humanChoice} is beaten by ${computerChoice}`;
    }
}

function handleClick(humanChoice){
    if (!isGameOver()){
        computerChoice = getComputerChoice();
        humanTurn.textContent = humanChoice;
        computerTurn.textContent = computerChoice;

        playRound(humanChoice, computerChoice);

        humanResult.textContent = humanScore;
        computerResult.textContent = computerScore;
        updateScoreInfo(roundWinner, humanChoice, computerChoice);
    } else {
        showPlayAgain();
        
        console.log("game over");
        playAgainBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            humanResult.textContent = humanScore;
            computerResult.textContent = computerScore;
            console.log("play again button");
            playAgain();
        });        
    }
}

function showPlayAgain(){
    if (playAgainBtn.style.display === "" || playAgainBtn.style.display === "none"){
        playAgainBtn.style.display = "block";
    } 
    console.log(playAgainBtn.style);
}

function closePlayAgain(){
    if (playAgainBtn.style.display === "block"){
        playAgainBtn.style.display = "none";
    } 
}

function playAgain(){
    humanScore = 0;
    computerScore = 0;
    closePlayAgain();
}

// if (!isGameOver()){
//     rockBtn.addEventListener("click", () => handleClick('Rock'));
//     paperBtn.addEventListener("click", () => handleClick('Paper'));
//     scissorsBtn.addEventListener("click", () => handleClick('Scissors'));
// }

rockBtn.addEventListener("click", () => handleClick('Rock'));
paperBtn.addEventListener("click", () => handleClick('Paper'));
scissorsBtn.addEventListener("click", () => handleClick('Scissors'));