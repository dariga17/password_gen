// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pwLength = prompt("How long do you want your password? (8-128)")
  
  if(pwLength < 8 || pwLength > 128) {
    return generatePassword()
  }
  var chosenChars = ""
  var lowerChars = "abcdefghijklmnopqrstuvwxyz"
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var symbols = "~!#$%&'()*+,-./:;<=>?@[^_`{|}" 
  
  var includeLower = confirm("Do you want to include lowercase characters?"); 
  if(includeLower) {
    chosenChars += lowerChars
  }

  var includeUpper = confirm("Do you want to include uppercase characters?"); 
  if(includeUpper) {
    chosenChars += upperChars
  }

  var includeSymbol = confirm("Do you want to include symbols?"); 
  if(includeSymbol) {
    chosenChars += symbols
  }

  var includeNumber = confirm("Do you want to include numbers?"); 
  if(includeNumber) {
    chosenChars += numbers
  }

  var randomizedPw = ""
  for(i=0; i<pwLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenChars.length)
    var randomizedChar = chosenChars[randomIndex]
    randomizedPw += randomizedChar
  }

  return randomizedPw
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
