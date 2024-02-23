const choices = [] // array to store possible choices
choices.push("Rock", "Paper", "Scissors")

const results = [] // array to store possible result
results.push("Won", "Lost", "Draw")

let player="null"; // player's choice
let computer="null" // computer's choice

player = document.getElementById("Choice");
player.addEventListener("change", game);

function game() { // main function
    computerChoice(); // random computer's choice

    switch(player.value) { // depending on what the user has chosen
        // program chooses the right case
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

function computerChoice() {
    computer = choices[Math.floor((Math.random() * choices.length))]; // random choice
}

function pRock() { //player chooses rock
    document.getElementById('player').innerText = player.value; // display selected choices
    document.getElementById('computer').innerText = computer;

    // select correct result and send it to <span> in html
    if (computer === "Scissors") {
        document.getElementById('result').innerText = "You " + results[0]
    } else if (computer === "Paper") {
        document.getElementById('result').innerText = "You " + results[1]
    } else {
        document.getElementById('result').innerText = results[2]
    }
}

function pPaper() { //player chooses paper
    document.getElementById('player').innerText = player.value;
    document.getElementById('computer').innerText = computer;

    if (computer === "Rock") {
        document.getElementById('result').innerText = "You " + results[0]
    } else if (computer === "Scissors") {
        document.getElementById('result').innerText = "You " + results[1]
    } else {
        document.getElementById('result').innerText = results[2]
    }
}

function pScissors() { //player chooses scissors
    document.getElementById('player').innerText = player.value;
    document.getElementById('computer').innerText = computer;

    if (computer === "Paper") {
        document.getElementById('result').innerText = "You " + results[0]
    } else if (computer === "Rock") {
        document.getElementById('result').innerText = "You " + results[1]
    } else {
        document.getElementById('result').innerText = results[2]
    }
}