//Selectors
const eventInput = document.querySelector(".form");
const inputButton = document.querySelector(".submit");
const eventCalendar = document.querySelector(".calendar");
const nameInput = document.querySelector(".name-input");
//const mon10 = document.querySelector(".mon10");
const errormsg = document.querySelector(".errormsg_container");
const cancelButton = document.querySelector(".cancel");
const memberSelector = document.querySelector(".member-selector");
const daySelector = document.querySelector(".day-selector");
const timeSelector = document.querySelector(".time-selector");

//Event Listeners
inputButton.addEventListener("click", addEvent);
cancelButton.addEventListener("click", cancelFunc);

console.log(document.querySelector(".day-selector").value);
console.log(document.querySelector(".time-selector").value);
console.log(typeof document.querySelector(".time-selector").value);

//Save events in local storage
/*function saveLocalEvents(eventDiv) {
	let calendarEventList;
	if (localStorage.getItem("calendarEventList") === null) {
		calendarEventList = [];
	} else {
		localStorage = JSON.parse(localStorage.getItem("calendarEventsList"));
	}
	calendarEventList.push(eventDiv);
	localStorage.setItem("calendarEventList", JSON.stringify(calendarEventList));
}*/

//Functions

// Add filter
document.getElementById("filter").addEventListener("click", filterEvents);
function filterEvents(e) {
	var allEvents = document.querySelectorAll(".occupied");
	allEvents.forEach(function (div) {
		switch (e.target.value) {
			case "all":
				div.style.display = "flex";
				break;
			case "michael":
				if (div.classList.contains("michael")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "sergey":
				if (div.classList.contains("sergey")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "ivan":
				if (div.classList.contains("ivan")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "olga":
				if (div.classList.contains("olga")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
				
		}
	});
}

function cancelFunc(event) {
	event.preventDefault();
	document.querySelector(".name-input").value = "";
	document.querySelector(".day-selector").value = "mon";
	document.querySelector(".time-selector").value = 10;
	document.querySelector(".member-selector").value = "";
	document.querySelector(".errormsg_container").style.visibility = "hidden";
	document.querySelector(".view2").style.visibility = "hidden";
	document.querySelector(".view1").style.visibility = "visible";
}

function addEvent(event) {
	event.preventDefault();
	const eventDiv = document.createElement("div");
	eventDiv.classList.add("occupied");
	const eventInfo = document.createElement("div");
	eventInfo.innerText = document.querySelector(".name-input").value;
	eventInfo.classList.add("eventinfo");
	const closeButton = document.createElement("button");
	closeButton.classList.add("close");
	closeButton.addEventListener("click", deleteEvent);
	closeButton.innerText = "X";
	eventDiv.appendChild(eventInfo);
	eventDiv.appendChild(closeButton);
	//Append div slots
	if (
		document.querySelector(".day-selector").value == "mon" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".mon10").childElementCount == 0) {
			document.querySelector(".mon10").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
			//saveLocalEvents(eventInfo.value);
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
			//saveLocalEvents(eventInfo.value);
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".mon18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		//tuesday
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".tue10").childElementCount == 0) {
			document.querySelector(".tue10").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue10").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 11
	) {
		if (document.querySelector(".tue11").childElementCount == 0) {
			document.querySelector(".tue11").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue11").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 12
	) {
		if (document.querySelector(".tue12").childElementCount == 0) {
			document.querySelector(".tue12").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue12").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 13
	) {
		if (document.querySelector(".tue13").childElementCount == 0) {
			document.querySelector(".tue13").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue13").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 14
	) {
		if (document.querySelector(".tue14").childElementCount == 0) {
			document.querySelector(".tue14").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue14").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 15
	) {
		if (document.querySelector(".tue15").childElementCount == 0) {
			document.querySelector(".tue15").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue15").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 16
	) {
		if (document.querySelector(".tue16").childElementCount == 0) {
			document.querySelector(".tue16").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue16").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 17
	) {
		if (document.querySelector(".tue17").childElementCount == 0) {
			document.querySelector(".tue17").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue17").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "tue" &&
		document.querySelector(".time-selector").value == 18
	) {
		if (document.querySelector(".tue18").childElementCount == 0) {
			document.querySelector(".tue18").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".tue18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		//wednesday
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".wed10").childElementCount == 0) {
			document.querySelector(".wed10").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed10").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 11
	) {
		if (document.querySelector(".wed11").childElementCount == 0) {
			document.querySelector(".wed11").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed11").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 12
	) {
		if (document.querySelector(".wed12").childElementCount == 0) {
			document.querySelector(".wed12").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed12").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 13
	) {
		if (document.querySelector(".wed13").childElementCount == 0) {
			document.querySelector(".wed13").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed13").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 14
	) {
		if (document.querySelector(".wed14").childElementCount == 0) {
			document.querySelector(".wed14").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed14").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 15
	) {
		if (document.querySelector(".wed15").childElementCount == 0) {
			document.querySelector(".wed15").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed15").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 16
	) {
		if (document.querySelector(".wed16").childElementCount == 0) {
			document.querySelector(".wed16").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed16").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 17
	) {
		if (document.querySelector(".wed17").childElementCount == 0) {
			document.querySelector(".wed17").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed17").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "wed" &&
		document.querySelector(".time-selector").value == 18
	) {
		if (document.querySelector(".wed18").childElementCount == 0) {
			document.querySelector(".wed18").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".wed18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		//thursday
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".thu10").childElementCount == 0) {
			document.querySelector(".thu10").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu10").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 11
	) {
		if (document.querySelector(".thu11").childElementCount == 0) {
			document.querySelector(".thu11").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu11").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 12
	) {
		if (document.querySelector(".thu12").childElementCount == 0) {
			document.querySelector(".thu12").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu12").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 13
	) {
		if (document.querySelector(".thu13").childElementCount == 0) {
			document.querySelector(".thu13").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu13").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 14
	) {
		if (document.querySelector(".thu14").childElementCount == 0) {
			document.querySelector(".thu14").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu14").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 15
	) {
		if (document.querySelector(".thu15").childElementCount == 0) {
			document.querySelector(".thu15").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu15").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 16
	) {
		if (document.querySelector(".thu16").childElementCount == 0) {
			document.querySelector(".thu16").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu16").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 17
	) {
		if (document.querySelector(".thu17").childElementCount == 0) {
			document.querySelector(".thu17").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu17").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "thu" &&
		document.querySelector(".time-selector").value == 18
	) {
		if (document.querySelector(".thu18").childElementCount == 0) {
			document.querySelector(".thu18").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".thu18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		//friday, yay!
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 10
	) {
		if (document.querySelector(".fri10").childElementCount == 0) {
			document.querySelector(".fri10").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri10").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 11
	) {
		if (document.querySelector(".fri11").childElementCount == 0) {
			document.querySelector(".fri11").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri11").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 12
	) {
		if (document.querySelector(".fri12").childElementCount == 0) {
			document.querySelector(".fri12").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri12").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 13
	) {
		if (document.querySelector(".fri13").childElementCount == 0) {
			document.querySelector(".fri13").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri13").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 14
	) {
		if (document.querySelector(".fri14").childElementCount == 0) {
			document.querySelector(".fri14").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri14").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 15
	) {
		if (document.querySelector(".fri15").childElementCount == 0) {
			document.querySelector(".fri15").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri15").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 16
	) {
		if (document.querySelector(".fri16").childElementCount == 0) {
			document.querySelector(".fri16").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri16").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 17
	) {
		if (document.querySelector(".fri17").childElementCount == 0) {
			document.querySelector(".fri17").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri17").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	} else if (
		document.querySelector(".day-selector").value == "fri" &&
		document.querySelector(".time-selector").value == 18
	) {
		if (document.querySelector(".fri18").childElementCount == 0) {
			document.querySelector(".fri18").appendChild(eventDiv);
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
		} else if (document.querySelector(".fri18").childElementCount >= 1) {
			document.querySelector(".errormsg_container").style.visibility =
				"visible";
		}
	}
}

function deleteEvent(event) {
	event.preventDefault();
	document.querySelector(".popup-container").style.visibility = "visible";
	let evTitle = this.previousElementSibling.textContent;
	console.log(evTitle);
	let popupText = document.createElement("p");
	popupText.classList.add("popup-text");
	popupText.innerText += `Are you sure you want to delete "${evTitle}" event?`;
	console.log(popupText);
	var buttonTarget = event.currentTarget;
	document.querySelector(".popup").appendChild(popupText);
	document
		.querySelector(".confirm-delete")
		.addEventListener("click", confirmDelete);
	function confirmDelete(event) {
		console.log(event.currentTarget);
		buttonTarget.parentElement.remove();
		popupText.remove();
		evTitle = "";
		buttonTarget = null;
		document.querySelector(".popup-container").style.visibility = "hidden";
	}
	document.querySelector(".deny-delete").addEventListener("click", denyDelete);
	function denyDelete(event) {
		popupText.remove();
		evTitle = "";
		buttonTarget = null;
		document.querySelector(".popup-container").style.visibility = "hidden";
	}
	return;
}

