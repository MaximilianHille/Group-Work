function getSavedUsers() {
    var users;
        if (localStorage.getItem('users') === null) {
            users = [
                new User ("Maximilian", "Hille", "maximilian-hille@t-online.de", "mhille", "qwertz1234"),
                new User ("Nadia", "Boujari", "nboujari@gmail.com", "nboujari", "1234qwertz"),
                new User ("Kristina", "Bilkova", "kbilkova@gmail.com", "kbilkova", "qwerty1234"),
            ];
      } 
        else {
            users = JSON.parse(localStorage.getItem('users'));
            for (let i = 0; i < users.length; i++) {
              users[i] = new User(users[i].firstname, users[i].lastname, users[i].email, users[i].username, users[i].password);
            }
      }
    return users
  }
