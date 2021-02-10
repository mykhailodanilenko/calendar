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

//Save events in local storage
function saveLocalEvents(x, y) {
	localStorage.setItem(x, y);
}

//Populate with localstorage items
window.addEventListener("load", populateCalendar);
function populateCalendar(event) {
	Object.keys(localStorage).forEach((key) => {
		console.log(key);
		console.log(key);
		const oldEventDiv = document.createElement("div");
		/* const oldEventDivId = element;
		console.log(oldEventDivId);
		console.log(key); */
		if (key == "mon10event") {
			document.querySelector(".mon10").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon11event") {
			document.querySelector(".mon11").appendChild(oldEventDiv);

			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon12event") {
			document.querySelector(".mon12").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon13event") {
			document.querySelector(".mon13").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon14event") {
			document.querySelector(".mon14").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon15event") {
			document.querySelector(".mon15").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon16event") {
			document.querySelector(".mon16").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon17event") {
			document.querySelector(".mon17").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "mon18event") {
			document.querySelector(".mon18").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue10event") {
			document.querySelector(".tue10").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue11event") {
			document.querySelector(".tue11").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue12event") {
			document.querySelector(".tue12").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue13event") {
			document.querySelector(".tue13").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue14event") {
			document.querySelector(".tue14").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue15event") {
			document.querySelector(".tue15").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue16event") {
			document.querySelector(".tue16").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue17event") {
			document.querySelector(".tue17").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "tue18event") {
			document.querySelector(".tue18").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed10event") {
			document.querySelector(".wed10").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed11event") {
			document.querySelector(".wed11").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed12event") {
			document.querySelector(".wed12").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed13event") {
			document.querySelector(".wed13").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed14event") {
			document.querySelector(".wed14").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed15event") {
			document.querySelector(".wed15").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed16event") {
			document.querySelector(".wed16").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed17event") {
			document.querySelector(".wed17").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "wed18event") {
			document.querySelector(".wed18").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu10event") {
			document.querySelector(".thu10").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu11event") {
			document.querySelector(".thu11").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu12event") {
			document.querySelector(".thu12").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu13event") {
			document.querySelector(".thu13").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu14event") {
			document.querySelector(".thu14").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu15event") {
			document.querySelector(".thu15").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu16event") {
			document.querySelector(".thu16").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu17event") {
			document.querySelector(".thu17").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "thu18event") {
			document.querySelector(".thu18").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri10event") {
			document.querySelector(".fri10").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri11event") {
			document.querySelector(".fri11").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri12event") {
			document.querySelector(".fri12").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri13event") {
			document.querySelector(".fri13").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri14event") {
			document.querySelector(".fri14").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri15event") {
			document.querySelector(".fri15").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri16event") {
			document.querySelector(".fri16").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri17event") {
			document.querySelector(".fri17").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		} else if (key == "fri18event") {
			document.querySelector(".fri18").appendChild(oldEventDiv);
			oldEventDiv.outerHTML = localStorage.getItem(key);
		}
		let closeButtons = document.querySelectorAll(".close");
		console.log(closeButtons);
		closeButtons.forEach((element) => {
			element.addEventListener("click", deleteEvent);
		});
	});
}

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
				if (
					div.classList.contains("michael") ||
					div.classList.contains("all")
				) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "sergey":
				if (div.classList.contains("sergey") || div.classList.contains("all")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "ivan":
				if (div.classList.contains("ivan") || div.classList.contains("all")) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
				break;
			case "olga":
				if (div.classList.contains("olga") || div.classList.contains("all")) {
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
	closeButton.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
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
			eventDiv.id = "mon10event";
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
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
			const participants = [
				...document.querySelector(".member-selector").selectedOptions,
			].map((option) => option.value);
			eventDiv.classList.add(...participants);
			eventDiv.id = "mon11event";
			document.querySelector(".name-input").value = "";
			document.querySelector(".day-selector").value = "mon";
			document.querySelector(".time-selector").value = 10;
			document.querySelector(".member-selector").value = "";
			document.querySelector(".errormsg_container").style.visibility = "hidden";
			document.querySelector(".view2").style.visibility = "hidden";
			document.querySelector(".view1").style.visibility = "visible";
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

			eventDiv.id = "mon12event";
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

			eventDiv.id = "mon13event";
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
			eventDiv.id = "mon14event";
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

			eventDiv.id = "mon15event";
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

			eventDiv.id = "mon16event";
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

			eventDiv.id = "mon17event";
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

			eventDiv.id = "mon18event";
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

			eventDiv.id = "tue10event";
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

			eventDiv.id = "tue11event";
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

			eventDiv.id = "tue12event";
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

			eventDiv.id = "tue13event";
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

			eventDiv.id = "tue14event";
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

			eventDiv.id = "tue15event";
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

			eventDiv.id = "tue16event";
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

			eventDiv.id = "tue17event";
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

			eventDiv.id = "tue18event";
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

			eventDiv.id = "wed10event";
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

			eventDiv.id = "wed11event";
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

			eventDiv.id = "wed12event";
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

			eventDiv.id = "wed13event";
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
			eventDiv.id = "wed14event";
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
			eventDiv.id = "wed15event";
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
			eventDiv.id = "wed16event";
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
			eventDiv.id = "wed17event";
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

			eventDiv.id = "wed18event";
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
			eventDiv.id = "thu10event";
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

			eventDiv.id = "thu11event";
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

			eventDiv.id = "thu12event";
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

			eventDiv.id = "thu13event";
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

			eventDiv.id = "thu14event";
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

			eventDiv.id = "thu15event";
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

			eventDiv.id = "thu16event";
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
			eventDiv.id = "thu17event";
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
			eventDiv.id = "thu18event";
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
			eventDiv.id = "fri10event";
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
			eventDiv.id = "fri11event";
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
			eventDiv.id = "fri12event";
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
			eventDiv.id = "fri13event";
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
			eventDiv.id = "fri14event";
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
			eventDiv.id = "fri15event";
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
			eventDiv.id = "fri16event";
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
			eventDiv.id = "fri17event";
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
			eventDiv.id = "fri18event";
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
	saveLocalEvents(eventDiv.id, eventDiv.outerHTML);
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
		localStorage.removeItem(buttonTarget.parentElement.id);
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
