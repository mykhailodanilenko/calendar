/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// Variables
const inputButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');

// Event Listeners
window.addEventListener('load', populateCalendar);
inputButton.addEventListener('click', addEvent);
cancelButton.addEventListener('click', cancelFunc);

// Functions

// Save events in local storage
function saveLocalEvents(x, y) {
  localStorage.setItem(x, y);
}

// Populate the calendar with localstorage items
function populateCalendar(event) {
  Object.keys(localStorage).forEach((key) => {
    // Go through each localstorage item
    const oldEventDiv = document.createElement('div');
    const newElementClass = key.slice(0, 5); // remove "event" from the key
    document.querySelector(`.${newElementClass}`).appendChild(oldEventDiv); // choose the slot to append
    oldEventDiv.outerHTML = localStorage.getItem(key); // get the actual form of the event
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((element) => {
      element.addEventListener('click', deleteEvent); // add the event listener to the close buttons once again
    });
  });
}

// Filter
document.getElementById('filter').addEventListener('click', filterEvents); // could have been "change"
function filterEvents(e) {
  const allEvents = document.querySelectorAll('.occupied'); // start by getting all events in the calendar
  allEvents.forEach((div) => {
    switch (
      e.target.value // go through each option in the filter select
    ) {
      case 'all':
        div.style.display = 'flex';
        break;
      case 'michael':
        if (
          div.classList.contains('michael')
          || div.classList.contains('all')
        ) {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
        break;
      case 'sergey':
        if (div.classList.contains('sergey') || div.classList.contains('all')) {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
        break;
      case 'ivan':
        if (div.classList.contains('ivan') || div.classList.contains('all')) {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
        break;
      case 'olga':
        if (div.classList.contains('olga') || div.classList.contains('all')) {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
        break;
        // no default
    }
  });
}

// Set the form to defaults
function defaults() {
  document.querySelector('.name-input').value = '';
  document.querySelector('.day-selector').value = 'mon';
  document.querySelector('.time-selector').value = 10;
  document.querySelector('.member-selector').value = 'all';
}

// Cancel the event creation
function cancelFunc(event) {
  event.preventDefault();
  defaults();
  document.querySelector('.errormsg_container').style.visibility = 'hidden'; // hide the error message in case it was there
  document.querySelector('.view2').style.visibility = 'hidden'; // close the add event menu
  document.querySelector('.view1').style.visibility = 'visible'; // open the main calendar view
}

// Create an event
function addEvent(event) {
  event.preventDefault();
  // create an empty div for the event
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('occupied');
  // add a text field to the event div
  const eventInfo = document.createElement('div');
  eventInfo.innerText = document.querySelector('.name-input').value; // get the info from the form
  eventInfo.classList.add('eventinfo');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close');
  closeButton.addEventListener('click', deleteEvent); // make the button actually delete the event
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
  // finalize the div creation
  eventDiv.appendChild(eventInfo);
  eventDiv.appendChild(closeButton);
  // Append div slots
  const appendDivClass = document.querySelector('.day-selector').value
+ document.querySelector('.time-selector').value;
  if (document.querySelector(`.${appendDivClass}`).childElementCount == 0) {
    // check if the slot is empty
    document.querySelector(`.${appendDivClass}`).appendChild(eventDiv); // actually create the div inside the slot
    const participants = [
      ...document.querySelector('.member-selector').selectedOptions, // get the selected members
    ].map((option) => option.value);
    eventDiv.classList.add(...participants); // add participants to the event info
    eventDiv.id = `${appendDivClass}event`;
    defaults();
    document.querySelector('.errormsg_container').style.visibility = 'hidden';
    document.querySelector('.view2').style.visibility = 'hidden';
    document.querySelector('.view1').style.visibility = 'visible';
  } else if (
    document.querySelector(`.${appendDivClass}`).childElementCount >= 1
  ) {
    // what if the slot is occupied
    document.querySelector('.errormsg_container').style.visibility = 'visible'; // show the error message
  }
  if (eventDiv.id !== '') {
    // guard against double div in one slot
    saveLocalEvents(eventDiv.id, eventDiv.outerHTML);
  }
}

// Delete an event
function deleteEvent(event) {
  event.preventDefault();
  document.querySelector('.popup-container').style.visibility = 'visible'; // display the modal
  let evTitle = this.previousElementSibling.textContent;
  const popupText = document.createElement('p');
  popupText.classList.add('popup-text');
  popupText.innerText += `Are you sure you want to delete "${evTitle}" event?`; // make a custom prompt
  let buttonTarget = event.currentTarget;
  document.querySelector('.popup').appendChild(popupText); // add the popup text to the modal
  document
    .querySelector('.confirm-delete')
    .addEventListener('click', confirmDelete);
  function confirmDelete(event) {
    localStorage.removeItem(buttonTarget.parentElement.id); // remove the event from local storage
    buttonTarget.parentElement.remove(); // remove the event from the dom
    popupText.remove(); // roll back the popup text
    evTitle = '';
    buttonTarget = null;
    document.querySelector('.popup-container').style.visibility = 'hidden'; // close the popup
  }
  document.querySelector('.deny-delete').addEventListener('click', denyDelete); // if we don't want to delete anymore
  function denyDelete(event) {
    popupText.remove(); // just get everything back to normal
    evTitle = '';
    buttonTarget = null;
    document.querySelector('.popup-container').style.visibility = 'hidden';
  }
}
