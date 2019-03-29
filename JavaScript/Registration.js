var users = getSavedUsers()
    
// Bind the button to a variable for later use
var register = document.getElementById('submit-button'); // our button called "create user account" binded to the variable "register"
        
if (register) {
            register.onclick = function () {
            // Bind the two input fields and get the value
            var inputFirstName = document.getElementById('firstname');
            var inputLastName = document.getElementById('lastname');
            var inputEmail = document.getElementById('email');
            var inputUsername = document.getElementById('user');
            var inputPassword = document.getElementById('psw1');
            var inputRepeatPassword = document.getElementById('psw2');
        
            if(inputFirstName.value.length == 0 || inputLastName.value.length == 0 || inputEmail.value.length == 0 || inputUsername.value.length == 0 || inputPassword.value.length == 0 || inputRepeatPassword.value.length == 0) 
            {
                alert("Please type in the necessary information!");
                return false;
            };

            if (inputPassword.value.length < 8) 
            {
                alert("Password too short! Please choose again.")
                return false;
            };

            if (inputPassword.value.length !== inputRepeatPassword.value.length)
            {
                alert("Passwords do not match! Please type in again.")
                return false;
            }
            // Check if password matches repeatPassword
           
        
  
      // TODO check if username is already registered 
            for (var user of users ) {
                if (inputUsername.value == user.username)
                { 
                    alert ("Username occupied! Please choose other.")
                    return false;
                }

    }

      users.push(new User(inputUsername.value, null, null, inputUsername.value, inputPassword.value));
      localStorage.setItem('users', JSON.stringify(users));
    
      document.location.href = "ActivityRegisteredUser.html";

    }

  }
