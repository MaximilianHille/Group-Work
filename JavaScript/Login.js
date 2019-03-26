var registeredUser = [
    {
        username: "mhille",
        password: "qwertz"
    },
    {
        username: "kbilkova",
        password: "qwerty"
    },
    {
        username: "nboujari",
        password: "1234qwertz"
    }
]


var login = document.getElementById("login")

login.onclick = function existingUser () 
{
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < registeredUser.length; i++) {
        if(username === registeredUser[i].username && password === registeredUser[i].password) 
        {
            alert("Welcome back " + username)
            document.location.href = "ActivityRegisteredUser.html";
           return;
        } 
    }
    alert("Wrong username or password!")
}
