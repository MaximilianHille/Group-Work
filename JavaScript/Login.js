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

function existingUser() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < registeredUser.length; i++) {
        if(username == registeredUser[i].username && password == registeredUser[i].password) {
            alert(username + " is logged in!")
            return;
        } else {
            alert("Wrong username or password")
        }
    }
}
