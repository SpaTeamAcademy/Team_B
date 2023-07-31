function generatePasswort() {
    const kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz";
    /* const Großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Zahlen = "0123456789";
    const Sonderzeichen = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    */
   var Länge = 10;
   let passwort = "";

   passwort += getRandomChar(kleinbuchstaben);

   for (let i = passwort.length; i < Länge; i++) {
    const charType = Math.floor(Math.random() * 0);
    switch (charType) {
        case 0:
        passwort += getRandomChar(kleinbuchstaben); 
    }

   }
   document.getElementById("generatedpassword").innerText = "Dein Passwort ist = " + passwort
}


function getRandomChar(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }

