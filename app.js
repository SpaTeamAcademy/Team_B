const rps = ["Schere", "Stein", "Papier"];

function rpsRandom(){
    let randomNumber = Math.floor(Math.random()* rps.length);
    let Item = rps[randomNumber];
    return Item
}

let choice = rpsRandom(rps);
console.log(choice);

function Winner(PlayerChoice, ComputerChoice){
    if(PlayerChoice === ComputerChoice) {
        return " Unentschieden!";
    } else if(
        (PlayerChoice === "Schere" && ComputerChoice === "Papier") ||
        (PlayerChoice === "Papier" && ComputerChoice === "Stein") ||
        (PlayerChoice === "Stein" && ComputerChoice === "Schere")
    ) {
        return " Du hast gewonnen!";
    } else {
        return " Du hast verloren!";
    }
}

function Game(PlayerChoice){
    const ComputerChoice = rpsRandom();
    const result = Winner(PlayerChoice, ComputerChoice);
    document.getElementById("ComputerChoice").textContent = 'Computer hat ' + ComputerChoice +  ' gewählt.';
    document.getElementById("PlayerChoice").textContent = 'Du hast ' + PlayerChoice + ' gewählt.';
    document.getElementById("result").textContent = result;
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
