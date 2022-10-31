
// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var possibleCharacters = ["!","@","#","$","%","^","&","*","(",")"]
var result = []

function getOptions (){
var passLength = parseInt (prompt("how many characters would you like in your password?"))
var passSpecialCharacters = confirm("click okay for special characters")
var passNumbers = confirm("click okay for numbers")
var passLowerCase = confirm("click okay for lower case")
var passUpperCase = confirm("click okay for upper case")
var passwordOptions = {
  passSpecialCharacters: passSpecialCharacters, 
  passNumbers: passNumbers,
  passLowerCase: passLowerCase,
  passUpperCase: passUpperCase,
  passLength: passLength
}
return passwordOptions
}
function generatePassword (){
var passwordOptions = getOptions () 
console.log (passwordOptions)
if (passwordOptions.passNumbers){
  possibleCharacters.concat(numbers)
}
for (let index = 0; index < passwordOptions.passLength; index++) {
  const element = possibleCharacters[index];
  console.log(element)
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

