function UserName(username, email) {
    this.username = username;
    this.email = email;
}

UserName.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
};

UserName.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
};

function Admin(username, email, age) {
    UserName.call(this, username, email);
    this.age = age;
}

Admin.prototype = Object.create(UserName.prototype);

Admin.prototype.deleteUser = function () {};

const kaizer = new UserName("Kaizer", "kaizer@illusion.secret.city");
const dante = new UserName("Dante", "dante@illusion.devil.society.com");
const azrael = new Admin("Azrael", "azrael@illusion.revolution.com", "17");

console.log(kaizer, dante, azrael);

kaizer.login();
kaizer.logout();

dante.login().logout();
