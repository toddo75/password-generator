// query selector for the generate password button to trigger prompt window
var generateBtn = document.querySelector("#generate");

// sets variable for the characters that will build the password
var lowercase = "abcdefghijklmopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var special = "!@#$%&*+,-./:;<=>?\^_`{|}~";
var superString = "";

// sets questions for the user in the prompt window
function generatePassword() {
  var confirmLowerCase = confirm("Would you like to use lowercase letters? Click 'ok' for yes and 'cancel' for no.");
  
  var confirmUpperCase = confirm("Would you like to use uppercase letters? Click 'ok' for yes and 'cancel' for no.");
  
  var confirmNumber = confirm("Would you like to use numbers? Click 'ok' for yes and 'cancel' for no."); 
 
  var confirmSpecial = confirm("Would you like to use spectial characters? Click 'ok' for yes and 'cancel' for no.");

  // prompt windo to ask length of password
  var userAnswer5 = prompt("How many characters would you like your password? Type a number between 8 and 128, type number and press 'ok'.");

  // sets value of question of improper value is added by user
  var userAnswer6 = true;

  
// following 4 if statements to decipher which variable(s)/characters will be in the final password, console 'before' and 'after' were used
// to see the character choices in the final superstring were correct, not needed but helps to see the function
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
  
  // following 2 if statements to make sure superstring length is 8 or more and 128 or less if not when ok is clicked page reloads to reset the 
  // character values
  if (userAnswer5 < 8) {
    alert("Your selection must be between 8 and 128! You must start over! Please hit 'ok'.");
    if (userAnswer6 === true)
    location.reload();
    }

  if (userAnswer5 > 128) {
    alert("Your selection must be between 8 and 128! You must start over! Please hit 'ok'.");
      if (userAnswer6 === true)
    location.reload();
    }

// logs answer as to length of password
console.log(userAnswer5);

// function to radomly select correct amount of characters out of the final superstring
x = userAnswer5;
charSet = superString,
password = "";
    for (var i = 0, n = charSet.length; i < x; ++i) {
        password += charSet.charAt((Math.random() * n));
    }
    
    // returns password
    return password;
}


// Writes password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener to write the password function
generateBtn.addEventListener("click", writePassword);
