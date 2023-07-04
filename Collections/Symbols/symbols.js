const alpha = Symbol("A Name");
const beta = Symbol("A Name");

console.log(alpha, beta);
console.log(typeof alpha);

console.log(alpha === beta);

const ninja = {};

ninja.age = 21;
ninja["belt"] = "Yellow";
ninja["belt"] = "Black";

ninja[alpha] = "Hattori";
ninja[beta] = "Naruto";

console.log(ninja);
