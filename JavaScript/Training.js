var distanceInput = document.getElementById("distance"),
	hoursInput = document.getElementById("hours"),
	minutesInput = document.getElementById("minutes"),
	secondsInput = document.getElementById("seconds"),
	calculateBtn = document.getElementById("calculateBtn"),
	paceText1000 = document.getElementById("pace1000"),
	paceText400 = document.getElementById("pace400"),
	paceText100 = document.getElementById("pace100");
	//addeventlistener attaches an event handler to the document- everytime we press the button it will occur as a single individul click. it tells us about the path and where the buttom is located	

	calculateBtn.addEventListener("click", function() {
	var meters = parseFloat(distanceInput.value),
		hours = parseFloat(hoursInput.value),
		minutes = parseFloat(minutesInput.value),
		seconds = parseFloat(secondsInput.value);
	//Parsefloat is an inbuilt function in js. which is used to accept string and convert it into a floating number

//this is just styling 
	if(isNaN(meters)) {
		distanceInput.style.borderColor = "red";
		return;
	}
	else {
		distanceInput.style.borderColor = "initial";
	}
	if(isNaN(hours)) {
		hoursInput.style.borderColor = "red";
		return;
	}
	else {
		hoursInput.style.borderColor = "initial";
	}
	if(isNaN(minutes)) {
		minutesInput.style.borderColor = "red";
		return;
	}
	else {
		minutesInput.style.borderColor = "initial";
	}
	if(isNaN(seconds)) {
		secondsInput.style.borderColor = "red";
		return;
	}
	else {
		secondsInput.style.borderColor = "initial";
	}

	var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace1000 = totalMinutes / (meters/1000),
		paceMinutes1000 = Math.floor(pace1000),
		paceSeconds1000 = Math.round((pace1000 - paceMinutes1000) * 60),

		pace400 = pace1000/2.5,
		paceMinutes400 = Math.floor(pace400),
		paceSeconds400 = Math.round((pace400 - paceMinutes400) * 60),

		pace100 = pace400/4,
		paceMinutes100 = Math.floor(pace100),
		paceSeconds100 = Math.round((pace100 - paceMinutes100) * 60);
		


	if(paceSeconds1000 < 10) {
		paceSeconds1000 = "0" + paceSeconds1000;
	}

	paceText1000.textContent = "You need to run " + paceMinutes1000 + ":" + paceSeconds1000 + " minutes per 1000 meter.",
	paceText400.textContent = "You need to run " + paceMinutes400 + ":" + paceSeconds400 + " minutes per 400 meter.",
	paceText100.textContent = "You need to run " + paceSeconds100 + " seconds per 100 meter.";
});
