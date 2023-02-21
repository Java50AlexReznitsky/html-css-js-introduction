let s1 = [22, 33, 44];
let s2 = [55, ...s1, 66];
// console.log(s2)

//1.shallow copy
let s3 = [...s1];
s3.push(66)
s1.push(67, 55, 98)
// console.log(s3) //expected [22, 33, 44, 66]
// console.log(s1) //expected [22, 33, 44, 67, 55, 98]

//2.concat
let s4 = [...s1, ...s2]
// console.log(s4) //expected [22, 33, 44, 67, 55, 98, 55, 22, 33, 44, 66]

//3.unshift
let s5 = [999, ...s1]
// console.log(s5) //expected [999, 22, 33, 44, 67, 55, 98]

//4.
let p = document.querySelectorAll('p');
p = [...p]
let res = p.map(item => item.textContent);
let res2 = p.map(item => item.classList);
let res3 = p.map(item => item.className);
let res4 = p.map(item => item.id);
// console.log(res) //expected ['one', 'two', 'three']
// console.log(p) //expected ['one', 'two', 'three']
// console.log(res4) 

//5 deleting doubles
let s6 = [2, 3, 2, 3, 3, 4, 6, 6, 5, 4, 5, 2];
let s7 = [...new Set(s6)];
// console.log(s7) // expected [2, 3, 4, 6, 5]

//6 string
let s8 = "Abba"
let s9 = [...s8];
// console.log(s9) // expected ['A', 'b', 'b', 'a']

//7 vs Objects
let obj1 = { name: "test", param1: 15 };
let obj2 = { name: "test2", param2: 33 };
let resObj1 = { ...obj1 };
// console.log(resObj1) //expected {name: 'test', param1: 15}

//8 unite objects
let resObj2 = { ...obj1, ...obj2 };
//                           value of name: was updated with the last value
// console.log(resObj2) //expected {name: 'test2', param1: 15, param2: 33}

//9 "add" new key to obj
let obj3 = { ...obj1, bike: "Honda" } // creating a new object with new key/value
// console.log(obj3)// expected {name: 'test', param1: 15, bike: 'Honda'}
//-------------------------------------------------------------------------//

//rest
function f1(a, ...b) {
    // console.log(a)
    // console.log(b) //Array
}
f1(1, 2) //expected 1,[2]
f1(1, 2, 3, 4, 5)//expected 1,[2,3,4,5]
f1(1, 2, [3, 4], 5, [8, 9], true, "Hi")//expected 1, [2, Array(2), 5, Array(2), true, 'Hi']

//example with variable (destructuring)
let [s10, ...s11] = [100, 200, 300, 400];
console.log(s11)// expected [200,300,400]

