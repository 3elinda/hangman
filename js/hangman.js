// const list = [
//   {
//     word: "cat",
//     hint: "feline"
//   },
//   {
//     word: "spain",
//     hint: "europe"
//   }
// ]

// this keyword refers to an object
// ex= this.movies

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
    `pinocchio`
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
    `lory`
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
    `spain`
  ]
};

const word = document.querySelector(".word")
const choiceMovies = document.getElementById("movies-btn");
const image = document.querySelector(".section1")

image.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.className = "letter";
  newList.innerHTML = `h`;
  word.appendChild(newList);
});