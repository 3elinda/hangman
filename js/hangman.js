// this keyword refers to an object
// ex= this.movies
// object with keys movies, animals, countries, and random & arrays of words as values
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
    `alien`,
    `gladiator`,
    `cinderella`,
    `interstellar`,
    `parasite`,
    `oppenheimer`,
    `twilight`,
    `hereditary`,
    `arrival`,
    `braveheart`,
    `joker`,
    `whiplash`,
    `carrie`,
    `us`,
    `scream`,
    `smile`,
    `predator`,
    `elf`,
    `clueless`,
    `ratatouille`,
    `annihilation`,
    `it`,
    `insidious`,
    `brave`,
    `up`,
    `soul`,
    `luca`,
    `encanto`,
    `sinister`,
    `uncharted`,
    `morbius`,
    `halloween`,
    `ghostbusters`,
    `scarface`,
    `old`,
    `divergent`,
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
    `cat`,
    `tiger`,
    `zebra`,
    `monkey`,
    `kangaroo`,
    `panda`,
    `whale`,
    `horse`,
    `bear`,
    `lion`,
    `giraffe`,
    `shark`,
    `fox`,
    `wolf`,
    `deer`,
    `crocodile`,
  ],
  countries: [
    `egypt`,
    `canada`,
    `norway`,
    `iceland`,
    `mexico`,
    `finland`,
    `greece`,
    `poland`,
    `thailand`,
    `france`,
    `brazil`,
    `canada`,
    `australia`,
    `argentina`,
    `china`,
    `germany`,
    `india`,
    `indonesia`,
    `italy`,
    `japan`,
    `nigeria`,
    `russia`,
    `spain`,
    `vietnam`,
    `ukraine`,
    `switzerland`,
    `yemen`,
    `hungary`,
    `zimbabwe`,
    `estonia`,
    `luxembourg`,
    `armenia`,
  ],
  random: [
    `queen`,
    `hat`,
    `garden`,
    `mushroom`,
    `teacup`,
    `rabbit`,
    `maze`,
    `turtle`,
    `spain`,
    `door`,
    `hole`,
    `castle`,
    `cards`,
    `chess`,
    `cake`,
    `tea`,
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
    `alien`,
    `gladiator`,
    `cinderella`,
    `interstellar`,
    `parasite`,
    `oppenheimer`,
    `twilight`,
    `hereditary`,
    `arrival`,
    `braveheart`,
    `joker`,
    `whiplash`,
    `carrie`,
    `us`,
    `scream`,
    `smile`,
    `predator`,
    `elf`,
    `clueless`,
    `ratatouille`,
    `annihilation`,
    `it`,
    `insidious`,
    `brave`,
    `up`,
    `soul`,
    `luca`,
    `encanto`,
    `sinister`,
    `uncharted`,
    `morbius`,
    `dolphin`,
    `elephant`,
    `sloth`,
    `penguin`,
    `otter`,
    `peacock`,
    `ostrich`,
    `catepillar`,
    `lizard`,
    `hare`,
    `dog`,
    `canary`,
    `owl`,
    `mouse`,
    `dodo`,
    `lory`,
    `cat`,
    `tiger`,
    `zebra`,
    `monkey`,
    `kangaroo`,
    `panda`,
    `whale`,
    `horse`,
    `bear`,
    `lion`,
    `giraffe`,
    `shark`,
    `fox`,
    `wolf`,
    `deer`,
    `crocodile`,
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
    `argentina`,
    `china`,
    `germany`,
    `india`,
    `indonesia`,
    `italy`,
    `japan`,
    `nigeria`,
    `russia`,
    `spain`,
    `vietnam`,
    `ukraine`,
    `switzerland`,
    `yemen`,
    `hungary`,
    `zimbabwe`,
    `estonia`,
    `luxembourg`,
    `armenia`,
    `croquet`,
    `cheshire`,
    `mad`,
    `curious`,
  ],
};

document.querySelectorAll(".buttons").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    localStorage.setItem("chosenCategory", category);
    // stores chosen category in browser's localStorage
    window.location.href = "/html/hangman.html";
    // loads hangman page
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // localStorage.setItem("color", "blue"); saves it
  // localStorage.getItem("color"); returns blue
  // localStorage.removeItem("color"); deletes it

  const category = localStorage.getItem("chosenCategory");
  // reads category user cliked from localStorage

  const categoryName = document.getElementById("category-name");
  if (categoryName) {
    categoryName.innerHTML = category;
  }

  const imgBackground = document.querySelector(".section1");
  const word = document.querySelector(".word");
  const choiceMovies = document.getElementById("movies-btn");
  const keyLetters = document.querySelectorAll(".key-letter");
  const hangmanImage = document.querySelector(".hangman-box img");
  const guesses = document.getElementById("numWrongGuesses");
  const wonOrLost = document.querySelector(".wonOrLost");
  const result = document.getElementById("result-h2");
  const answer = document.getElementById("answer");
  const tryAgain = document.querySelector(".border2");

  if (!category || !wordBank[category]) {
    alert("No category chosen. Please go back and pick one");
    window.location.href = "/html/options.html";
  }

  // categoryName.innerHTML = category;

  let chosenWord;

  const theCategory = wordBank[category];
  chosenWord = theCategory[Math.floor(Math.random() * theCategory.length)];

  if (word && chosenWord) {
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
        let correctCount = 0;

        document.querySelectorAll(".letter").forEach((span, index) => {
          if (
            chosenWord[index] === clickedLetter &&
            !span.classList.contains("show-letter")
          ) {
            span.classList.add("show-letter");
            correctCount++;
          }
        });

        rightLetters += correctCount;
      } else {
        wrongGuesses++;
        hangmanImage.src = `/images/hangman-${wrongGuesses}.png`;
        guesses.innerHTML = `${wrongGuesses} / ${maxGuesses}`;
        imgBackground.style.background = "rgba(255, 255, 255, 0.211)";
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
});
