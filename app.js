// const ar = [];
// const ar1 = [1,2,3,4]
// // .push - adds elements to array
// ar.push(...ar1); //... = spread elements of ar1 in ar
// ar.push('abc');
function getRandomNumber(min, max){
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));

}
function getRandomMatrix(rows, columns, min, max){
    const matrix = [];
    for(let i = 0; i < rows; i++){
        matrix.push([]);
        for(let j = 0; j < columns; j++){
            matrix[i].push(getRandomNumber(min, max))
        }
    }
    return matrix;
}//                         rows colmn min max  
// const matrix = getRandomMatrix(3, 4, 0, 1);
const ar10 = [1,2,3,4,5];
const str = ar10.join('_') // by defaults the delimeter is: ","
//HTML
//<ul class="list_class">
//  <li class="item_class">
//      <div class="white" || "black"></div>
//  </li>
//  ...............
//</ul>
//<ul class="list_class">
//  <li class="item_class">
//      <div class="black" || "black"></div>
//  </li>
//  ...............
//</ul>
function getHtmlUl(array){
    //TODO
    return htmlString;
} 
const strClass = getRandomNumber(0,1) == 0? 'white': 'black';
const str1 = 'hello world';
const str2 = 'hello' + '"world"'
const str3 = `class="${strClass}"`;
function matrixTransp(matrix){
    //TODO
    //
    //returns transp matrix
    //matrix = [1,2], //input
    //         [3,4],
    //         [4,5]
    //         ]
    //
    // output[1,3,4]
    //       [2,4,5]
}
