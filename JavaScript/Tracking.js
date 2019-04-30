// creating a variable in order to get our users saved to the database and user class
var users = getSavedUsers();

// we are creating the variable "tracking", and assigning it the retrieved data from the local storage with the keyword "trackings"
var trackings = JSON.parse(localStorage.getItem('trackings'));

// we are creating the variable "activeUser", and assigning it the retrieved data from the local storage with the keyword "activeUser"
var activeUser = JSON.parse(localStorage.getItem('activeUser'));

// on load of our tracking page we are trying to load our content in the page for each active User
// we are calling a function and telling it:
document.addEventListener("DOMContentLoaded", function () {

    // if the retrieved data from above (var trackings) is empty (null) then start an empty array with trackings (empty [])
    if (trackings === null) {
        trackings = [];
    }
    // else (so if the above mentioned if statement is not true we initiate an else statement
    // and telling it to loop over each tracking for each user and find the tracking assigned to the current user that is logged in
    // the tracking data is assigned to each user seperately and can be retrieved through the unique identifier "activeUser"
    else {
        trackings.forEach(function (tracking) {
            if (tracking.activeUser == activeUser) {

                // calling the function "fillRowDb" which is declared later and pushing data into the array
                fillRowDb(tracking.date, tracking.location, tracking.category, tracking.distance, tracking.finishTime, tracking.comments);
            }
        }
        );
    }
});

// creation of variables for later use
var rIndex;
var table = document.getElementById("table");

// creating 2 variables and assigning our buttons from the HTML document to them for easy use later
// so that we just need to call thge variables (short) and not the whole "sentence"
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

// we are creating a function in order to check whether the number of trackings exceed 10
function checkTable() {

    // we are creating a variable (this time local because we do not need it anymore outside) and assigning it the table row length
    var rows = table.getElementsByTagName("tr").length;

    // in case this variable is bigger 10, we alert and tell him/her to delete a row
    if (rows > 10) {
        alert("You reached the maximimum of 10 entries! Please delete one entry or buy the premium package.");
        return false
    }
    // we return true and the process can go on and the other functions may be called (down)
    else { return true }
}

// check the empty input and in case it is true, return the alert that something needs to be filled in the input fields
// also possible here to do instead of "else if" a "switch" statement!!
function checkEmptyInput() {

    // creating the variable isEmpty and assigning it the boolean "false" for later use
    // could most likely also have been done the other way round
    var isEmpty = false;

    // we are creating variables and assigning them the values of the input fields
    var date = document.getElementById("date").value;
    var location = document.getElementById("location").value;
    var category = document.getElementById("category").value;
    var distance = document.getElementById("distance").value;
    var finishTime = document.getElementById("finishTime").value;
    var comments = document.getElementById("comments").value;

    // different if statement to check whether the input data is empty or not
    // input is not allowed to be empty
    if (date === "") {
        alert("Please fill in information");
        isEmpty = true;
    }
    else if (location === "") {
        alert("Please fill in information");
        isEmpty = true;
    }
    else if (category === "") {
        alert("Please fill in information");
        isEmpty = true;
    }
    else if (distance === "") {
        alert("Please fill in information");
        isEmpty = true;
    }
    else if (finishTime === "") {
        alert("Please fill in information");
        isEmpty = true;
    }
    // checking whether the length of the comment exceeds 100 signs --> not allowed!
    else if (comments.length > 100) {
        alert("Comment too long!")
        isEmpty = true;
    }
    return isEmpty;
}

// taking the variable we created and assigning it a function on click
// function to add a row to the HTML file
if (btn1) {
    btn1.onclick = function addRow() {

        // in the first step we check that checkEmptyInput is NOT true (which means it is false) and everything is inserted correctly
        // and also that the checkTable function is true 
        if (!checkEmptyInput() && checkTable()) {

            // we create the variables and assign it the values of the input fields
            // this time the input fields are taken completely which is why we could not create the variable in the beginning globally
            var date = document.getElementById("date").value;
            var location = document.getElementById("location").value;
            var category = document.getElementById("category").value;
            var distance = document.getElementById("distance").value;
            var finishTime = document.getElementById("finishTime").value;
            var comments = document.getElementById("comments").value;

            // we are calling the function fillRowDb and give it the parameters which are written in brackets
            // which we beforehand declared as variables
            fillRowDb(date, location, category, distance, finishTime, comments)

            // we are creating a variable called tracking and creating an array/object with the necessary values
            // in order to identify and save trackings
            /*var tracking = {
                user: activeUser,
                date: date,
                location: location,
                category: category,
                distance: distance,
                finishTime: finishTime,
                comments: comments 
        };*/

            //we are pushing new trackings into the array tracking (the variable we created)
            //trackings.push(tracking);

            trackings.push(new Tracking(activeUser, date, location, category, distance, finishTime, comments));


            // and push them into local storage with the key "trackings" 
            localStorage.setItem('trackings', JSON.stringify(trackings));
        }
    }
}

// get the table by its id 
// create a new row and cells 
// get value from input text
function fillRowDb(date, location, category, distance, finishTime, comments) {

    // this is what creates the cells
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    // set the values into row cell`s
    // this is what goes into the cells
    cell1.innerHTML = date;
    cell2.innerHTML = location;
    cell3.innerHTML = category;
    cell4.innerHTML = distance;
    cell5.innerHTML = finishTime;
    cell6.innerHTML = comments;

    // this is the function in order to display selected row data into input text
    // here we are setting var i = 1 because we do not want people tp be able to edit the first row!!
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            //get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("date").value = this.cells[0].innerHTML;
            document.getElementById("location").value = this.cells[1].innerHTML;
            document.getElementById("category").value = this.cells[2].innerHTML;
            document.getElementById("distance").value = this.cells[3].innerHTML;
            document.getElementById("finishTime").value = this.cells[4].innerHTML;
            document.getElementById("comments").value = this.cells[5].innerHTML;

        };
    }
}

// the button we created in a variable for removing on table row
if (btn2) {
    btn2.onclick = function removeRow() {

        // we are getting the selected row by its index
        table.deleteRow(rIndex);
        // clear input text for the row which have been chosen by pushing the remove
        document.getElementById("date").value = "";
        document.getElementById("location").value = "";
        document.getElementById("category").value = "";
        document.getElementById("distance").value = "";
        document.getElementById("finishTime").value = "";
        document.getElementById("comments").value = "";

        // the table row which has been removed will also be removed from the local storage
        // we are doing this through updating the array
        trackings.splice(rIndex - 1, 1);

        // and then updating the local storage with the new/updated array
        localStorage.setItem('trackings', JSON.stringify(trackings));
    }
}
