// JavaScript code to get the current year
var currentYear = new Date().getFullYear();

// Display the current year in the HTML element with id="currentYear"
document.getElementById('currentYear').textContent = currentYear;

document.addEventListener('DOMContentLoaded', function () {
    // Get the <span> element where you want to display the modified date
    var modifiedDateSpan = document.getElementById('modifiedDate');

    // Get the last modified date of the document
    var lastModifiedDate = document.lastModified;

    // Update the content of the <span> element with the last modified date
    modifiedDateSpan.textContent = lastModifiedDate;
});