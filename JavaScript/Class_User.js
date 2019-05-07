// we are creating our user class for each user/new user
// Classes are homogeneus categories of objects that share patterns, structrues

class User {

    // The constructor for our class, which will allow us to create new objects of our class
    // this is giving us 2 options:
    // 1. create hard coded users as seen in our database and assign them the properties written in the constructor
    // 2. push new registered users and their properties into the user class as a new object
    constructor(firstname, lastname, email, username, password, tracking) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        // tracking is currently "null" because there is nothing inside yet
        // as soon as trackings are saved to a current user they will be assigned to the tracking property
        this.tracking = null;
    }
}
