// Strings Are Immutable //

console.log("Hello, JavaScript!");

let names = "Haise";
let firstName = "Kaizer";
let lastName = "Williams";

let full = names.concat(firstName, lastName);
console.log(full, typeof full);

// Concatenation //
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(typeof fullName);

console.log(fullName[2]);

console.log(fullName.charAt(7));

console.log(fullName.length); // Properties //

console.log(fullName.toUpperCase()); // Methods //

let result = fullName.toLowerCase();
console.log(result);

console.log(fullName);

let email = "kaizer@epsilon.star.in";
console.log(email);

console.log(email.search("eps"));

console.log(email.indexOf("@"));

console.log(email.lastIndexOf("s"));

console.log(email.slice(4, 10));

console.log(email.substring(4, 10));

console.log(email.replace("n", "w"));

console.log(email.startsWith("burnz"));

console.log(email.startsWith("kaizer"));

console.log(email.endsWith("in"));

console.log(email.endsWith("com"));

console.log(email.split("."));

const title = "Devils Of Future";
const author = "Kaizer Williams";
const likes = "10072173";

let concat =
    "The book '" + title + "' by '" + author + "' have " + likes + " likes.";
console.log(concat);

// Template String //
let template = `The book '${title}' by '${author}' has ${likes} likes.`;
console.log(template);

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This book has ${likes} likes.</span>
    `;
console.log(html);

let alpha = 9382314;
console.log(alpha.toString(), typeof alpha);

let beta = false;
console.log(beta.toString(), typeof beta.toString());

let gamma = [10, 7, 21, 47, 73];
console.log(gamma.toString(), typeof gamma);

// \ -- The Escape Character used in 'It\'s' //
