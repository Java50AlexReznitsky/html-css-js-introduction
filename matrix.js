const matrix = [[5,0],[5,2],[1,3]];
console.log(matrix);

function transpMatrix(matrix){
    // if(matrix.length === 0){
    //     return [];
    // }
    // for(let row = 1; row< matrix.length; row++){
    //     if(! matrix[row] || ! matrix[row-1] || matrix[row].length != matrix[row -1].length){
    //         console.log("Error");
    //         return undefined;
    //     }
    // }
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