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

// Save events in local storage
function saveLocalEvents(x, y) {
  localStorage.setItem(x, y);
}

// Populate with localstorage items
function populateCalendar(event) {
  Object.keys(localStorage).forEach((key) => {
    const oldEventDiv = document.createElement('div');
    const newElementClass = key.slice(0, 5);
    document.querySelector(`.${newElementClass}`).appendChild(oldEventDiv);
    oldEventDiv.outerHTML = localStorage.getItem(key);
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((element) => {
      element.addEventListener('click', deleteEvent);
    });
  });
}

// Functions

// Add filter
document.getElementById('filter').addEventListener('click', filterEvents);
function filterEvents(e) {
  const allEvents = document.querySelectorAll('.occupied');
  allEvents.forEach((div) => {
    switch (e.target.value) {
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

function defaults() {
  document.querySelector('.name-input').value = '';
  document.querySelector('.day-selector').value = 'mon';
  document.querySelector('.time-selector').value = 10;
  document.querySelector('.member-selector').value = 'all';
}

function cancelFunc(event) {
  event.preventDefault();
  defaults();
  document.querySelector('.errormsg_container').style.visibility = 'hidden';
  document.querySelector('.view2').style.visibility = 'hidden';
  document.querySelector('.view1').style.visibility = 'visible';
}

function addEvent(event) {
  event.preventDefault();
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('occupied');
  const eventInfo = document.createElement('div');
  eventInfo.innerText = document.querySelector('.name-input').value;
  eventInfo.classList.add('eventinfo');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close');
  closeButton.addEventListener('click', deleteEvent);
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
  eventDiv.appendChild(eventInfo);
  eventDiv.appendChild(closeButton);
  // Append div slots
  const appendDivClass = (document.querySelector('.day-selector').value) + (document.querySelector('.time-selector').value);
  if (document.querySelector(`.${appendDivClass}`).childElementCount == 0) {
    document.querySelector(`.${appendDivClass}`).appendChild(eventDiv);
    const participants = [
      ...document.querySelector('.member-selector').selectedOptions,
    ].map((option) => option.value);
    eventDiv.classList.add(...participants);
    eventDiv.id = `${appendDivClass}event`;
    defaults();
    document.querySelector('.errormsg_container').style.visibility = 'hidden';
    document.querySelector('.view2').style.visibility = 'hidden';
    document.querySelector('.view1').style.visibility = 'visible';
  } else if (document.querySelector(`.${appendDivClass}`).childElementCount >= 1) {
    document.querySelector('.errormsg_container').style.visibility = 'visible';
  }
  if (eventDiv.id !== '') {
    saveLocalEvents(eventDiv.id, eventDiv.outerHTML);
  }
}

function deleteEvent(event) {
  event.preventDefault();
  document.querySelector('.popup-container').style.visibility = 'visible';
  let evTitle = this.previousElementSibling.textContent;
  const popupText = document.createElement('p');
  popupText.classList.add('popup-text');
  popupText.innerText += `Are you sure you want to delete "${evTitle}" event?`;
  let buttonTarget = event.currentTarget;
  document.querySelector('.popup').appendChild(popupText);
  document
    .querySelector('.confirm-delete')
    .addEventListener('click', confirmDelete);
  function confirmDelete(event) {
    localStorage.removeItem(buttonTarget.parentElement.id);
    buttonTarget.parentElement.remove();
    popupText.remove();
    evTitle = '';
    buttonTarget = null;
    document.querySelector('.popup-container').style.visibility = 'hidden';
  }
  document.querySelector('.deny-delete').addEventListener('click', denyDelete);
  function denyDelete(event) {
    popupText.remove();
    evTitle = '';
    buttonTarget = null;
    document.querySelector('.popup-container').style.visibility = 'hidden';
  }
}
