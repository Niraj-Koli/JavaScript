let number = 25;

console.log(number == 25);
console.log(number == 30);
console.log(number != 30);
console.log(number != 25);
console.log(number > 20);
console.log(number < 20);
console.log(number > 25);
console.log(number >= 25);
console.log(number <= 25);

let ai = "kaizer";

console.log(ai == "kaizer");
console.log(ai == "Kaizer");
console.log(ai > "sky"); // s > k // a - Z //
console.log(ai > "Sky"); // k > S // Maybe depends on ASCII values //
console.log(ai > "Kaizer");

let comp = 25;

console.log(comp == 25); // Loose comparison //
console.log(comp == "25");
console.log(comp != 25);
console.log(comp != "25");

console.log(comp === 25); // Comparators //
console.log(comp === "25");
console.log(comp !== 25);
console.log(comp !== "25");
