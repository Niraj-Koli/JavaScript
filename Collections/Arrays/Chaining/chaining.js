const players = [
    { name: "Kaizer", points: 20 },
    { name: "Vivy", points: 40 },
    { name: "Dante", points: 30 },
    { name: "Hertz", points: 10 },
    { name: "Nero", points: 50 },
];

const chain = players
    .filter((player) => player.points > 20)
    .map((player) => `The ${player.name} Has ${player.points} Points.`);

console.log(chain);
