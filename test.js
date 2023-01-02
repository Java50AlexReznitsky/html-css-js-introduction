let arr1 = [ // const newArray = [
    [1,2,3],//                  [1,1,1,1] 
    [1,2,3],//                  []
    [1,2,3],
    [1,2,3]
]
const newArray = []; 
let rows = arr1[0].length; // 3
let columns = arr1.length; // 4
for(let j = 0; j < rows; j++){
    newArray.push([]);
    for(let i = 0; i < columns; i++){
        newArray[j].push(arr1[i][j]);
    }
}
console.log(newArray);
