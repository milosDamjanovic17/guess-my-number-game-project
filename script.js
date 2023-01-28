"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Disko Partizani";

console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".number").textContent);

document.querySelector(".number").textContent = 80;

console.log(document.querySelector(".score").textContent);

console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = 50;
*/

/* kako bi u javi bila napisana showMessage metoda 
  public void showNumber(String message){
    document.querySelector(".message").textContent = message;
  }
*/

let secretNumber = Math.trunc(Math.random() * 30) + 1;
// cheat: console.log(`${secretNumber}`);
let scoreNumber = 30;
let highScore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// eventListener for Check! button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // invalid input
  if (!guess) {
    showMessage("Invalid input!");

    //when client guesses the number
  } else if (guess === secretNumber) {
    showMessage("Congratulations!");
    document.querySelector(".number").textContent = secretNumber;

    //let's change the background color when client guesses the number, CSS manipulation
    document.querySelector("body").style.backgroundColor = "#60b347";

    // expand the number when client guesses the number
    document.querySelector(".number").style.width = "30rem";

    document.querySelector("h1").textContent = "YOU WON!";
    // assign current score to high score
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high!" : "Too low!";
      showMessage(guess > secretNumber ? "Too high!" : "Too low!");
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      showMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("h1").textContent = "GAME OVER";
      document.querySelector("body").style.backgroundColor = "#c14242";
    }
  }
});

// lets regulate what Again! button should do and what needs to be reset
document.querySelector(".again").addEventListener("click", function () {
  scoreNumber = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  // cheat: console.log(`${secretNumber}`);

  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  showMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

/*
  ALL THIS CODE BELOW IS REPLACED WITH  L:61 else if(guess !== secretNumber)
//when guess is less than secretNumber
  else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".message").textContent = "Too low!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("h1").textContent = "GAME OVER";
      document.querySelector("body").style.backgroundColor = "#c14242";
    }

    //when guess is higher than secretNumber
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".message").textContent = "Too high!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("h1").textContent = "GAME OVER";
      document.querySelector("body").style.backgroundColor = "#c14242";
    }
  }
  */
