//get the current year
const currentYear = new Date().getFullYear();

//insert the current year into lthe element with id="current-year"
document.getElementById('current-year').textContent = currentYear;

//get the last modified date of the doc
const lastModified = document.lastModified;
//display the last modified date in the element with the id="last-modified"
document.getElementById('last-modified').textContent = lastModified;

//County Name options
const county = [
    {
        id: "davis",
        name: "Davis County"
    },
    {
        id: "morgan",
        name: "Morgan County"
    },
    {
        id: "weber",
        name: "Weber County",
    },
    {
        id: "other",
        name: "Other",
    },
];
//populate select Product Options
function populateCountyOptions() {
    const countySelect = document.getElementById("countySelect");

    county.forEach(county => {
        const option = document.createElement("option");
        option.value = county.id;
        option.textContent = county.name;
        countySelect.appendChild(option);
    });
}
//call the function to populate the select options
populateCountyOptions();

//require a checkbox to be completed
function validateCheckboxes() {
    var checkboxes = document.getElementsByName("features");
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);

    if (!checkedOne) {
        alert("Please select a checkbox.");
        return false;
    }
    return true;
}

