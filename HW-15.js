//1.__________________________________________________
function evenOddSort(array) {
    return array.sort(function(e1 , e2){
        return (Math.abs(e1) % 2) - (Math.abs(e2) % 2);
    });
}
const ar1 = [-3,8,7,4,0];
console.log(`Even first: ${evenOddSort(ar1)}`);

//2.__________________________________________________
function oddEvenSort(array){
    return array.sort(function(e1, e2){
        return (Math.abs(e2) % 2) - (Math.abs(e1) % 2);
    })
}
console.log(`Odd first: ${oddEvenSort(ar1)}`);

//3._________________________________________________[-3,8,7,4,0];
function evenAscOddDesc(array) {
    return array.sort(function(e1, e2){
        if(e1 % 2 === 0 && e2 % 2 !== 0){
            return -1;
        }
        if(e2 % 2 === 0 && e1 % 2 !== 0){
            return 1;
        }
        if(e1 % 2 === 0 && e2 % 2 === 0){
            return e1 - e2
        }
        if(e1 % 2 !== 0 && e2 % 2 !== 0){
            return e2 - e1
        }
        
    })
}
console.log(`Even asc, odd desc: ${evenAscOddDesc(ar1)}`);

