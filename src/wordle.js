//references to DOM element
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trailsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//variables required for JS logic
const wordsForGuess = [
  "pappy",
  "apple",
  "table",
  "gold",
  "silver",
  "index",
  "script",
  "peace",
  "picture",
];
let trials;
let word;
let flGameOver = false;
//functions
function startGame() {
  word = getWord();
  fillLettersDivs();
  flGameOver = false;
  trials = word.length + 1;
  playAgainElement.style.display = "none";
  gameResultElement.innerHTML = "";
  trailsElement.innerHTML = `remained trials ${trials + " " + word}`;
}
function getWord() {
  const index = Math.trunc(Math.random() * wordsForGuess.length);
  return wordsForGuess[index];
}
function fillLettersDivs() {
  const arrayWord = Array.from(word);
  guessLettersElement.innerHTML = arrayWord.reduce(function (res, cur) {
    res = res + '<div class="letter-box"></div>';
    return res;
  }, "");
  lettersDivs = document.querySelectorAll(".letter-box");
}
function onChange() {
  if (flGameOver) {
    alert("game is over, press play-again");
  } else {
    const trialWord = guessInputElement.value;
    trials--;
    trailsElement.innerHTML = `remained trials ${trials}`;
    if (trialWord.length !== word.length) {
      alert("wrong number of letters");
    } else {
      coloringWord(trialWord);
    }
  }
}
function coloringWord(trialWord) {
  const arWord = Array.from(trialWord);
  arWord.forEach(function (letter, index) {
    lettersDivs[index].innerHTML = letter;
    lettersDivs[index].style.color = getColor(letter, index);
  });
}
function getColor(letter, index) {
  let res = "red";
  if (word.includes(letter)) {
    res = word[index] == letter;
  }
  return res;
}
function finishGame() {
  //TODO
}
//actions
startGame();
