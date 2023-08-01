function generatePasswort() {
    const kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz";

   var Länge = 10;
   let passwort = "";


   for (let i = passwort.length; i < Länge; i++) {
        passwort += getRandomChar(kleinbuchstaben); 

   }
   document.getElementById("generatedpassword").innerText = "Dein Passwort ist = " + passwort
}


function getRandomChar(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }

