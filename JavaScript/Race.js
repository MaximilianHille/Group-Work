var button1 = document.getElementById('calculate_btn1');
var button2 = document.getElementById('calculate_btn2');
var paceText = document.getElementById('pace');
var timeText = document.getElementById('time');
var splitTimeText = document.getElementById('split');

if(button1) {
    button1.onclick = function() {

        var kilometers = parseFloat(distance1.value);
        var hours = parseFloat(hours1.value);
        var minutes = parseFloat(minutes1.value);
        var seconds = parseFloat(seconds1.value);
    
        var totalMinutes = hours * 60 + minutes + seconds / 60;
        var pace = totalMinutes / kilometers;
        var paceMinutes = Math.floor(pace);
        var paceSeconds = Math.round((pace - paceMinutes) * 60);

        var pace2 = (totalMinutes / kilometers) * 5;
        var pace2Minutes = Math.floor(pace2);
        var pace2Seconds = Math.round((pace2 - pace2Minutes) * 60);

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


    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per kilometer.";
    timeText.textContent = "You will finish after " + hours + ":" + minutes + ":" + seconds +".";
    splitTimeText.textContent = "You need to pass each 5km mark after " + pace2Minutes + ":" + pace2Seconds +" minutes.";

    }
};

if(button2) {
    button2.onclick = function() {
    
        var kilometers = parseFloat(distance2.value);
        var minutes = parseFloat(minutes2.value);
        var seconds = parseFloat(seconds2.value);
    
        var totalSeconds = kilometers * ((minutes * 60) + seconds);
        var timeHours = Math.floor( totalSeconds / 3600);
        var timeMinutes = Math.floor((totalSeconds % 3600) / 60);
        var timeSeconds = Math.floor(totalSeconds % 60);

        var time2 = (minutes + (seconds / 60)) * 5;
        var time2Minutes = Math.floor(time2);
        var time2Seconds = Math.round((time2 - time2Minutes) * 60);

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
    
    
    paceText.textContent = "You want to run " + minutes + ":" + seconds + " minutes per kilometer.";
    timeText.textContent = "According to this pace you will finish after " + timeHours + ":" + timeMinutes + ":" + timeSeconds +".";
    splitTimeText.textContent = "You need to pass each 5km mark after " + time2Minutes + ":" + time2Seconds +" minutes.";

    }
}
