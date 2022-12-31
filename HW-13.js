const randomArr = [];
for(let i = 0; i < 6; i++){
    randomArr.push([getRandomNumber(0,1)])
}

function getHtmlUl(array){
    const htmlString = '<ul class="list_class">';
    for(let i = 0; i < 6; i++){
        let colorAssigment = array[i] === 0? 'white': 'black';
        htmlString += `<li class="item_class"><div class=${colorAssigment}></div></li>`;
    }
    htmlString += '</ul>';
    return htmlString;
}
function getRandomNumber(min, max){
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min +1)); 
}
for(let i = 0; i < 10; i++){
    console.log(getRandomNumber(0, 10));

}