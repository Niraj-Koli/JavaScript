function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    return Math.round(bmi);
}

let kaizer = bmiCalculator(77, 5.8);
console.log(kaizer);
