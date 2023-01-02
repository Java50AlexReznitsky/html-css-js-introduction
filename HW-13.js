const HTMLelements = 10;
const randomArr = [];
for(let i = 0; i < HTMLelements; i++){
    randomArr.push(getRandomNumber(0,1));
}
function getHtmlUl(array){
    let htmlString = '<ul class="list_class">';
    const htmlArr = [];
    for(let i = 0; i < array.length; i++){
        let colorAssigment = array[i] === 0? 'white': 'black';
        htmlArr.push(`<li class="item_class"><div class=${colorAssigment}></div></li>`);
    }
    htmlString += htmlArr.join('') + '</ul>';
    return htmlString;
}
function getRandomNumber(min, max){
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min +1)); 
}
console.log(getHtmlUl(randomArr));
//**************************************************************************************** */
const matrix = [
    [1,2],
    [1,5],
    [1,7]
];
console.log(matrix);
console.log('\n');

function transpMatrix(matrix){
    const newMatrix = [];
    let rows = matrix[0].length; //2
    let columns = matrix.length; //3
    for(let j = 0; j < rows; j++){
        newMatrix.push([]);
        for(let i = 0; i < columns; i++){
            newMatrix[j].push(matrix[i][j]);
        }
    }
return newMatrix;
}
console.log(transpMatrix(matrix));