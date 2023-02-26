//                   "124"   2 //341
//                   "123"   2
function shiftRound(string, shift) {
    let checkedSymbol;
    let strArr = [];
    for (let i = 0; i < string.length; i++) {
        checkedSymbol = checkSymbol(string[i], shift)
        if ((checkedSymbol + shift) > 5) {
            checkedSymbol = Math.abs(5 - (shift + checkedSymbol));
            strArr.push(checkedSymbol);
        }
        else if (Number.isFinite(checkedSymbol)) {
            strArr.push(checkedSymbol + shift);
        }
        else {
            strArr.push(string[i])
        }
    }
    return strArr;
}
console.log(shiftRound("01b23j45", 4).join(""));

function checkSymbol(symbol, shift) {
    let symbolNum = +symbol;
    if (symbolNum >= 0 && symbolNum <= 5) {
        return symbolNum;
    }
    else { return false }
}