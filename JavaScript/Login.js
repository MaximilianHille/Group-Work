var users = getSavedUsers()


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
                document.location.href = "ActivityRegisteredUser.html";
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
 
