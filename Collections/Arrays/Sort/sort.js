const alpha = ["Kaizer", "Vivy", "Dante", "Hertz", "Nero"];

alpha.sort();
console.log(alpha);

const beta = ["Kaizer", "Vivy", "Dante", "Hertz", "Nero"];

beta.reverse();
console.log(beta);

const gamma = ["Kaizer", "Vivy", "Dante", "Hertz", "Nero"];

gamma.sort();
gamma.reverse();
console.log(gamma);

const delta = [10, 7, 17, 2, 21, 73, 97, 47];

delta.sort();
console.log(delta);

const epsilon = [10, 7, 17, 2, 21, 73, 97, 47];

epsilon.reverse();
console.log(epsilon);

const zeta = [10, 7, 17, 2, 21, 73, 97, 47];

zeta.sort();
zeta.reverse();
console.log(zeta);

const iota = [10, 7, 17, 2, 21, 73, 97, 47];

iota.sort((a, b) => b - a);
console.log(iota);

const kappa = [10, 7, 17, 2, 21, 73, 97, 47];

kappa.sort((a, b) => a - b);
console.log(kappa);

const players = [
    { name: "Nero", score: 10 },
    { name: "Dante", score: 7 },
    { name: "Hertz", score: 21 },
    { name: "Vivy", score: 17 },
    { name: "Sky", score: 73 },
    { name: "Ray", score: 97 },
    { name: "Azrael", score: 47 },
];

players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
});

console.log(players);

const buddies = [
    { name: "Kaizer", score: 10 },
    { name: "Vivy", score: 30 },
    { name: "Dante", score: 20 },
];

buddies.sort((a, b) => b.score - a.score);

console.log(buddies);
