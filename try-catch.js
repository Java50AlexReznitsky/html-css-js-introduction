let a = 5;
a *= 2;
try {
    document.querySelector('.test').innerHTML = a;
}
catch (err) {
    // errorDisplay(err);
    // console.log(err.name)
    // console.log(err.message)
    // console.log(err.stack)

}
// finally {// is optional, performed at any case, with or without Errors
//     console.log('the program is working')
// }
// console.log(a)


function errorDisplay(error) {
    // alert(error)
    console.log('Print error here')
}
function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero!")
    }
    return a / b;
}
let res = 0;
try {
    res = divide(1, 0);
    console.log("No problems found")
}
catch (err) {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
