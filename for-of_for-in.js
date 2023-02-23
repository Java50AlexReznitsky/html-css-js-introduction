let arr = [4, 7, 9];
// }
// 1 ===============================================
for (let i = 0; i < arr.length; i++) {
    // console.log(i);
}
// 2 for in  ================================================
// used for iterate by index/key or item/value ==============
for (let key in arr) {
    // console.log(key)// expected 0 1 2 (indexes of array)
    // console.log(arr[key])// expected 4 7 9 (array elements)
}
// 3  for of  ===============================================
// used for iterate by item/value only ======================
for (let item of arr) {
    // console.log(item) // expected 4 7 9 (array elements)
}

//####################################################################
let allP = document.getElementsByTagName('p'); // get HTML collection
// console.log(allP)// expected HTMLCollection(3) [p, p, p]
for (let i = 0; i < allP.length; i++) {
    // console.log(i) // expected 0 1 2 (indexes)
    // console.log(allP[i]) // expected <p>1</p> <p>2</p> <p>3</p>
}
for (let key in allP) {
    // console.log(key)// expected 0 1 2 length item namedItem
    // console.log(allP[key])// expected:  item() { [native code] }
}
for (let item of allP) {
    // console.log(item) // expected <p>1</p> <p>2</p> <p>3</p>
}

//####################################################################
let qP = document.querySelectorAll('p'); // get NodeList
console.log(qP)// expected NodeList(3) [p, p, p]