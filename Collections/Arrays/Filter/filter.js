const scores = [10, 7, 21, 2, 17, 73, 97, 47];

const filteredScores = scores.filter((score) => score > 20);
console.log(filteredScores);

const users = [
    { name: "Kaizer", premium: false },
    { name: "Vivy", premium: true },
    { name: "Dante", premium: true },
    { name: "Hertz", premium: false },
    { name: "Nero", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);
