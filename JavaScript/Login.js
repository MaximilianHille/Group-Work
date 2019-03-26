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
    var password = document.getElementById("psw").value

    for (i = 0; i < registeredUser.length; i++) {
        if(username == regsiteredUser[i].username && password == registeredUser[i].password) {
            console.log(username + " is logged in!")
            return
        }
    }
    alert("Wrong username or password!")
}
