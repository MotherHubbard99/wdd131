//review.html
//initialize
const visitsDisplay = document.querySelector(".visits");

//get the stored value for the numVisits
//If missing, then assign ot to zero
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//Determine if this is the first visit or display the number of visits
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = "Thank you for completing your first survey. ";
}

//increment the number of visits by 1
numVisits++;

//store the new visit total into localStorage
localStorage.setItem("numVisits-ls", numVisits);