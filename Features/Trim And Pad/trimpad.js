let x = "2";
let y = "7";

console.log(x.padStart(9, "0"));
console.log(y.padEnd(6, "1"));

let trim = "        Epsilon          ";

console.log(trim.length, trim);

let trim1 = trim.trimStart();
console.log(trim1.length, trim1);

let trim2 = trim.trimEnd();
console.log(trim2.length, trim2);

let trim3 = trim.trim();
console.log(trim3.length, trim3);
