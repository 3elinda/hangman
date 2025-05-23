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
    newList.className = "letter";
    newList.innerHTML = `${letter}`;
    word.appendChild(newList);
  }
  // showLetters();
}

// function showLetters() {
// const keyLetters = document.querySelectorAll(".key-letter");

// keyLetters.forEach((keyLetter) => {
//   keyLetter.addEventListener("click", () => {
//     if(chosenWord.includes(keyLetter)) {
//     letter.classList.add("show-letter")
//     }
//   })
// })
// }

// plan: select all keyboard buttons at once, loop through them, add event listeners to each, and give them the show class
// maybe use .includes() and .disabled so button isn't cliked on again
