const scores = [30, 50, 25, 0, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue; // Goes back at start of loop //
    }

    console.log("Your Score:", scores[i]);

    if (scores[i] === 100) {
        console.log("Congrats, You Got The Top Score !!!");
        break;
    }
}
