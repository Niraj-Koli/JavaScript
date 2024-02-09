const prices = [10, 7, 21, 2, 73, 97, 47, 17];

const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

const players = [
    { name: "Kaizer", points: 20 },
    { name: "Vivy", points: 40 },
    { name: "Dante", points: 30 },
    { name: "Hertz", points: 10 },
    { name: "Nero", points: 50 },
];

const salePlayers = players.map((play) => {
    if (play.points > 30) {
        return { name: play.name, points: play.points / 2 };
    } else {
        return play;
    }
});

console.log(salePlayers);
console.log(players);
