//get the current year
const currentYear = new Date().getFullYear();

//insert the current year into the element with id="current-year"
document.getElementById('current-year').textContent = currentYear;

//alerts the value of last modified
//alert(document.lastModified);
//get the last modified date of the doc
const lastModified = document.lastModified;
//display the last modified date in the element with the id="last-modified"
document.getElementById('last-modified').textContent = lastModified;

//calculate the wind chill factor

const temperature = document.querySelector('#temp').innerText;
const windSpeed = document.querySelector('#wind').innerText;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        return 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }
    else {
        return 'N/A'
    }
}

const windChill = calculateWindChill(temperature, windSpeed);
