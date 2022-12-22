
function getDigitsSum(number){
    if(number == 0){
        return 0; 
    }
    let sum = 0;
    while(number){
        let rem = Math.trunc(number % 10);
        number = Math.trunc(number / 10);
        sum = sum + rem;
    }
    return sum;
}
let num1 = 123
let num2 = -12
let num3 = 0
console.log("Digits sum #1 = " + getDigitsSum(num1))
console.log("Digits sum #2 = " + getDigitsSum(num2))
console.log("Digits sum #3 = " + getDigitsSum(num3))
console.log("\n")
/**************************************************/         

function computeExpression(expressionStr){
    return eval(expressionStr)
}
let expression1 = 5 + 3 - 7
let expression2 = "2 * (4 + 6)"
let expression3 = 2 ** 2 + 8 + '2 + 2'
console.log("Computed expression #1 = "+ computeExpression(expression1))
console.log("Computed expression #2 = "+ computeExpression(expression2))
console.log("Computed expression #3 = "+ computeExpression(expression3))
console.log("\n")
/**********************************************************************/

function printAnanas(){
    console.log(("A" + "S" / "A" + "A" + "S").toLowerCase())
}
printAnanas()
console.log("\n")
/**********************************************************************/
 
function reverse(number){
    number = Math.trunc(number)
    if(number == 0){
        return 0;
    }
    let revNum = 0;
    while(number){
        revNum = revNum * 10 + number % 10;
        number = Math.trunc(number /= 10)
    }
     return revNum + ""    
    }
let numb1 = -527.25
let numb2 = 287.05
let numb3 = -1
let _1 = reverse(numb1); console.log(_1 + " is a reversed integer of " + numb1);
let _2 = reverse(numb2); console.log(_2 + " is a reversed integer of " + numb2);
let _3 = reverse(numb3); console.log(_3 + " is a reversed integer of " + numb3);