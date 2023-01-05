const array = [10,20,30,-10,11,100];
// array.splice(2,2);
//                      false
//                  true == false
//                 1 < 5
//              true < 5
// console.log(3 < 4 < 5 == false)
// const index = array.indexOf(30);
// array.splice(index, 1); // 1 is a number of deleted elements from array
// array.splice(index); //  without the second parameter, splice will delete the rest of array, starting from index
// array.splice(index, undefined, -1000);// removes all, and adds -1000 to array ->> [-1000]
// const res = array.splice(index, 1); // keeps the deleted element in variable - res 
// array.splice(index, 0, -10, -20); // 0 - nothing will be deleted, -10, -20 will be inserted after index
// replace
// array.splice(index, 2,20);// replaces 
// array.splice(index, 1, ...ar1);

//slice

// const numbersPerPage = 2;
// const page = 2;
// const firstIndex = (page - 1) * numbersPerPage
// const pageNumbers = array.slice(firstIndex, firstIndex + numbersPerPage);
// const arr1 = array.map(multiply2);
// function multiply2(number){
//     return number * 2;
// }
// const arr2 = array.map(function(number, index){
//     return index + 1 + '. ' + number;
// })
// const arr3 = array.map(function(number){
//     return `<li>${number}</li>`;
// })
// const ulElement = `<ul>${arr3.join('')}</ul>`;

//HW #14
//1.
function coloringString(str1, str2){
    //str1 - string
    //str2 - string
    // the string should be with the same length
    //returns array of following colors
    //if str2[i] exists in str1 but in another position - i-th color yellow
    //if str2[i] == str1[i] -i-th color green
    //if str2[i] doesn't exist in str1 - i-th color red
    //For getting array from string, there is the following expression Array.from(string);
    //Examples: coloringString("pappy", "apple") => ["yellow", "yellow","green","red","red"]
    //coloringString("pappy", "pappy") => ["green","green","green","green","green"]
}
//getting array of numbers in a given range Example as follows
const min = 5;
const max = 15;
const ar4 = array.filter(function(number){
    return number >= min && number <= max;
})
//getting new array of the elements of the source array with even index
const ar5 = array.filter(function(__, index){
    return index % 2 === 0;
})
//2.
function getNumbersWithDigitsAmount(digitsAmount, array){
    // takes digitsAmount - given number of digits; array - any array of numbers
    // return array of only numbers from the given array comprising of the given number
    //examples: getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) returns [100, -100]
}

