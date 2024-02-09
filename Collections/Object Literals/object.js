let user = {
    logIn: function () {
        console.log("User Logged In");
    },

    name: "Kaizer", // key: value //
    age: "21",
    email: "kaizer@epsilon.star.in",
    location: "Switzerland",
    buddies: ["Nero", "Dante", "Hertz", "Vivy"],

    logBuddies() {
        console.log("The User Has Following Buddies:");
        this.buddies.forEach((bud) => {
            console.log(bud);
        });
    },

    books: [
        // Objects Array //
        { title: "Devils Of World", published: 2023, genre: "Drama, Thriller" },
        { title: "Hollow Pain", published: 2025, genre: "Mystery, Romance" },
        { title: "Revolution", published: 2027, genre: "Crime, Fantasy" },
    ],

    logBooks: function () {
        console.log("Books Of Reality:");
        this.books.forEach((book) => {
            console.log(
                `The book '${book.title}' was published in ${book.published} having "${book.genre}" genre.`
            );
        });
    },

    logOut() {
        console.log("User Logged Out");
    },
};

user.logIn();

console.log(user);

console.log(user.name);
console.log(user.age);

user.age = 25;
console.log(user.age);

console.log(user["location"]);

console.log(user.email);

user["email"] = "krimson@inertia.com";
console.log(user["email"]);

console.log(typeof user);

console.log(this);

user.logBuddies();

user.logBooks();

user.logOut();
