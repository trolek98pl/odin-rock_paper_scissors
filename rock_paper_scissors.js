const choices = []
choices.push("Rock", "Paper", "Scissors")

let player="null";
player = document.getElementById("Choice");
player.addEventListener("change", game);

function game() {
    playerChoice();
}

function playerChoice() {
    // if (document.getElementById("Choice") != null) {
    //     let player = document.getElementById("Choice").value;
    // }
    
    // player = player.options[player.selectedIndex].value;

    console.log(player.value);
    // console.log("Test Console.")
}