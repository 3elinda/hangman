// this keyword refers to an object
// ex= this.movies
// object with keys movies, animals, countries, and mixed & arrays of words as values
const wordBank = {
  movies: [
    `frozen`,
    `titanic`,
    `inception`,
    `avatar`,
    `moana`,
    `shrek`,
    `coco`,
    `dune`,
    `beetlejuice`,
    `tangled`,
    `aladdin`,
    `jaws`,
    `pinocchio`,
  ],
  animals: [
    `dolphin`,
    `elephant`,
    `sloth`,
    `turtle`,
    `penguin`,
    `otter`,
    `peacock`,
    `ostrich`,
    `rabbit`,
    `catepillar`,
    `lizard`,
    `hare`,
    `dog`,
    `canary`,
    `owl`,
    `mouse`,
    `dodo`,
    `lory`,
  ],
  countries: [
    `egypt`,
    `canada`,
    `norway`,
    `iceland`,
    `mexico`,
    `findland`,
    `greece`,
    `poland`,
    `thailand`,
    `france`,
    `brazil`,
    `canada`,
    `australia`,
  ],
  mixed: [
    `queen`,
    `hat`,
    `garden`,
    `mushroom`,
    `teacup`,
    `rabbit`,
    `maze`,
    `turtle`,
    `spain`,
  ],
};

const word = document.querySelector(".word");
const choiceMovies = document.getElementById("movies-btn");
const keyLetters = document.querySelectorAll(".key-letter");
const hangmanImage = document.querySelector(".hangman-box img");
const guesses = document.getElementById("numWrongGuesses");
const wonOrLost = document.querySelector(".wonOrLost");
const result = document.getElementById("result-h2");
const answer = document.getElementById("answer");
const tryAgain = document.querySelector(".border2");

document.querySelectorAll(".buttons").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    localStorage.setItem("chosenCategory", category);
    // stores chosen category in browser's localStorage
    window.location.href = "/html/hangman.html";
    // loads hangman page
  });
});

// localStorage.setItem("color", "blue"); saves it
// localStorage.getItem("color"); returns blue
// localStorage.removeItem("color"); deletes it

const category = localStorage.getItem("chosenCategory");
// reads category user cliked from localStorage

let chosenWord;

const theCategory = wordBank[category];
chosenWord = theCategory[Math.floor(Math.random() * theCategory.length)];

if (chosenWord) {
  // if a word was chosen
  // each letter in the chosen word
  for (let letter of chosenWord) {
    const newList = document.createElement("li");
    newList.className = "letter-border";

    const letterSpan = document.createElement("span");
    letterSpan.className = "letter";

    newList.appendChild(letterSpan);
    word.appendChild(newList);
    letterSpan.innerHTML = `${letter}`;
  }
}

const maxGuesses = 8;
let wrongGuesses = 0;
let rightLetters = 0;

keyLetters.forEach((keyLetter) => {
  keyLetter.addEventListener("click", () => {
    const clickedLetter = keyLetter.textContent.toLocaleLowerCase();

    if (chosenWord.includes(clickedLetter)) {
      document.querySelectorAll(".letter").forEach((span, index) => {
        if (chosenWord[index] === clickedLetter) {
          span.classList.add("show-letter");
        }
      });

      rightLetters++;
    } else {
      wrongGuesses++;
      hangmanImage.src = `/images/hangman-${wrongGuesses}.png`;
      guesses.innerHTML = `${wrongGuesses} / ${maxGuesses}`;
    }
    keyLetter.disabled = true;

    if (wrongGuesses === maxGuesses) {
      result.innerHTML = `Off with his head!<br>You lost!`;
      answer.innerHTML = `${chosenWord}`;

      wonOrLost.style.display = "flex";
    }

    if (rightLetters === chosenWord.length) {
      result.innerHTML = `Curiouser and curiouser!<br>You won!`;
      answer.innerHTML = `${chosenWord}`;

      wonOrLost.style.display = "flex";
    }
  });
});

tryAgain.addEventListener("click", () => {
  location.reload();
});
