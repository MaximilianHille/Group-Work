// we are creating variables and assign to them the different buttons / later pasted text
// we designed the variables globally (global scope) because we need them not only in one function (local scope)
// we need them outside or inside of different functions (see below)
var button = document.getElementById('calculateBtn');
var reset = document.getElementById('reset');
var paceTotalTime = document.getElementById('totalTime');
var paceText1000 = document.getElementById('pace1000');
var paceText400 = document.getElementById('pace400');
var paceText100 = document.getElementById('pace100');


button.onclick = function () {

    // we are creating as the first step a bunch of variables to which we assign the different values
    // from the select or input fields
    // the parseFloat() function parses a string and returns a floating point number
    // This function determines if the first character in the specified string is a number
    // If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string
    var meters = parseFloat(document.getElementById('distance').value);
    var hours = parseFloat(document.getElementById('hours').value);
    var minutes = parseFloat(document.getElementById('minutes').value);
    var seconds = parseFloat(document.getElementById('seconds').value);

    // calculation of the total amount of minutes needed
    var totalMinutes = hours * 60 + minutes + seconds / 60;

    // calculation for the pace for 1000 meter
    var pace1000 = totalMinutes / (meters / 1000);
    var paceMinutes1000 = Math.floor(pace1000);
    var paceSeconds1000 = Math.round((pace1000 - paceMinutes1000) * 60);

    // calculation for the pace for 400 meter
    var pace400 = pace1000 / 2.5;
    var paceMinutes400 = Math.floor(pace400);
    var paceSeconds400 = Math.round((pace400 - paceMinutes400) * 60);

    // calculation for the pace for 100 meter
    var pace100 = pace400 / 4;
    var paceMinutes100 = Math.floor(pace100);
    var paceSeconds100 = Math.round((pace100 - paceMinutes100) * 60);

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
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (paceMinutes1000 < 10) {
        paceMinutes1000 = "0" + paceMinutes1000;
    }
    if (paceSeconds1000 < 10) {
        paceSeconds1000 = "0" + paceSeconds1000;
    }
    if (paceMinutes400 < 10) {
        paceMinutes400 = "0" + paceMinutes400;
    }
    if (paceSeconds400 < 10) {
        paceSeconds400 = "0" + paceSeconds400;
    }
    if (paceMinutes100 < 10) {
        paceMinutes100 = "0" + paceMinutes100;
    }
    if (paceSeconds100 < 10) {
        paceSeconds100 = "0" + paceSeconds100;
    }

    // we take our previously created variables and tell them what the content of the text will be
    // a combination of pre-stated words and our calculated variables
    paceTotalTime.textContent = "You will run in total " + meters + " meters. You will be done after " + hours + ":" + minutes + ":" + seconds + ".";
    paceText1000.textContent = "You should pass each 1000 meter mark after " + paceMinutes1000 + ":" + paceSeconds1000 + " minutes.";
    paceText400.textContent = "You should pass each 400 meter mark after " + paceMinutes400 + ":" + paceSeconds400 + " minutes.",
        paceText100.textContent = "You should pass each 100 meter mark after " + paceSeconds100 + " seconds.";
}

reset.onclick = function () {
    paceTotalTime.textContent = "";
    paceText1000.textContent = "";
    paceText400.textContent = "";
    paceText100.textContent = "";
}
