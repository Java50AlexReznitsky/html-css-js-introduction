//1.__________________________________________________
function evenOddSort(array) {
  return array.sort((e1, e2) => (Math.abs(e1) % 2) - (Math.abs(e2) % 2));
}
const ar1 = [-3, 8, 7, -4, 0];
console.log(`Even first: ${evenOddSort(ar1)}`);

//2.__________________________________________________
function oddEvenSort(array) {
  return array.sort((e1, e2) => (Math.abs(e2) % 2) - (Math.abs(e1) % 2));
}
console.log(`Odd first: ${oddEvenSort(ar1)}`);

//3._________________________________________________
function evenAscOddDesc(array) {
  return array.sort((e1, e2) => {
    if (e1 % 2 === 0 && e2 % 2 !== 0) {
      return -1;
    } else if (e1 % 2 === 0 && e2 % 2 === 0) {
      return e1 - e2;
    } else if (e1 % 2 !== 0 && e2 % 2 !== 0) {
      return e2 - e1;
    }
  });
}
console.log(`Even ascending, odd descending: ${evenAscOddDesc(ar1)}`);

const ar2 = [1, 3, 0, 24, 335, -125];
function getMin(array) {
  return array.reduce((accum, item) =>  item < accum ? item : accum, Infinity);
}
console.log(`Get min of [1, 3, 0, 24, 335, -125] : ${getMin(ar2)}`);
function getMax(array){
  return array.reduce((accum, item) => item > accum? item:accum,-Infinity)
}
console.log(`Get max of [1, 3, 0, 24, 335, -125] : ${getMax(ar2)}`);

function getAvg(array){
  return +((array.reduce((accum,item)=>accum +=item,0) / array.length).toFixed(2))
}
console.log(`Get avg of [1, 3, 0, 24, 335, -125] : ${getAvg(ar2)}`);
function getMinAvgMax(array){
  const result =[];
  let min,avg,max,sum = 0;
  result[0] = min;
  result[1] = avg;
  result[2] = max;
  avg = array.reduce((accum,item) => {
    if(item < array[0]){
      min = item;
    }else if(item > array[0]){
      max = item
    }
    return accum+ item;
  }) / array.length;
  return result;
}
console.log(getMinAvgMax(ar2))
