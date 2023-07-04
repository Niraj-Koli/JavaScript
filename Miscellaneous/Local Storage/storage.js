localStorage.setItem("Name", "Kaizer");
localStorage.setItem("Age", 21);

let names = localStorage.getItem("Name");
let age = localStorage.getItem("Age");

console.log(names, age);

localStorage.setItem("Name", "Dante");
localStorage.Age = "19";

n = localStorage.getItem("Name");
a = localStorage.getItem("Age");

console.log(n, a);

localStorage.removeItem("Name");

na = localStorage.getItem("Name");
ag = localStorage.getItem("Age");

console.log(na, age);

localStorage.clear();

const stories = [
    { text: "Devils Of World", author: "Kaizer" },
    { text: "City Of Joy", author: "Dante" },
    { text: "World's Word", author: "Nero" },
];

console.log(JSON.stringify(stories));

localStorage.setItem("stories", JSON.stringify(stories));

const stored = localStorage.getItem("stories");

console.log(JSON.parse(stored));
