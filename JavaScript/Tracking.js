var users = getSavedUsers();

var rIndex;
var table = document.getElementById("table");

for (var i = 0; i < users.length; i++) {
    if (users[i].username == activeUser) {
        users[i].tracking = table.innerHTML
    }
}

if (currentUserTracking != null) {
    table.innerHTML = currentUserTracking
}

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

// check the empty input and in case it is true, return the alert that something needs to be filled in
// also possible here to do instead of "else if" a "switch" statement!!
function checkEmptyInput() {
    var isEmpty = false;
    var date = document.getElementById("date").value;
    var location = document.getElementById("location").value;
    var category = document.getElementById("category").value;
    var distance = document.getElementById("distance").value;
    var finishTime = document.getElementById("finishTime").value;
    var comments = document.getElementById("comments").value;

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
    else if (comments.length > 100) {
        alert("Comment too long!")
        isEmpty = true;
    }
    return isEmpty;
}

// function to add a row to the HTML file

if (btn1) {
    btn1.onclick = function addRow() {
        if (!checkEmptyInput()) {
            var newRow = table.insertRow(table.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            var date = document.getElementById("date").value;
            var location = document.getElementById("location").value;
            var category = document.getElementById("category").value;
            var distance = document.getElementById("distance").value;
            var finishTime = document.getElementById("finishTime").value;
            var comments = document.getElementById("comments").value;

            // var owner = getActiveUser();

            cell1.innerHTML = date;
            cell2.innerHTML = location;
            cell3.innerHTML = category;
            cell4.innerHTML = distance;
            cell5.innerHTML = finishTime;
            cell6.innerHTML = comments;




            // const newArray = []; 
            // newArray.push(date, location, category, distance, finishTime, comments)
            // console.log(newArray);
            // call the function to set the event to the new row --> basically we are adding out input here to the table
            fillRow();
        }

        //trackings.push(users[i].tracking);
        //localStorage.setItem('currentUser', JSON.stringify(trackings))

        /*new activeUser (active)
        new Tracking (date, location, category, distance, finishTime, comments));
    localStorage.setItem('trackings', JSON.stringify(trackings)); */

        /*activeUser = inputUsername.value
        localStorage.setItem('currentUser', JSON.stringify(activeUser))


        trackings.push(new Tracking(date, location, category, distance, finishTime, comments, owner));
        localStorage.setItem("trackings", JSON.stringify(trackings)); */

        // currentUserTracking = table.innerHTML;
        // localStorage.setItem('Tracking', JSON.stringify(tracking));

    }
}

// get the table by its id 
// create a new row and cells 
// get value from input text
// set the values into row cell`s

// this is the function in order to display selected row data into input text
function fillRow() {
    for (var i = 1; i < table.rows.length; i++) { // here we are setting var i = 1 because we do not want people tp be able to edit the first row!!
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
// call the function that it will do its work
fillRow();

if (btn2) {
    btn2.onclick = function editRow() {
        var date = document.getElementById("date").value;
        var location = document.getElementById("location").value;
        var category = document.getElementById("category").value;
        var distance = document.getElementById("distance").value;
        var finishTime = document.getElementById("finishTime").value;
        var comments = document.getElementById("comments").value;

        if (!checkEmptyInput()) {
            table.rows[rIndex].cells[0].innerHTML = date;
            table.rows[rIndex].cells[1].innerHTML = location;
            table.rows[rIndex].cells[2].innerHTML = category;
            table.rows[rIndex].cells[3].innerHTML = distance;
            table.rows[rIndex].cells[4].innerHTML = finishTime;
            table.rows[rIndex].cells[5].innerHTML = comments;
        }

        //trackings.push(new Tracking(date, location, category, distance, finishTime, comments));
        //    localStorage.setItem('trackimgs', JSON.stringify(trackings));
    }
}

if (btn3) {
    btn3.onclick = function removeRow() {
        table.deleteRow(rIndex);
        // clear input text for the row which have been chosen by pushing the remove
        document.getElementById("date").value = "";
        document.getElementById("location").value = "";
        document.getElementById("category").value = "";
        document.getElementById("distance").value = "";
        document.getElementById("finishTime").value = "";
        document.getElementById("comments").value = "";
    }

    //trackings.push(new Tracking(date, location, category, distance, finishTime, comments));
    //localStorage.setItem('trackimgs', JSON.stringify(trackings));
}
