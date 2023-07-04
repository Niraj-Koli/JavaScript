class UserName {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.username} just logged in.`);
        return this;
    }

    logout() {
        console.log(`${this.username} just logged out.`);
        return this;
    }

    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score} !`);
        return this;
    }
}

class Admin extends UserName {
    constructor(username, email, age) {
        super(username, email);
        this.age = age;
    }

    deleteUser(user) {
        users = users.filter((u) => u.username !== user.username);
    }
}

const alpha = new UserName("Kaizer", "kaizer@epsilon.inerita.com");
const beta = new UserName("Vivy", "vivy@inertia.uk.in");
const gamma = new Admin("Dante", "dante@epsilon.in", "17");

console.log(alpha, beta);
console.log(gamma);

let users = [alpha, beta, gamma];
console.log(users);

gamma.deleteUser(beta);
console.log(users);

// alpha.deleteUser(gamma);
// console.log(users);
