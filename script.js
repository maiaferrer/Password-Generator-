
// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max){
  return Math.floor(math.random()*(max - min) + min)
} 

function getRandomItem(list){
  return list[randomInt(0,list.length - 1)]
}

function generatePassword(){

  var userInput = window.prompt("how long do you want your password to be?")
  
  var passLength = parseInt(userInput)

  if(isNaN(passLength)){
   window.alert("that's not a number") 
   return
 }

 if(passLength < 8 || passLength > 128 ){
  window.alert ("password length should be between 8 and 128 characters")
  return
 }

 var passNumbers = window.confirm("would you like to include numbers in your password?")
 var passSymbols = window.confirm("would you like to include symbols in your password?")
 var passLowercase = window.confirm("would you like to include lowercase characters in your password?")
 var passUppercase = window.confirm("would you like to include uppercase characters in your password?")

 var numberArr = ["0","1","2","3","4","5","6","7","8","9"]
 var symbolArr = ["!","@","#","$","%","&","*"]
 var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 var optionArr = []

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
 
 var generatedPass = ""

 for (var index = 0; index < passLength; index++) {
  var randomList = getRandomItem(optionArr)
  var randomChar = getRandomItem(randomList)
  console.log(randomChar)
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

