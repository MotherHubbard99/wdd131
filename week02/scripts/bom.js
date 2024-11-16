
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