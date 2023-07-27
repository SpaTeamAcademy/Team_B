const rps = ["Schere", "Stein", "Papier"];

function rpsRandom(){
    let randomNumber = Math.floor(Math.random()* rps.length);
    let Item = rps[randomNumber];
    return Item
}

let choice = rpsRandom(rps);
console.log(choice);

// Scores
let playerScore = 0;
let compScore = 0;

function Winner(PlayerChoice, ComputerChoice){
    if(PlayerChoice === ComputerChoice) {
        return " Unentschieden!";
    } else if(
        (PlayerChoice === "Schere" && ComputerChoice === "Papier") ||
        (PlayerChoice === "Papier" && ComputerChoice === "Stein") ||
        (PlayerChoice === "Stein" && ComputerChoice === "Schere")
    ) {
        playerScore++; // Score wird je nach Winner erhöht
        return " Du hast gewonnen!";
    } else {
        compScore++;
        return " Du hast verloren!";
    }
}

// Score wird aktualisiert
function updateScore(){
    let showScore = "Spieler " + playerScore + " : " + compScore + " Computer";
    document.getElementById("Score").innerHTML = showScore;
}

function Game(PlayerChoice){
    const ComputerChoice = rpsRandom();
    const result = Winner(PlayerChoice, ComputerChoice);
    document.getElementById("ComputerChoice").textContent = 'Computer hat ' + ComputerChoice +  ' gewählt.';
    document.getElementById("PlayerChoice").textContent = 'Du hast ' + PlayerChoice + ' gewählt.';
    document.getElementById("result").textContent = result;
    updateScore();
}

document.getElementById("Schere").addEventListener("click", function () {
    Game("Schere");
});

document.getElementById("Stein").addEventListener("click", function () {
    Game("Stein");
});

document.getElementById("Papier").addEventListener("click", function () {
    Game("Papier");
});
