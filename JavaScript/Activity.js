// we are creating a variable called "cont" and assigning to it the element from the HTML called "continue-button" from
// the activity HTML
var cont = document.getElementById('continue-button');

// on the event of a click on the button we just assigned, a function will be called/carried out
// the function does not have any name or parameters because we do not need this function anywhere else (it is just a one-time function)
cont.onclick = function () {
        
        // we are creating again a variable for the drop-down field and assigning it the values that are there to select
        var selection = document.getElementById("selection").value;
        
            // if .. else if statement: for each value our variable will have (depends on the choice of the user),
            // we will re-direct the user to the next HTML page --> document.location.href
            if (selection == "tracking") {
                document.location.href = "Tracking.html";
            }
            else if (selection == "race") {
                document.location.href = "Race.html";
            }
            else if (selection == "training") {
                document.location.href = "Training.html";
            }
        
            // in case the users clicks continue without choosing anything, an alert will pop up to remind him to choose something
            else if (selection == "chooseOption") {
                alert ("You have to choose what you want to do.")
            }
    }
