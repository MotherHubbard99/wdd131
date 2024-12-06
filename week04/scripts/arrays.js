//MAP
const steps = ["one", "two", "three"];
function listTemplate(step) {
    //the html string made from step
    return <li>${step}</li>;
}
// use map to convert the list from strings to HTML: stepsHtml is a copy of the original steps
const stepsHtml = steps.map(listTemplate);
// set the innerHTML
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ["A", "B", "A"]
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

//REDUCE
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example
// this is the same thing as above, but with an arrow function
//const pointsTotal = gpaPoints.reduce((total, item) => total + item);
//const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
//const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//FILTER
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
//Keep words that are less than 6 charcters
const result = fruits.filter((fruit) => fruits.length < 6);

//indexOF
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
//finding 21 in the array
let luckyIndex = numbers.indexOf(luckyNumber);
