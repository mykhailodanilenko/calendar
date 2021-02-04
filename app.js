//Selectors
const eventInput = document.querySelector('.form');
const inputButton = document.querySelector('.submit');
const eventCalendar = document.querySelector('.calendar');
const nameInput = document.querySelector('.name-input');

console.log(inputButton);
console.log(eventInput);
console.log(eventCalendar);


//Event Listeners
inputButton.addEventListener("click", addEvent);


//Functions
function addEvent(event){
    event.preventDefault();
    console.log("hello");
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('occupied')
    const eventInfo = document.createElement('div');
    eventInfo.innerText = ('hey')
    eventInfo.classList.add('eventinfo');
    eventDiv.appendChild(eventInfo);
    //Append
    eventCalendar.appendChild(eventDiv);
}