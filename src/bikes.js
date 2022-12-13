const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");

const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.querySelector("#hide-button");
const HIDDEN = 'hidden';
function showDetails(){
    mainElement.classList.remove("hidden");
}
function hideDetails(){
    mainElement.classList.add(HIDDEN)
}  
function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    showDetails()
}
for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    })
}
hideButtonElement.addEventListener("click", hideDetails);
