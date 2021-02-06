//Selectors
const eventInput = document.querySelector(".form");
const inputButton = document.querySelector(".submit");
const eventCalendar = document.querySelector(".calendar");
const nameInput = document.querySelector(".name-input");
const mon10 = document.querySelector(".mon10");
const errormsg = document.querySelector(".errormsg_container");

const memberSelector = document.querySelector(".member-selector");
const daySelector = document.querySelector(".day-selector");
const timeSelector = document.querySelector(".time-selector");

//Event Listeners
inputButton.addEventListener("click", addEvent);

console.log(document.querySelector(".day-selector").value);
console.log(document.querySelector(".time-selector").value);
console.log(typeof document.querySelector(".time-selector").value);
//Functions
function addEvent(event) {
	event.preventDefault();
	const eventDiv = document.createElement("div");
	eventDiv.classList.add("occupied");
	const eventInfo = document.createElement("div");
	eventInfo.innerText = document.querySelector(".name-input").value;
	eventInfo.classList.add("eventinfo");
	eventDiv.appendChild(eventInfo);
	//Append div slots
	if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".mon10").childElementCount == 0) {
			document.querySelector(".mon10").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
            document.querySelector(".view2").style.visibility = "hidden";
            document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".mon10").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 11
	) {
		if (document.querySelector(".mon11").childElementCount == 0) {
			document.querySelector(".mon11").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon11").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 12
	) {
		if (document.querySelector(".mon12").childElementCount == 0) {
			document.querySelector(".mon12").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon12").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 13
	) {
		if (document.querySelector(".mon13").childElementCount == 0) {
			document.querySelector(".mon13").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon13").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 14
	) {
		if (document.querySelector(".mon14").childElementCount == 0) {
			document.querySelector(".mon14").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon14").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 15
	) {
		if (document.querySelector(".mon15").childElementCount == 0) {
			document.querySelector(".mon15").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon15").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 16
	) {
		if (document.querySelector(".mon16").childElementCount == 0) {
			document.querySelector(".mon16").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon16").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 17
	) {
		if (document.querySelector(".mon17").childElementCount == 0) {
			document.querySelector(".mon17").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon17").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 18
	) {
		if (document.querySelector(".mon18").childElementCount == 0) {
			document.querySelector(".mon18").appendChild(eventDiv);
			document.querySelector(".errormsg_container").style.visibility = "hidden";
		} else if (document.querySelector(".mon18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	}
}
