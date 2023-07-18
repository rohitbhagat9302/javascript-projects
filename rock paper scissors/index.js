const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebtns = document.querySelectorAll(".btn");
let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerturn();
    playertext.textContent = `Player: ${player}`;
    computertext.textContent = `Computer: ${computer}`;
    resulttext.textContent = checkwinner();
}));

function computerturn() {
    const random = Math.floor(Math.random() *3 ) + 1;
    switch(random){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkwinner(){
    if(computer == player){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}