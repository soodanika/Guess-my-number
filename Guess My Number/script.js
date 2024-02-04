'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess)


    // When there is no input 
    if (!guess) {
        displayMessage("⛔ No Number!");
    }

    // When player wins
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Answer!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("🎇 You Lost the Game!");
            document.querySelector(".score").textContent = 0;
        }
    }

    // Reset Game
    document.querySelector(".again").addEventListener("click", () => {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector("body").style.backgroundColor = "#222";
        displayMessage("Start guessing...");
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".guess").value = "";
    })

})