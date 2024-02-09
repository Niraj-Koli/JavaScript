const points = [10, 7, 21, 2, 17, 97, 73, 47];

const result = points.reduce((acc, current) => {
    if (current > 50) {
        acc++;
    }
    return acc;
}, 0); // Redefine acc = 0 // Since there are 2 number > 50, result = 2 //

console.log(result);

const scores = [
    { player: "Nero", score: 70 },
    { player: "Dante", score: 20 },
    { player: "Hertz", score: 10 },
    { player: "Kaizer", score: 30 },
    { player: "Dante", score: 50 },
    { player: "Kaizer", score: 50 },
    { player: "Nero", score: 10 },
    { player: "Hertz", score: 40 },
    { player: "Dante", score: 70 },
    { player: "Nero", score: 30 },
];

const neroTotal = scores.reduce((acc, current) => {
    if (current.player === "Nero") {
        acc += current.score;
    }
    return acc;
}, 0);

console.log("Nero =", neroTotal);

const danteTotal = scores.reduce((acc, current) => {
    if (current.player === "Dante") {
        acc += current.score;
    }
    return acc;
}, 0);

console.log("Dante =", danteTotal);

const hertzTotal = scores.reduce((acc, current) => {
    if (current.player === "Hertz") {
        acc += current.score;
    }
    return acc;
}, 0);

console.log("Hertz =", hertzTotal);

const kaizerTotal = scores.reduce((acc, current) => {
    if (current.player === "Kaizer") {
        acc += current.score;
    }
    return acc;
}, 0);

console.log("Kaizer =", kaizerTotal);

const numbers = [10, 7, 21, 47, 2];

let final = numbers.reduce((accumulator, currentNumber) => {
    console.log("Accumulator = " + accumulator);
    console.log("Current Number = " + currentNumber);

    return accumulator + currentNumber;
});
