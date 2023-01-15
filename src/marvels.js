// references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;

// global variables                                         
const questionsWords = [
  ['Which big cat is the largest?', 'tiger'],
  ['Which is the largest planet in the solar system?', 'jupiter'],
  ['In which city did the Olympic games originate?', 'greece'],
  ['How many Olympic rings are there?', 'five'],
  ['What is the fastest aquatic animal?', 'sailfish'],
  ['Are worker bees male or female?', 'female'],
  ['Which color is an emerald?', 'green'],
  ['Whose nose grew longer every time he lied?', 'pinocchio'],
  ['Which US state is famous for Hollywood?', 'california']
];

let initialLettersNumber;
let remainedLettersNumber;
let questionAnswer;
// functions
function startGame() {
  wordInputElement.value = "";
  wordInputElement.readOnly = true;
  letterInputElement.readOnly = false;
  questionAnswer = getWord();
  questionElement.innerHTML = questionAnswer[0]
  playAgain.style.display = "none";
  resultMessage.innerHTML = "";
  wordElement.innerHTML = getWordDivs();
  initialLettersNumber = Math.ceil(questionAnswer[1].length * 0.3);
  remainedLettersElement.innerHTML = `${initialLettersNumber} letter(s) to guess`;
  remainedLettersNumber = initialLettersNumber;

}
function getWord() {
  const index = Math.trunc(Math.random() * questionsWords.length);
  return questionsWords[index];
}
function getWordDivs() {
  let wordDivs = "";
  for (let i = 0; i < questionAnswer[1].length; i++) {
    wordDivs += `<div class="letter" id="letter${i}">${questionAnswer[1][i]}</div>`;
  }
  return wordDivs;
}

function checkWord() {
  if (wordInputElement.value === questionAnswer[1]) {
    finishGame("Congratulations, you guessed the word!");
    for (let i = 0; i < questionAnswer[1].length; i++) {
      document.getElementById(`letter${i}`).style.backgroundColor = "white";
    }
  } else {
    finishGame("Sorry, the word is incorrect.");
  }
}

function processLetter() {
  if (remainedLettersNumber > 0) {
    remainedLettersNumber--;
    remainedLettersElement.innerHTML = `${remainedLettersNumber} letter(s) to guess`;
    for (let i = 0; i < questionAnswer[1].length; i++) {
      if (letterInputElement.value === questionAnswer[1][i]) {
        document.getElementById(`letter${i}`).style.backgroundColor = "white";
      }
    }
    letterInputElement.value = "";
    if (remainedLettersNumber === 0) {
      remainedLettersElement.innerHTML = 'Your attempts to guess the letter are over, guess the word!'
      wordInputElement.readOnly = false;
      letterInputElement.readOnly = true;
    }
  }
}

function takeChance() {
  wordInputElement.readOnly = false;
  letterInputElement.readOnly = true;
}

function finishGame(message) {
  resultMessage.innerHTML = message;
  playAgain.style.display = "block";
  wordInputElement.readOnly = true;
  letterInputElement.readOnly = true;
  for (let i = 0; i < questionAnswer[1].length; i++) {
    document.getElementById(`letter${i}`).style.backgroundColor = "white";
  }
}
startGame();