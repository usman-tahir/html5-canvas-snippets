/*global console*/

(function () {
  "use strict";
  
  var Debugger = function () {};
  
  // Basic debugger
  Debugger.log = function (message) {
    try {
      console.log(message);
    } catch (exception) {
      return;
    }
  };
  
  function initGame() {
    // Variables for game stup
    var guesses = 0,
      message = "Guess a letter between 'a' (lower) and 'z' (higher).",
      letters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      ],
      today = new Date(),
      letterToGuess = "",
      higherOrLower = "",
      lettersGuessed,
      gameOver = false,
      letterIndex;
    
    letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    lettersGuessed = [];
    
    function drawScreen() {
      // Background
      context.fillStyle = "#ffffaa";
      context.fillRect(0, 0, 500, 300);
      
      // Box
      context.strokeStyle = "#000000";
      context.strokeRext(5, 5, 490, 290);
      
      context.textBaseline = "top";
      
      // Date
      context.fillStyle = "#000000";
      context.font = "10px Sans-Serif";
      context.fillText(today, 150, 10);
      
      // Message
      context.fillStyle = "#ff0000";
      context.font = "14px Sans-Serif";
      context.fillText(message, 125, 30); // The guesses
      context.fillStyle = "#109910";
      context.font = "16px Sans-Serif";
      context.fillText("Guesses: " + guesses, 215, 50);
      
      // Whether the guess is higher or lower
      context.fillStyle = "#000000";
      context.font = "16px Sans-Serif";
      context.fillText("Higher or lower: " + higherOrLower, 150, 125);
      
      // Letters that have been guessed
      context.fillStyle = "#ff0000";
      context.font = "16px Sans-Serif";
      context.fillText("Letters guessed: " + lettersGuessed.toString(), 10, 260);
      
      if (gameOver) {
        context.fillStyle = "#ff0000";
        context.font = "40px Sans-Serif";
        context.fillText("You got it!", 150, 180);
      }
      
    }
    
    function eventKeyPressed(e) {
      if (!gameOver) {
        var letterPressed = String.fromChar(e.keyCode),
          guessIndex;
        letterPressed = letterPressed.toLowerCase();
        guesses += 1;
        lettersGuessed.push(letterPressed);
        
        if (letterPressed === letterToGuess) {
          gameOver = true;
        } else {
          letterIndex = letters.indexOf(letterToGuess);
          guessIndex = letters.indexOf(letterPressed);
          Debugger.log("guessIndex =", guessIndex);
          
          if (guessIndex < 0) {
            higherOrLower = "That is not a letter.";
          } else if (guessIndex > letterIndex) {
            higherOrLower = "Your guess was too high.";
          } else {
            higherOrLower = "Your guess was too low.";
          }
        }
        drawScreen();
      }
    }
    
    window.addEventListener("keydown", "eventKeyPressed", true);
    drawScreen();
    
  }
}());