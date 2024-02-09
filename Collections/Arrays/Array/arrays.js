let names = ["Kaizer", "Vivy", "Dante"];
console.log(names);

console.log(names[1]);

let ninjas = ["Kaizer", "Vivy", "Dante"];

ninjas[1] = "Nero";
console.log(ninjas);

console.log(ninjas.length);

let a = ninjas.join(",");
console.log(a);

let b = ninjas.indexOf("Dante");
console.log(b);

let c = ninjas.concat(["Epsilon", "Illusion"]);
console.log(c);

let h = ninjas.slice(1, 3);
console.log(h);

let d = ninjas.push("Hertz");
console.log(d);
console.log(ninjas);

d = ninjas.pop();
console.log(d);
console.log(ninjas);

let e = ninjas.lastIndexOf("Dante");
console.log(e);

let f = ninjas.includes("Vivy");
console.log(f);

let ages = [10, 7, 21, 73];
console.log(ages);

console.log(ages[2]);

ages.unshift(2, 5);
console.log(ages);

ages.push(47, 91);
console.log(ages);

ages.splice(0, 3, 36, 19);
console.log(ages);

ages.shift();
ages.pop();

console.log(ages);

let g = ages.join("|");
console.log(g);

ages.sort();
console.log(ages);

ages.reverse();
console.log(ages);

let random = ["Burnz", 17, "&%?", "Faith", 91];
console.log(random);

const gadgets = [
    {
        name: "Pearl",
        age: 20,
    },
    {
        name: "Sky",
        age: 23,
    },
    {
        name: "Ray",
        age: 17,
    },
];

const result = gadgets.find(function (gadgets) {
    return gadgets.age > 20;
});

console.log(result);

const buddies = [
    "Kaizer",
    "Vivy",
    "Dante",
    "Nero",
    "Hertz",
    "Pearl",
    "Sky",
    "Ray",
];

for (let i = 0; i < buddies.length; i++) {
    console.log(i, buddies[i]);
}

for (let j of buddies) {
    console.log(j);
}

buddies.forEach(function (bud, index) {
    console.log(bud, index);
});

let numbers = [10, 7, 21, 47, 73, 91];

const eve = numbers.every(function (num) {
    return num > 0;
});
console.log(eve);

const so = numbers.some(function (num) {
    return num > 30;
});
console.log(so);
