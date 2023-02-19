const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const reset = document.querySelector('.reset');
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const section1 = document.querySelector('.section1');
const a = +input1.value
const b = +input2.value

plusBtn.onclick = () => {
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} + ${input2.value} = ${+input1.value + +input2.value}<br>`
};
minusBtn.onclick = () => {
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} - ${input2.value} = ${+input1.value - +input2.value}<br>`
    // input1.value = ''
};
divideBtn.onclick = () => {
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} / ${input2.value} = ${+input1.value / +input2.value}<br>`
    // input1.value = ''
};
multiplyBtn.onclick = () => {
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} * ${input2.value} = ${+input1.value * +input2.value}<br>`
    // input1.value = ''
};
reset.onclick = () => {
    section1.innerHTML = ''
    section1.hidden = true
    input1.value = ''
    input2.value = ''
    reset.hidden = true

}