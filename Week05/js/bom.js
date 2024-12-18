
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
//click event listener for the Add Chapter 'submit' button
button.addEventListener('click', () => {
    //.trim removes any whitespave before AND after the input, but doesn't change the input
    //If the input value isn't blank
    if (input.value.trim() !== '') {
        //fill in the blank on this ul element
        //create a li element that will help each entries chapter title, and an associated delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        //populate the li element variables textContent or innerHTML with the input value
        // <input type="text" id="favchap" placeholder="Alma 5">
        li.textContent = input.value;
        //populate the button textContent with a X
        deleteButton.textContent = '❌';
        //append the delete button to the li element
        li.appendChild(deleteButton);
        //append the li element to the list (ul element)
        list.appendChild(li);
        //clear the input after adding the chapter
        input.value = '';
        //Focus bacl on the input field
        input.focus();
    }

    //event listener for the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        //regardless is a list item was created ot not, the focus (sctive cursor) should be sent to the input element
        input.focus();
    })
})
// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
//the || operator is know as the "logical OR" operator.  It is often used in expressions to provide a default value if the first value is false, null, undefuned, 0, Nan, or an empty string.
let chaptersArray = getChapter() || [];
//populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
})
button.addEventListener("click", () => {
    //ensure the list isn't empty
    if (input.value != "") {
        //call the function that outputs the chapter that was submitted.
        displayList(input.value);
        //add the chapter to the array
        chaptersArray.array.push(input.value)
        //update the localStorage with the new array
        setChapterList();
        //clear the input
        input.value = "";
        //put the focus back on the input
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    li.textContent = item;
    deletebutton.testContent = "❌";
    //references the CSS rule .delete{width:fit-content;} to size the delete button
    deletebutton.classList.add("delete");
    li.append(li);
    deletebutton.addEventListener("click", function () {
        //removes the chapter from the array and localStorage
        list.removeChild(li);
        deleteChapter(li.textContent);
        //setthe focus back to the input
        input.focus();
    });
    console.log
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBONList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
}