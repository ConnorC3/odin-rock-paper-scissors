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

    choice = choice.toLowerCase()

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("Invalid Input");
    } else {
        return choice;
    }
}

console.log(getHumanChoice());