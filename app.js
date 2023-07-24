const rps = ["Schere", "Stein", "Papier"];

function rpsRandom(){
    let randomNumber = Math.floor(Math.random()* rps.length);
    let Item = rps[randomNumber];
    return Item
}

let result = rpsRandom(rps);
console.log(result)


var PChoice = " ";
var CompChoice = rpsRandom;


var UserContainer = document.querySelector("#UserContainer");

UserContainer.addEventListener("click", ChoiceHandler);

function ChoiceHandler(event) {
    if (!event.target.classList.contains("emoji")) return;

    PChoice = event.target.textContent;
    UserContainer.innerHTML = `<button class="emoji">${PChoice}</button>`;
    CompChoice = rpsRandom;
    Winner();
};

function Winner() {
    let result = document.querySelector("#result-message");
    let resultmessage = " ";

    if (PChoice === CompChoice) {
        resultmessage = "Unentschieden!";
    } else if (PChoice = "Stein" && CompChoice = "Schere") {
        resultmessage = "Du hast Gewonnen!";
    } else if (PChoice ="Papier" && CompChoice = "Stein") {
        resultmessage = "Du hast Gewonnen!";
    } else if (PChoice ="Schere" && CompChoice = "Papier") {
        resultmessage = "Du hast Gewonnen!";
    } else {
        resultmessage = "Du hast Verloren!";
    }

}




