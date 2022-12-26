// let str = "123m"
// let num = parseInt(str) + 10 + 'm';
// let str1 = "js.5";
// let numInt = parseInt (str1, 32);
// let numFloat = parseFloat (str1);

function myParseInt(str, base){
    base = base || 10;
    let res = 0;
    let sign;
    if(getCode(str[0]) >= base){
        return NaN;
    }
    let i = 0;
    if(str[i] === '-' || str[i] === '+'){
        sign = str[i]
        i++
    }
    for(i; i < str.length; i++){
        if(str[i] === '.' || getCode(str[i]) >= base){
            break;
        }
    res = res * base + getCode(str[i])
    }
    return sign? Number(sign + res): res;
}

function getCode(symbol){
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res =  symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
console.log("*************** myParseInt ***************")
console.log(myParseInt("+168.35"));
console.log(myParseInt("18f"));
console.log(myParseInt("-123"));
console.log(myParseInt("123m"));
console.log(myParseInt("m123"));
console.log(myParseInt("-ff", 16));
console.log("\n")
console.log("*************** myToString ***************")

function myToString(number, base){
    base = base || 10;
    let signPos;
    number > 0? signPos = true: signPos = false;
    let numToStr = '' + Math.abs(number);
    let res = '';
    const splitNum = numToStr.split(".");
    let wholeNum = +splitNum[0];
    let fractNum = +splitNum[1];
    res = res + digitToSymbol(wholeNum, base);
    if(fractNum > 0){
        res = res + '.' + digitToSymbol(fractNum, base);
    }
    return signPos? res: '-' + res;
}
function digitToSymbol(number, base){
    let result = ''
    do{
        const digit = number % base;
        const symbol = getSymbol(number % base);
        result = symbol + result;
        number = Math.trunc(number / base);

    }while(number)
    return result;
}
function getSymbol(digit){
    const codeA = 'a'.charCodeAt();//97
    let symbol;
    if(digit < 10){
        symbol = + digit;
    }else{
        const codeASCII = digit - 10 + codeA
        symbol = String.fromCharCode(codeASCII);
    }
    return symbol;
}let number = -123.45
console.log('toString: ' + number.toString(16))
console.log('myToString: ' + myToString(number, 16))

