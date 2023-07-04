// Primitive Types //

let alpha = 17;
let beta = alpha;

console.log(`Alpha: ${alpha}`, `Beta: ${beta}`);

alpha = 73;

console.log(`Alpha: ${alpha}`, `Beta: ${beta}`);

// Reference Types //

const gamma = { name: "Krimson", age: 21 };
const delta = gamma;

console.log(gamma, delta);

gamma.age = 47;

console.log(gamma, delta);

const epsilon = { name: "Burnz", age: 47 };
const zeta = { ...epsilon };

console.log(epsilon, zeta);

epsilon.age = 21;

console.log(epsilon, zeta);

// Assignment Types //

console.log(false === false);

console.log("Yo" === "Yo");

console.log([1, 2, 3] === [1, 2, 3]);

let obj1 = { 1: "Kaizer", 2: "Dante", 3: "Hertz" };

let obj2 = { 1: "Kaizer", 2: "Dante", 3: "Hertz" };

console.log(obj1 === obj2);

obj2 = obj1;

console.log(obj1 === obj2);
