let score = "100";

console.log(score + 1, typeof score);

score = Number(score);

console.log(score + 1, typeof score);

let player = "Kaizer";

console.log(player, typeof player);

player = Number("Kaizer");

console.log(player, typeof player);

let integer = 17;

integer = String(integer);

console.log(integer, typeof integer);

let points = 1000;

points = Boolean(1000);
console.log(points, typeof points);

points = Boolean(0);
console.log(points, typeof points);

points = Boolean("Kaizer");
console.log(points, typeof points);

points = Boolean("");
console.log(points, typeof points);
