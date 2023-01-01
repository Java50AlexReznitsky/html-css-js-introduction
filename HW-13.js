function getHtmlUl(elementsNum){
    let htmlString = '<ul class="list_class">';
    const htmlArr = [];
    for(let i = 0; i < elementsNum; i++){
        let colorAssigment = getRandomNumber(0,1) === 0? 'white': 'black';
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
console.log(getHtmlUl(5));