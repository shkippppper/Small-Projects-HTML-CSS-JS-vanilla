window.onload = function() {
    for (let i = 0; i < localStorage.length; i++) {
      const note = localStorage.getItem('note' + i);
      if (note !== null) {
        addNote();
        const textarea = document.querySelectorAll('textarea')[i];
        textarea.value = note;
      }
    }
  };


const noteContainer = document.querySelector('.notes');


function focusNote(e){
    console.log(event.target.parentNode.parentNode.children[1].focus())
}


function deleteNote(event){
    event.target.parentNode.parentNode.remove()
}

function addNote(){
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const manageDiv = document.createElement('div');
    manageDiv.classList.add('manage');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square');
    editIcon.onclick = function(event) {
        focusNote(event);
    };
    manageDiv.appendChild(editIcon);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    deleteIcon.onclick = function(event) {
        deleteNote(event);  
        removeNoteData(event.target);
    };
    manageDiv.appendChild(deleteIcon);
  

    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', '');
    textarea.setAttribute('id', '');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.onchange = function(event) {
        saveNoteData(event.target);
    };

    noteDiv.appendChild(manageDiv);
    noteDiv.appendChild(textarea);
  
    noteContainer.appendChild(noteDiv);
}

function saveNoteData(textarea) {
    // Get the index of the note based on its position in the note container
    const index = Array.from(textarea.parentNode.parentNode.children).indexOf(textarea.parentNode);
  
    // Save the contents of the textarea to localStorage
    localStorage.setItem('note' + index, textarea.value);
}


function removeNoteData(deleteIcon) {
  // Get the index of the note based on its position in the note container
  const index = Array.from(deleteIcon.parentNode.parentNode.children).indexOf(deleteIcon.parentNode);

  // Remove the corresponding item from localStorage
  localStorage.removeItem('note' + index);

  // Update the indexes of any remaining notes in localStorage
  for (let i = index + 1; i < localStorage.length; i++) {
    const note = localStorage.getItem('note' + i);
    if (note !== null) {
      localStorage.setItem('note' + (i - 1), note);
      localStorage.removeItem('note' + i);
    }
  }
}