let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// Select elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingInput = form.querySelector("#GuessNum"); // fixed ID
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingDisplay = cardBody.querySelector(".remaining"); // fixed class

// Create win/loss message once
const scoreBoard = document.createElement("p");
scoreBoard.classList.add("large-text");
cardBody.appendChild(scoreBoard);

// Event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const guess = Number(guessingInput.value);

  if (!guess || guess < 1 || guess > 5) {
    resultText.innerHTML = "Please enter a number between 1 and 5.";
    return;
  }

  attempts++;

  if (attempts <= totalAttempts) {
    checkResult(guess);
    guessingInput.value = "";
    remainingDisplay.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
  }

  if (attempts === totalAttempts) {
    guessingInput.disabled = true;
    checkButton.disabled = true;
  }
});

// Game logic
function checkResult(userGuess) {
  const randomNumber = getRandomNumber(5);
  if (userGuess === randomNumber) {
    resultText.innerHTML = `🎉 Congratulation You won!`;
    totalWons++;
  } else {
    resultText.innerHTML = `❌ You lost! The number was: ${randomNumber}`;
    totalLosts++;
  }

  scoreBoard.innerHTML = `Wins: ${totalWons} | Losses: ${totalLosts}`;
}

// Random number generator
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
