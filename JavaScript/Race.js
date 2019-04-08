var calculateBtn1 = document.getElementById("calculate_btn1")

calculateBtn1.addEventListener("click", function() {

var distanceInput = document.getElementById("distance1"),
    hoursInput = document.getElementById("hours1"),
    minutesInput = document.getElementById("minutes1"),
    secondsInput = document.getElementById("seconds1"),
    paceText = document.getElementById("pace");

    var kilometers = parseFloat(distanceInput.value),
    hours = parseFloat(hoursInput.value),
    minutes = parseFloat(minutesInput.value),
    seconds = parseFloat(secondsInput.value);
    

    var totalMinutes = hours * 60 + minutes + seconds / 60,
    pace = totalMinutes / kilometers,
    paceMinutes = Math.floor(pace),
    paceSeconds = Math.round((pace - paceMinutes) * 60);


    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per kilometer.";

});

var calculateBtn2 = document.getElementById("calculate_btn2")

calculateBtn2.addEventListener("click", function() {

    var distanceInput = document.getElementById("distance2"),
    minutesInput = document.getElementById("minutes2"),
    secondsInput = document.getElementById("seconds2"),
    timeText = document.getElementById("time");

    var kilometers = parseFloat(distanceInput.value),
    minutes = parseFloat(minutesInput.value),
    seconds = parseFloat(secondsInput.value);


    var totalMinutes = minutes + seconds / 60,
    time = totalMinutes * kilometers,
    timeMinutes = Math.floor(time),
    timeSeconds = Math.round((time - timeMinutes) * 60);


    timeText.textContent = "You need to run " + timeMinutes + ":" + timeSeconds + " minutes per kilometer.";
    });
