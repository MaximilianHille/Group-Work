document.getElementById('continue-button').onclick = function () {

    if (document.getElementById('tracking')) {
        document.location.href = "Tracking_Overview.html";
        return true
    }
    else if (document.getElementById('race')) {
        document.location.href = "";
        return true;
    }
    else if (document.getElementById('training')) {
        document.location.href ="";
        return true;
    }
    else if (document.getElementById('choose')){
        alert("Please choose an option.");
        return true;
    }
};
