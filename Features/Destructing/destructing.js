// Array and Object Destructing //

const kaizer = {
    name: "Kaizer",
    age: 21,
    address: {
        long: 84913.643,
        lat: 36454.313,
    },
};

function greeting(user) {
    const { name, age, address } = user;
    const { long, lat } = address;

    console.log(`Hello ${name}, age ${age} From ${long}, ${lat}.`);
}

greeting(kaizer);

const buddies = [
    { name: "Nero", gadget: "Earbuds" },
    { name: "Dante", gadget: "Spectacles" },
    { name: "Vivy", gadget: "Phone" },
    { name: "Hertz", gadget: "Watch" },
    { name: "Roar", gadget: "Car" },
    { gadget: "Server" },
];

const [Nero, Dante, Vivy, Hertz, Roar, Pearl] = buddies;
console.log(Nero);
console.log(Dante);

const { name, gadget = "Computer" } = Vivy;
console.log(name, gadget);

const { name: ai, gadget: tool } = Hertz;
console.log(ai, tool);

function buddy(AI) {
    return [
        AI.name,
        function () {
            console.log(AI.gadget);
        },
    ];
}

const [buddyName, style] = buddy(Roar);

console.log(buddyName);
style();

const number = [10, 7, 21, 47];

[n1, n2] = number;
console.log(n1, n2);

[, , n3, n4] = number;
console.log(n3, n4);
