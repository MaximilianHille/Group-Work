document.getElementById('continue-button').onclick = function () {
    if (document.getElementById('tracking')) {
        document.location.href = "Tracking_Overview.html";
    }
    else if (document.getElementById('race')) {
        document.location.href = "";
    }
    else if (document.getElementById('training')) {
        document.location.href ="";
    }
};
