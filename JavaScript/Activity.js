var cont = document.getElementById('continue-button');

    cont.onclick = function () {
        var selection = document.getElementById("selection").value;

            if (selection == "tracking") {
                document.location.href = "Tracking_Overview.html";
            }

            else if (selection == "race") {
                document.location.href = "Race.html";
            }

            else if (selection == "training") {
                document.location.href = "Training.html";
            }

            else if (selection == "chooseOption") {
                alert ("You have to choose what you want to do.")
            }
    }
