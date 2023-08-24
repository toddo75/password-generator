// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = "abcdefghijklmopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var special = "!@#$%&*+,-./:;<=>?\^_`{|}~";
var superString = "";


function generatePassword() {
  var confirmLowerCase = confirm("Would you like to use lowercase letters? Click 'ok' for yes and 'cancel' for no.");
  
  var confirmUpperCase = confirm("Would you like to use uppercase letters? Click 'ok' for yes and 'cancel' for no.");
  
  var confirmNumber = confirm("Would you like to use numbers? Click 'ok' for yes and 'cancel' for no."); 
 
  var confirmSpecial = confirm("Would you like to use spectial characters? Click 'ok' for yes and 'cancel' for no.");
  
  var userAnswer5 = prompt("How many characters would you like your password? Type a number between 8 and 128, type number and press 'ok'.");
  

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

  if (confirmNumber === true) {
    console.log("before", superString);
    superString = superString + numbers
    console.log("after", superString);
  }

  if (confirmSpecial === true) {
    console.log("before", superString);
    superString = superString + special
    console.log("after", superString);
  }
  
  if (userAnswer5 < 8, userAnswer5 > 128) {
    alert("Your selection must be between 8 and 128! You must start over! Please hit 'ok'.");
    if (confirmuseranswer5 === true)
    return;
    }

console.log(userAnswer5);

x = userAnswer5;
charSet = superString,
password = "";
    for (var i = 0, n = charSet.length; i < x; ++i) {
        password += charSet.charAt((Math.random() * n));
    }
  
    return password;
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
