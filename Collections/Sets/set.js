const alpha = ["Kaizer", "Vivy", "Dante"];
console.log(alpha);

const set = new Set(alpha);
console.log(set);

const beta = [...new Set(alpha)];
console.log(beta);

const points = new Set();
points.add(10);
points.add(7).add(17);
points.add(21).add(10).add(47);

console.log(points, points.size);

points.delete(10);

console.log(points, points.size);

console.log(points.has(10), points.has(21));

// points.clear();
// console.log(points);

const gamma = new Set([
    { name: "Nero", gadgets: "Earpods", age: 17 },
    { name: "Dante", gadgets: "Glasses", age: 21 },
    { name: "Ray", gadgets: "Phone", age: 19 },
]);

gamma.forEach((gad) => {
    console.log(gad.name, gad.gadgets, gad.age);
});

const ws = new WeakSet();

const object1 = {};
const object2 = {};

ws.add(object1);
ws.add(object2);

console.log(ws);

console.log(ws.has(object1));
console.log(ws.has(object2));

ws.delete(object1);
console.log(ws.has(object1));
