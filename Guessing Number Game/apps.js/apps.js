let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");

checkButton.onclick = () => {
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        result.textContent = "Enter a number between 1 and 100.";
        result.style.color = "red";
    } else if (guess === randomNumber) {
        result.textContent = `🎉 Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        result.style.color = "#1fb633";
        checkButton.disabled = true;
        restartButton.style.display = "block";
    } else {
        result.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
        result.style.color = "orange";
    }

    guessInput.value = ""; 
    guessInput.focus();  
};

restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    result.textContent = "";
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
};
