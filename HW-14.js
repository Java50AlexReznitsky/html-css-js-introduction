function coloringString(str1, str2){
    const strAr1 = Array.from(str1);
    const strAr2 = Array.from(str2);
    if(str1.length != str2.length){
        return "Error: Strings must have equal length"
    }
    return strAr2.map(function(char, index){
        if(char === strAr1[index]){
            return "green"
        }
        else{
            return strAr1.includes(char)? "yellow": "red";
        }
    })
}

console.log(coloringString("pappy", "apple"))
console.log(coloringString("puppy", "pupp"))
console.log(coloringString("puppy", "puppo"))
console.log(coloringString("puppy", "yetti"))
console.log("\n")
//********************************************************************* */
function getNumbersWithDigitsAmount(digitsAmount, array){
    return array.filter(function(num){
          return Math.abs(num).toString().length === digitsAmount;
        })
}
const ar1 = [10,23,564,854,1002,1]
console.log(getNumbersWithDigitsAmount(2, ar1));
console.log(getNumbersWithDigitsAmount(3, ar1));
console.log(getNumbersWithDigitsAmount(4, ar1));
