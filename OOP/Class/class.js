class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.username} just logged in.`);
    }

    logout() {
        console.log(`${this.username} just logged out.`);
    }

    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score} !`);
    }
}

const alpha = new User("Kaizer", "kaizer@epsilon.com");
const beta = new User("Vivy", "vivy@inertia.in");

console.log(alpha);
alpha.login();
alpha.incScore();
alpha.incScore();
alpha.incScore();
alpha.logout();

console.log(beta);
// beta.login().incScore().incScore().incScore().logout(); // Will give error //

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

const gamma = new UserName("Dante", "dante@epsilon.inertia.in");
const delta = new UserName("Hertz", "hertz@inertia.usa.com");

console.log(gamma);
gamma.login();
gamma.incScore();
gamma.incScore();
gamma.incScore();
gamma.logout();

console.log(delta);
delta.login().incScore().incScore().incScore().logout();
