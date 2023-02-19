//destructuring
//------------------------------
const a = [100, 200, 300, 400];
let [s10, , s11] = a
// console.log(s10) //expected 100
// console.log(s11) //expected 300

//string
// let[s1,s2] = 'intel inside'
// console.log(s1) //expected i
// console.log(s2) //expected n

// let [s1, s2] = 'intel inside'.split(" ")
// console.log(s1) //expected intel
// console.log(s2) //expected inside
//                  s1   ,  ,     s2
let [s1, , s2] = 'intel pentium inside'.split(" ")
// console.log(s1) //expected intel
// console.log(s2) //expected inside

//set
let [s3, s4] = new Set('hello');
// console.log(s3);
// console.log(s4);
//by default

// let [s5, s6] = [999]
// console.log(s5,s6) //expected 999 undefined

// let [s5, s6 = 'mahai'] = [999] // s6 default value is 'mahai'
// console.log(s5, s6) //expected 999 'mahai'

let [s5 = 'hi', s6 = 'mahai'] = [] // if the array is empty, default values will be assigned
// console.log(s5, s6) //expected 'hi' 'mahai'

//Objects
let obj = {
    fname: 'Alex',
    passport: true,
    age: 87
}
let { age, ppp, fname } = obj;
console.log(age, ppp, fname) //expected 87 undefined 'Alex'
//by variables
// let { age: x, fname: y, } = obj; // fields age and fname assigned to x,y variables 
// console.log(x, y); // expected 87 'Alex'

let { age: x, fname: y, best: z = 55 } = obj; // there is no field 'best', so default value is 55 
console.log(x, y, z); // expected 87 'Alex' 55
