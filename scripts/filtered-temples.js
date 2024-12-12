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

//hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cochabamba Bolivia Temple",
        location: "Alto Quero Quero, Cochabamba Bolivia",
        dedicated: "2000, April 30",
        area: 33302,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
    },
    {
        templeName: "Bangkok Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2019, January 26",
        area: 48525,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },
    {
        templeName: "Louisville Kentucky Temple",
        location: "Crestwood, Kentucky",
        dedicated: "2000, March 19",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/louisville-kentucky-temple/louisville-kentucky-temple-5829-main.jpg"
    },

];
/*
// Check if the home link is initially active and show all temples
if (homeLink.classList.contains("active")) {
    // Show all temples 
    createTempleCard(temples);
}

const homeLink = document.querySelector("#home");
//use an arrow function
homeLink.addEventListener("click", () => {
    //show all temples
    createTempleCard(temples)
}); */

const nonUtahLink = document.querySelector("#nonUtah");
//use an arrow function
nonUtahLink.addEventListener("click", () => {
    //create a nonUtah array
    createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    //create an array or 2000 and newer temples
    createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) > 1999));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    //create an array of temple areas of 20,000 sq ft or less
    createTempleCard(temples.filter(temple => temple.area > 20000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    //create an array of temple areas of 20,000 sq ft or less
    createTempleCard(temples.filter(temple => temple.area <= 20000));
});

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    //clear the previous filter
    document.querySelector(".temples-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temples-grid").appendChild(card);
    })
}