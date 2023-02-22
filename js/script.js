const divElement = document.querySelector('.test')
const showButton = document.querySelector('.show')
const hideButton = document.querySelector('.hide')
const divsArr = ["Hello", "how", "are", "you", "today", "?"]
divsArr.forEach(item => {
    divElement.innerHTML += `<p class="par hidden">${item}</p>`
})
const parClasses = document.querySelectorAll('.par');
showButton.addEventListener("click", showText);
hideButton.addEventListener("click", hideText);
// showButton.onclick = () => { showText() }
// hideButton.onclick = () => { hideText() }

function showText() {
    parClasses.forEach(item => {
        item.classList.add("is-shown")
        item.classList.remove("hidden")
    })
}
function hideText() {
    parClasses.forEach(item => {
        item.classList.add("hidden")
        item.classList.remove("is-shown")
    })
}
// function setActive() {
//     parClasses.forEach(item => {
//         item.classList.add("is-active")
//     })
// }
// function setNotActive() {
//     parClasses.forEach(item => {
//         item.classList.remove("is-active")
//     })
// }

// for (let i = 0; i < divsArr.length; i++) {
//     divElement.innerHTML += `<p class="par">${divsArr[i]}</p>`
// }