function getSavedUsers() {
  var users;
  if (localStorage.getItem('users') === null) {
    users = [
      new User("Maximilian", "Hille", "maximilian-hille@t-online.de", "mhille", "qwertz1234", null),
      new User("Nadia", "Boujari", "nboujari@gmail.com", "nboujari", "1234qwertz", null),
      new User("Kristina", "Bilkova", "kbilkova@gmail.com", "kbilkova", "qwerty1234", null),
    ];
  }
  else {
    users = JSON.parse(localStorage.getItem('users'));
  }
  return users
}

/*

function getSavedTrackings() {
  var trackings;
  if (localStorage.getItem('currentUser') == activeUser && localStorage.getItem('trackings') === null) {
    trackings = [
      new Tracking("2.02.2019", "Amager", "Street", "21,1", "1:20:00", "Windy."),
    ];
  }
  else {
    trackings = JSON.parse(localStorage.getItem('trackings'));
    }
    return trackings
}

*/
