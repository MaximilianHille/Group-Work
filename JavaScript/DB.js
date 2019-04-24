function getSavedUsers() {
  var users;
  if (localStorage.getItem('user') === null) {
    users = [
      new User("Maximilian", "Hille", "maximilian-hille@t-online.de", "mhille", "qwertz1234", null),
      new User("Nadia", "Boujari", "nboujari@gmail.com", "nboujari", "1234qwertz", null),
      new User("Kristina", "Bilkova", "kbilkova@gmail.com", "kbilkova", "qwerty1234", null),
    ];
  }
  else {
    users = JSON.parse(localStorage.getItem('user'));
  }
  return users
}
