let faith = {
    name: "Faith",
    style: "Black",
    noobness: 10,
    isAI: true,
    age: 21,
    friends: ["Danger", "Slayer"],

    calculateAge: function () {
        console.log(`${this.name} is ${this.age} Years Old.`);
    },

    books: {
        names: "Devil's Of World",
        author: "Kaizer Williams",
    },
};

console.log(faith);

faith.email = "faith@dark.com";
faith["role"] = "Field Marshall";

faith.isAI = false;
faith.age = faith.age + 5;

let real = "weapon";
faith[real] = "Drones";

delete faith.style;

console.log(faith);

console.log(faith.name);

console.log(faith["age"]);

faith.calculateAge();

for (i in faith) {
    console.log(i, faith[i]);
}

console.log(Object.keys(faith));
console.log(Object.values(faith));

for (val of Object.values(faith)) {
    console.log(val);
}

console.log(faith.books);
console.log(faith.books.names);
console.log(faith.books.author);

// Object Destructuring //
const { name, age, noobness } = faith;

console.log(name, age, noobness);

const { names, author } = faith.books;

console.log(names, author);

const htiaf = Object.assign({}, faith);

console.log(htiaf);
