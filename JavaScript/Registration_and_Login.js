// assigning the function we created in our other file DB.js to a variable called users
// we are calling the function in the variable since we need it in order to retrieve the saved users 
// or push the saved users in the database
var users = getSavedUsers();

// our button called "create user account" binded to the variable "register"
var register = document.getElementById('submit-button');

// our button called "login" binded to the variable "login"
var login = document.getElementById('login');

// setting up a counter for later use
var counter = 3;

// we create the variable "activeUser" for later use in order to track the current user
// this is necessary for the tracking page in order to assign/retrieve the local storage for a current user
var activeUser;

// on click of or variable (=the HTML button) we are carrying out a function
register.onclick = function () {

    // creating variables and assigning them the value of the HTML input fields
    // to be filled in by the user
    var inputFirstName = document.getElementById('firstname');
    var inputLastName = document.getElementById('lastname');
    var inputEmail = document.getElementById('email');
    var inputUsername = document.getElementById('user');
    var inputPassword = document.getElementById('psw1');
    var inputRepeatPassword = document.getElementById('psw2');

    // we are creating several "if statements" to give clear instructions how the user needs to register
    // the mentioned input fields are not allowed to be empty
    if (inputFirstName.value.length == 0 || inputLastName.value.length == 0 || inputEmail.value.length == 0 || inputUsername.value.length == 0 || inputPassword.value.length == 0 || inputRepeatPassword.value.length == 0) {
        alert("Please type in the necessary information!");
        return false;
    };

    // the password needs to have at least 8 signs
    if (inputPassword.value.length < 8) {
        alert("Password too short! Please choose again.")
        return false;
    };

    // the repeated password needs to match to initial password
    if (inputPassword.value.length !== inputRepeatPassword.value.length) {
        alert("Passwords do not match! Please type in again.")
        return false;
    }

    // we are looping over all the users in the database/local storage and 
    // another form of a "for loop"
    // check whether the username is already occupied
    for (var user of users) {
        if (inputUsername.value == user.username) {
            alert("Username occupied! Please choose other.")
            return false;
        }
    }

    alert("Registration successful. Welcome " + inputUsername.value + "!")

    // we are pushing the new registered user into our database and user class (which we created)
    // we are just saving here the last name, username and password
    // all the others are "null" since we are not saving the information of it
    // we are pushing the user into local storage with the key "user" and stringifying it
    users.push(new User(null, inputLastName.value, null, inputUsername.value, inputPassword.value, null));
    localStorage.setItem('user', JSON.stringify(users));

    // we are giving our created variable "activeUser" the value of the input field username
    // and pushing it into local storage with the keyword "activeUser" and stringifying it
    activeUser = inputUsername.value
    localStorage.setItem('activeUser', JSON.stringify(activeUser))

    // we are re-directing the user after successfull registration to the next page
    document.location.href = "Activity.html";
}

// this is the right part of our landing page
// we are taking the created variable "login" and assigning a function to it on click
login.onclick = function () {

    // creation of 2 variables with the values from the HTML input fields
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    // we are having a for loop
    // why?: because we are looping through all the saved users (either newly registered or already in the sytsem)
    // and checking out with which saved user the input data matches
    // i++ because we need to loop through every user in the database until we find a match (i++ = i+1)
    // starting at i = 0 because an array always starts with the index 0
    for (i = 0; i < users.length; i++) {

        // if the input data of username AND password is correct the user logs in
        // and an alert will pop up
        if (username === users[i].username && password === users[i].password) {
            alert("Welcome back " + username + "!")

            // we are setting the activeUser to the inputted username
            // and pushing him/her into the local storage as a string with the keyword "activeUser"
            activeUser = username
            localStorage.setItem('activeUser', JSON.stringify(activeUser))

            // we are re-directing the user after successfull login to the next page
            document.location.href = "Activity.html";
            return;
        }
    }

    // if the user put in wrong data for 3 times already, the input fields will be disabled and the login button blocked
    if (counter == 0) {
        alert("You've entered the wrong username and password three times. You`re serious?");
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        login.disabled = true;
        return false;
        // otherwise, if the counter is not 0 yet, it will get deducted 1 attempt (counter-- = counter - 1)
    }
    else {
        alert("Wrong username or password! You have " + counter + " attempt(s) left!");
        counter--;
    }
}
