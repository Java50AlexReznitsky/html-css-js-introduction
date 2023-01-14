const questionWords = [["question1", "answer1"], ["question2", "answer2"]];
let wordElement;
let res;
function fillLettersDivs() {
    const arrayWord = Array.from(questionWords[0][1]);
    wordElement = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    }, '');
    return res;
}
console.log(fillLettersDivs())