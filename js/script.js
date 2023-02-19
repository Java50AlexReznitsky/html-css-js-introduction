const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const reset = document.querySelector('.reset');
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const section1 = document.querySelector('.section1');
const buttons = document.querySelectorAll("button")
const a = +input1.value
const b = +input2.value
function deactivateButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("is-not-active")
    }
}


plusBtn.onclick = () => {
    deactivateButtons()
    plusBtn.classList.remove('is-not-active')
    plusBtn.classList.add('is-active')
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} + ${input2.value} = ${+input1.value + +input2.value}`
};
minusBtn.onclick = () => {
    deactivateButtons()
    minusBtn.classList.remove('is-not-active')
    minusBtn.classList.add('is-active')
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} - ${input2.value} = ${+input1.value - +input2.value}`
    // input1.value = ''
};
divideBtn.onclick = () => {
    deactivateButtons()
    divideBtn.classList.remove('is-not-active')
    divideBtn.classList.add('is-active')
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} / ${input2.value} = ${+input1.value / +input2.value}`
    // input1.value = ''
};
multiplyBtn.onclick = () => {
    deactivateButtons()
    multiplyBtn.classList.remove('is-not-active')
    multiplyBtn.classList.add('is-active')
    section1.innerHTML = ''
    section1.hidden = false
    reset.hidden = false
    section1.innerHTML += `${input1.value} * ${input2.value} = ${+input1.value * +input2.value}`
    // input1.value = ''
};
reset.onclick = () => {
    deactivateButtons()
    section1.innerHTML = ''
    section1.hidden = true
    input1.value = ''
    input2.value = ''
    reset.hidden = true
    // plusBtn.classList.remove('is-active')

}