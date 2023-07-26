$(document).ready(function() {
    const targetNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let attempts = 0;
  
    $("#guessButton").on("click", function() {
      const guess = parseInt($("#guessInput").val());
  
      if (isNaN(guess) || guess < 1 || guess > 100) {
        $("#message").text("Please enter a valid number between 1 and 100.");
      } else {
        attempts++;
        if (guess === targetNumber) {
          $("#message").text(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        } else if (guess < targetNumber) {
          $("#message").text("Try again. The number is higher.");
        } else {
          $("#message").text("Try again. The number is lower.");
        }
      }
    });
  });
  
