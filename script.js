// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = "abcdefghijklmopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var special = "!@#$%^&*()";
var superString = "";

function generatePassword() {
  var confirmLowerCase = confirm("Would you like to use lowercase letters? Type Y or N");
  
  var confirmUpperCase = confirm("Would you like to use uppercase letters?");
  
  var confirmNumber = confirm("Would you like to use numbers?"); 
 
  var confirmSpecial = confirm("Would you like to use spectial characters?");
  
  var userAnswer5 = prompt("How many characters would you like your password? Type a number between 8 and 128");
  

  if (confirmLowerCase === true) {
    console.log("before", superString);
    superString = superString + lowercase
    console.log("after", superString);
  }

  if (confirmUpperCase === true) {
    console.log("before", superString);
    superString = superString + uppercase
    console.log("after", superString);
  }

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
