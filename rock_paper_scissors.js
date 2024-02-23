const choices = []
choices.push("Rock", "Paper", "Scissors")

let player="null";
let computer="null"

player = document.getElementById("Choice");
player.addEventListener("change", game);

function game() {
    playerChoice();
    computerChoice();
}

function playerChoice() {
    console.log("Player choice: " + player.value);
}

function computerChoice() {
    computer = choices[Math.floor((Math.random() * choices.length))];
    console.log("Computer choice: " + computer);
}