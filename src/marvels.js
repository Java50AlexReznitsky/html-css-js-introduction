//references to HTML
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionWords = [["question1", "answer1"], ["question2", "answer2"]];
let currentIndex = 0;
let initialLetterNumbers;
let remainedLetterNumber;
//functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionWords[currentIndex][0]
    playAgain.style.display = "none"
    resultMessage.innerHTML='';
    wordElement.innerHTML = getWordDivs;
}
function checkWord() {
  //TODO
}
function processLetter() {
  //TODO
}
function takeChance() {
  //TODO
}
function finishGame() {
  //TODO
}
startGame();
//actions
