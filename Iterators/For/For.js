for (let i = 0; i < 5; i++) {
    console.log("In loop:", i);
}

console.log("Loop Finished");

const names = ["Kaizer", "Vivy", "Dante"];

for (let j = 0; j < names.length; j++) {
    console.log(names[j]);
}

for (let z = 2; z >= 0; z--) {
    console.log(names[z]);
}

const nero = {
    name: "Nero",
    age: "T-32142",
    made: 2025,
    gadget: "Earbuds",
};

for (let key in nero) {
    console.log(key, nero[key]);
}

let num = [10, 7, 21, 47, 73];

console.log(num);

for (index in num) {
    console.log(index, num[index]);
}

for (n of num) {
    console.log(n);
}
