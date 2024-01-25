// Get references to the input, button, and list elements
const input = document.getElementById('favchap');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

addButton.addEventListener('click', () =>{

    // make sure the input is not empty
    if (input.value != 'argument') {  
         // call the function that outputs the submitted chapter
        displayList(input.value);
         // add the chapter to the array
        chaptersArray.push(input.value); 
        // update the localStorage with the new array
        setChapterList(); 
        // clear the input
        input.value = ''; 
        // set the focus to the input
        input.focus(); 
      }      
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  function setChapterList() {
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    let chaptersArray = getChapterList();
    let chapterIndex = chaptersArray.indexOf(chapter);
    chaptersArray.splice(chapterIndex, 1);
    setChapterList(chaptersArray);
  }



