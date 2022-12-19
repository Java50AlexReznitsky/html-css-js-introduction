const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsSound = document.querySelector("#audio");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const detailsContainer = document.querySelector(".details-container")
const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.querySelector("#hide-button");
const HIDDEN = 'hidden';
const IS_POINT = "is-point"
const IS_MUTE = "muted"
function showDetails(){
    mainElement.classList.remove("hidden");
    detailsContainer.classList.add(IS_POINT)
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT)
    })
}
function hideDetails(){
    mainElement.classList.add(HIDDEN)
    detailsSound.src = IS_MUTE
}  
function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsSound.src = anchor.getAttribute("data-details-sound");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    showDetails()
}
for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    })
}
hideButtonElement.addEventListener("click", hideDetails);
