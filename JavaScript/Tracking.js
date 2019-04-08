var rIndex,
table = document.getElementById("table");

// check the empty input and in case it is true, return the alert that something needs to be filled in
//also possible here to do instead of "else if" a "switch" statement!!
      function checkEmptyInput()
      {
          var isEmpty = false,
              date = document.getElementById("date").value,
              location = document.getElementById("location").value,
              category = document.getElementById("category").value,
              distance = document.getElementById("distance").value,
              finishTime = document.getElementById("finishTime").value,
              comments = document.getElementById("comments").value;

          if (date === ""){
          alert ("Please fill in information");
          isEmpty = true;
          }
          else if (location === "") {
          alert ("Please fill in information");
          isEmpty = true;
          }
          else if (category === ""){
          alert ("Please fill in information");
          isEmpty = true;
          }
          else if (distance === "") {
          alert ("Please fill in information");
          isEmpty = true;
          }
          else if (finishTime === "") {
          alert ("Please fill in information");
          isEmpty = true;
          }
          else if (comments.length > 100) {
              alert ("Comment too long!")
              isEmpty = true;
          }
          return isEmpty;
        }

// function to add a row to the HTML file
function addHTMLTableRow()
{
      // get the table by its id 
      // create a new row and cells 
      // get value from input text
      // set the values into row cell`s

      if (!checkEmptyInput())
      {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell (0),
            cell2 = newRow.insertCell (1),
            cell3 = newRow.insertCell (2),
            cell4 = newRow.insertCell (3),
            cell5 = newRow.insertCell (4),
            cell6 = newRow.insertCell (5),

            date = document.getElementById("date").value,
            location = document.getElementById("location").value,
            category = document.getElementById("category").value,
            distance = document.getElementById("distance").value,
            finishTime = document.getElementById("finishTime").value,
            comments = document.getElementById("comments").value;

            cell1.innerHTML = date;
            cell2.innerHTML = location;
            cell3.innerHTML = category;
            cell4.innerHTML = distance;
            cell5.innerHTML = finishTime;
            cell6.innerHTML = comments;

        // call the function to set the event to the new row --> basically we are adding out input here to the table
        selectedRowToInput();
      }
}

// this is the function in order to display selected row data into input text
function selectedRowToInput()
{
    for (var i = 1; i < table.rows.length; i++) // here we are setting var i = 1 because we do not want people tp be able to edit the first row!!
    {
        table.rows[i].onclick = function ()
        {
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
selectedRowToInput();

function editHTMLTableSelectedRow()
{
    var date = document.getElementById("date").value,
        location = document.getElementById("location").value,
        category = document.getElementById("category").value,
        distance = document.getElementById("distance").value,
        finishTime = document.getElementById("finishTime").value,
        comments = document.getElementById("comments").value;

    if(!checkEmptyInput())
    {
            table.rows[rIndex].cells[0].innerHTML = date;
            table.rows[rIndex].cells[1].innerHTML = location;
            table.rows[rIndex].cells[2].innerHTML = category;
            table.rows[rIndex].cells[3].innerHTML = distance;
            table.rows[rIndex].cells[4].innerHTML = finishTime;
            table.rows[rindex].cells[5].innerHTML = comments;
    }


}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text for the row which have been chosen by pushing the remove
    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("category").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("finishTime").value = "";
    document.getElementById("comments").value = "";
}

