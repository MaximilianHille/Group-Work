// we are creating variables and assign to them the different buttons / later pasted text
// we designed the variables globally (global scope) because we need them not only in one function (local scope)
// we need them outside or inside of different functions (see below)
var button1 = document.getElementById('calculate_btn1');
var button2 = document.getElementById('calculate_btn2');
var reset1 = document.getElementById('reset1');
var reset2 = document.getElementById('reset2');
var paceText = document.getElementById('pace');
var timeText = document.getElementById('time');
var splitTimeText = document.getElementById('split');

// basically the same as our other functions assigned to buttons
// "if", because just on the click of the button the function is supposed to run
if(button1) {
    button1.onclick = function() {

        // we are creating as the first step a bunch of variables to which we assign the different values
        // from the select or input fields
        // the parseFloat() function parses a string and returns a floating point number
        // This function determines if the first character in the specified string is a number
        // If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string
        var kilometers = parseFloat(document.getElementById('distance1').value);
        var hours = parseFloat(document.getElementById('hours1').value);
        var minutes = parseFloat(document.getElementById('minutes1').value);
        var seconds = parseFloat(document.getElementById('seconds1').value);
        
        // we are creating our variables and assigning the different calculations to them in order
        // to get the right output       
        var totalMinutes = hours * 60 + minutes + seconds / 60;
        var pace = totalMinutes / kilometers;
        
        // math.floor: round a number downward to its nearest integer
        // (we need to do that because otherwise the minutes could be rounded up to the next higher number 
        // and this would cause a wrong estimation)
        var paceMinutes = Math.floor(pace);
        
        // math.round: round a number to the nearest integer
        // (because we do not need milliseconds we round up or down here to the nearest number/integer)
        var paceSeconds = Math.round((pace - paceMinutes) * 60);

        // that is the calculation of our split-time for the race for each 5km
        var pace2 = (totalMinutes / kilometers) * 5;
        
        // math.floor: round a number downward to its nearest integer
        // (we need to do that because otherwise the minutes could be rounded up to the next higher number 
        // and this would cause a wrong estimation)
        var pace2Minutes = Math.floor(pace2);
        
        // math.round: round a number to the nearest integer
        // (because we do not need milliseconds we round up or down here to the nearest number/integer)
        var pace2Seconds = Math.round((pace2 - pace2Minutes) * 60);

        // another opportunity here would have been to implement a switch statement
        // switch .. case 1, case 2, etc..
        // what are we doing here: the different "if statements" are following the same purpose
        // --> in case our calculations would output a number lower 10, a 0 will be displayed in front of the numbers
        // so i.e. instead of 1:12:3 which would be now 1 hour, 12 minutes and 30 seconds (which is WRONG!)
        // it will display 01:12:03
        // we change the previously created variables a new value with a 0 in front of the initial variable        
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (paceMinutes < 10) {
            paceMinutes = "0" + paceMinutes;
        }
        if (paceSeconds < 10) {
            paceSeconds = "0" + paceSeconds;
        }
        if (pace2Minutes < 10) {
            pace2Minutes = "0" + pace2Minutes;
        }
        if (pace2Seconds < 10) {
            pace2Seconds = "0" + pace2Seconds;
        }


    // we take our previously created variables and tell them what the content of the text will be
    // a combination of pre-stated words and our calculated variables
    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per kilometer.";
    timeText.textContent = "You will finish after " + hours + ":" + minutes + ":" + seconds +".";
    splitTimeText.textContent = "You need to pass each 5km mark after " + pace2Minutes + ":" + pace2Seconds +" minutes.";

    }
};

reset1.onclick = function() {
    paceText.textContent = "";
    timeText.textContent = "";
    splitTimeText.textContent = "";

    }

if(button2) {
    button2.onclick = function() {
    
        // we are creating as the first step a bunch of variables to which we assign the different values
        // from the select or input fields
        // the parseFloat() function parses a string and returns a floating point number
        // This function determines if the first character in the specified string is a number
        // If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string
        var kilometers = parseFloat(document.getElementById('distance2').value);
        var minutes = parseFloat(document.getElementById('minutes2').value);
        var seconds = parseFloat(document.getElementById('seconds2').value);
    
        // calculation of the overall seconds since we want to get the finish time with hours, minutes, seconds
        var totalSeconds = kilometers * ((minutes * 60) + seconds);
        // total seconds devided by 3600, since one hour has 3600 seconds
        var timeHours = Math.floor( totalSeconds / 3600);
        // total seconds devided by 3600 again, and the continuing the calculation with the reminder (caused by the % sign)
        // and deviding it by 60 again in order to get the minutes
        var timeMinutes = Math.floor((totalSeconds % 3600) / 60);
        // the remaining number will be displayed as the seconds
        var timeSeconds = Math.floor(totalSeconds % 60);

        // that is the calculation of our split-time for the race for each 5km
        var time2 = (minutes + (seconds / 60)) * 5;
        var time2Minutes = Math.floor(time2);
        var time2Seconds = Math.round((time2 - time2Minutes) * 60);
        
        // another opportunity here would have been to implement a switch statement
        // switch .. case 1, case 2, etc..
        // what are we doing here: the different "if statements" are following the same purpose
        // --> in case our calculations would output a number lower 10, a 0 will be displayed in front of the numbers
        // so i.e. instead of 5:2 which would be now 5 minutes and 20 seconds (which is WRONG!)
        // it will display 05:02
        // we change the previously created variables a new value with a 0 in front of the initial variable
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (timeHours < 10) {
            timeHours = "0" + timeHours;
        }
        if (timeMinutes < 10) {
            timeMinutes = "0" + timeMinutes;
        }
        if (timeSeconds < 10) {
            timeSeconds = "0" + timeSeconds;
        }
        if (time2Seconds < 10) {
            time2Seconds = "0" + time2Seconds;
        }
    
    // we take our previously created variables and tell them what the content of the text will be
    // a combination of pre-stated words and our calculated variables
    paceText.textContent = "You want to run " + minutes + ":" + seconds + " minutes per kilometer.";
    timeText.textContent = "According to this pace you will finish after " + timeHours + ":" + timeMinutes + ":" + timeSeconds +".";
    splitTimeText.textContent = "You need to pass each 5km mark after " + time2Minutes + ":" + time2Seconds +" minutes.";

    }
}

reset2.onclick = function() {
    paceText.textContent = "";
    timeText.textContent = "";
    splitTimeText.textContent = "";
