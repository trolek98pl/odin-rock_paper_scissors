const choices = []
choices.push("Rock", "Paper", "Scissors")

let player="null";
let computer="null"

player = document.getElementById("Choice");
player.addEventListener("change", game);

function game() {
    // playerChoice();
    computerChoice();

    switch(player.value) {
        case "Rock":
            pRock();
            break;
        case "Paper":
            pPaper();
            break;
        case "Scissors":
            pScissors();
            break;
        default:
            break;
    }
}

function playerChoice() {
    console.log("Player choice: " + player.value);
}

function computerChoice() {
    computer = choices[Math.floor((Math.random() * choices.length))];
    console.log("Computer choice: " + computer);
}

function pRock() {
    document.getElementById("player").innerText = player.value;
    document.getElementById('computer').innerText = computer;
}