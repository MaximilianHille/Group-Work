var button = document.getElementById('calculateBtn');
var paceTotalTime = document.getElementById('totalTime');
var paceText1000 = document.getElementById('pace1000');
var paceText400 = document.getElementById('pace400');
var paceText100 = document.getElementById('pace100');

if(button) {
    button.onclick = function () {
        var meters = parseFloat(document.getElementById('distance').value);
        var hours = parseFloat(document.getElementById('hours').value);
        var minutes = parseFloat(document.getElementById('minutes').value);
        var seconds = parseFloat(document.getElementById('seconds').value);

        /* if(isNaN(meters)) {
            distanceInput.style.borderColor = "red";
            return;
        }
        if(isNaN(hours)) {
            hoursInput.style.borderColor = "red";
            return;
        }
        if(isNaN(minutes)) {
            minutesInput.style.borderColor = "red";
            return;
        }
        if(isNaN(seconds)) {
            secondsInput.style.borderColor = "red";
            return;
        } */

        var totalMinutes = hours * 60 + minutes + seconds / 60;

        var pace1000 = totalMinutes / (meters/1000);
        var paceMinutes1000 = Math.floor(pace1000);
        var paceSeconds1000 = Math.round((pace1000 - paceMinutes1000) * 60);
    
        var pace400 = pace1000/2.5;
        var paceMinutes400 = Math.floor(pace400);
        var paceSeconds400 = Math.round((pace400 - paceMinutes400) * 60);
    
        var pace100 = pace400/4;
        var paceMinutes100 = Math.floor(pace100);
        var paceSeconds100 = Math.round((pace100 - paceMinutes100) * 60);
        
        if(hours < 10) {
            hours = "0" + hours;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        if(paceMinutes1000 < 10) {
            paceMinutes1000 = "0" + paceMinutes1000;
        }
        if(paceSeconds1000 < 10) {
            paceSeconds1000 = "0" + paceSeconds1000;
        }
        if(paceMinutes400 < 10) {
            paceMinutes400 = "0" + paceMinutes400;
        }
        if(paceSeconds400 < 10) {
            paceSeconds400 = "0" + paceSeconds400;
        }
        if(paceMinutes100 < 10) {
            paceMinutes100 = "0" + paceMinutes100;
        }
        if(paceSeconds100 < 10) {
            paceSeconds100 = "0" + paceSeconds100;
        }

        paceTotalTime.textContent = "You will run in total " + meters + " meters. You will be done after " + hours + ":" + minutes + ":" + seconds + ".";
        paceText1000.textContent = "You should pass each 1000 meter mark after " + paceMinutes1000 + ":" + paceSeconds1000 + " minutes.";
        paceText400.textContent = "You should pass each 400 meter mark after " + paceMinutes400 + ":" + paceSeconds400 + " minutes.",
        paceText100.textContent = "You should pass each 100 meter mark after " + paceSeconds100 + " seconds.";
    }
}
