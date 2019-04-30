// that is basically our main function for the registration and login page
// creating the function and giving it a name since we are using it on different JS files
// it is the core for logging in or creating a new user
function getSavedUsers() {

  // we are creating again a variable called "users" and leave it empty for now until the next step
  var users;

  // we are having 2 steps here:
  // on the one hand we are in the "if" retrieving the data from the local storage
  // if this data is empty (with the key word "user") we are retrieving our hard coded users with their data inside
  // this means we are able to log in with our users
  if (localStorage.getItem('user') === null) {
    users = [
      new User("Maximilian", "Hille", "maximilian-hille@t-online.de", "mhille", "qwertz1234", null),
      new User("Nadia", "Boujari", "nboujari@gmail.com", "nboujari", "1234qwertz", null),
      new User("Kristina", "Bilkova", "kbilkova@gmail.com", "kbilkova", "qwerty1234", null),
    ];
  }

  // on the other hand as soon as a person registered, we will always carry out this part of the function and
  // retrieve all the users from the local storage
  else {
    users = JSON.parse(localStorage.getItem('user'));
  }

  // giving us back the users which are registered
  return users
}

// remark: most likely, unless it is just us using the homepage, the "else" statement will always be carried out
