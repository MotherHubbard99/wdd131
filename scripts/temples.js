//get the current year
const currentYear = new Date().getFullYear();

//insert the current year into the element with id="current-year"
document.getElementById('current-year').textContent = currentYear;

//alerts the value of last modified
alert(document.lastModified);
//get the last modified date of the doc
const lastModified = document.lastModified;
//display the last modified date in the element with the id="last-modified"
document.getElementById('last-modified').textContent = lastModified;

//hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    //Toggle the open class to show/hide nav menu
    navigation.classList.toggle('open');
    //toggle the open class on the ham menu to change the icon
    hamButton.classList.toggle('open');
});