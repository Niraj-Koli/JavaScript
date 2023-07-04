// Rest //

const alpha = (...nums) => {
    console.log(nums);
    return nums.map((num) => num * 2);
};

const result = alpha(10, 7, 17, 2, 47, 21, 73);
console.log(result);

// Spread //

const beta = ["Kaizer", "Vivy", "Dante"];
console.log(...beta);

const zeta = ["Nero", "Hertz", beta];
console.log(zeta);

const gamma = ["Pearl", "Ray", ...beta];
console.log(gamma);

const delta = { name: "Nero", speed: 100, job: "AI Buddy" };
const epsilon = { ...delta, build: "Epsilon City" };

console.log(epsilon);
