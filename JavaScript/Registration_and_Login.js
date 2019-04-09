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
        
            for (var user of users ) {
                if (inputUsername.value == user.username)
                { 
                    alert ("Username occupied! Please choose other.")
                    return false;
                }

    }

      users.push(new User(inputUsername.value, null, null, inputUsername.value, inputPassword.value));
      localStorage.setItem('users', JSON.stringify(users));
    
      document.location.href = "Activity.html";

    }

  }

// var users = getSavedUsers()

var login = document.getElementById("login")

var counter = 3;

if (login) 
{
    login.onclick = function () 
    {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
    
        for (i = 0; i < users.length; i++) {
            if(username === users[i].username && password === users[i].password) 
            {
                alert("Welcome back " + username + "!")
                document.location.href = "Activity.html";
                return;
            }
        }  

        if (counter == 0) 
        {
            alert("You've entered the wrong username and password three times. You`re serious?");
            
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            login.disabled = true;

            return false;
         }
         else 
         {
            alert("Wrong username or password! You have " + counter + " attempt(s) left!");
            counter--;

            }
    }
}
 
