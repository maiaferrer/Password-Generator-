
// Assignment Code
var generateBtn = document.querySelector("#generate");

// create functions for randimizing integers and characters
function randomInt(min, max) {
  if (!max) {
    max - min
    min - 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
} 

function getRandomItem(list) {
  return list[randomInt(0,list.length - 1)]
}

// function for password generation
function generatePassword(){
// promps for user for password generation
// (ask about length of password)
  var userInput = window.prompt("how many characters do you want your password to be?")
  
  var passLength = parseInt(userInput)
// prompt to ensure user only uses numbers
  if(isNaN(passLength)){
   window.alert("oops, that's not a number!") 
   return
 }
// make sure password stays between 8-128 characters
 if(passLength < 8 || passLength > 128 ){
  window.alert ("oops, your password length should be between 8 and 128 characters")
  return
 }
// create prompts for password additions
 var passNumbers = window.confirm("would you like to include numbers?")
 var passSymbols = window.confirm("would you like to include symbols?")
 var passLowercase = window.confirm("would you like to include lowercase characters?")
 var passUppercase = window.confirm("would you like to include uppercase characters?")

// Create Arrays for all possible options
 var numberArr = ["0","1","2","3","4","5","6","7","8","9"]
 var symbolArr = ["!","@","#","$","%","&","*"]
 var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 var optionArr = []
//  pushes the array into optionArr for password generation
 if (passNumbers === true) {
  optionArr.push(numberArr)
 }
 if (passSymbols === true) {
  optionArr.push(symbolArr)
 }
 if (passLowercase === true) {
  optionArr.push(lowercaseArr)
 }
 if (passUppercase === true) {
  optionArr.push(uppercaseArr)
 }

//  Create default for user if no parameters were chosen
if (optionArr.length === 0) {
  optionArr.push(lowercaseArr)
}

 var generatedPass = ""

for (var index = 0; index < passLength; index++) {
   var randomList = getRandomItem(optionArr)
   var randomChar = getRandomItem(randomList)
   generatedPass += randomChar
}

return generatedPass 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

