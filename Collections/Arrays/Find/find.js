const scores = [10, 7, 73, 21, 2, 17, 97, 47];

const highScores = scores.find((score) => score > 40);

console.log(highScores);

const highIndex = scores.findIndex((score) => score > 40);

console.log(highIndex);
