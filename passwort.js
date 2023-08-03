
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "^°!§$%&/()=?{[]}@€µ<>|+*~#";

  let lowerCheck = document.getElementById("Lowercase");
  let upperCheck = document.getElementById("Uppercase");
  let numberCheck = document.getElementById("Numbers");
  let specialCheck = document.getElementById("SpecialCharacters");

function generatePasswort() {
  var PWlength = 10;
  var passwort = [];
  if(lowerCheck.checked != true && upperCheck.checked != true && numberCheck.checked != true && specialCheck.checked != true){
    alert("Nichts ausgewählt; Bitte mindestens eine Eingabe auswählen");
  } else{
    do {
      if(passwort.length >= PWlength){break}
      else if(lowerCheck.checked == true){  
        passwort.push(getRandomChar(lowercase)); 
      }
      if(passwort.length >= PWlength){break}
      else if(upperCheck.checked == true){
        passwort.push(getRandomChar(uppercase));
      }
      if(passwort.length >= PWlength){break}
      else if(numberCheck.checked == true){
        passwort.push(getRandomChar(numbers));
      }
      if(passwort.length >= PWlength){break}
      else if(specialCheck.checked == true){
        passwort.push(getRandomChar(special));
      }
    }
    while(passwort.length != PWlength);
    shufflePassword(passwort);
    let randomizedPW = passwort.toString()
    randomizedPW = randomizedPW.replaceAll(",", "")
    document.getElementById("generatedpassword").innerText = "Dein Passwort ist: " + randomizedPW;
  }
}

function getRandomChar(characters) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }

function shufflePassword(password){
  for(let i = password.length - 1; i > 0; i--){
    let randomizer = Math.floor(Math.random() * i + 1);
    [password[i], password[randomizer]] = [password[randomizer], password[i]]
  }
}
