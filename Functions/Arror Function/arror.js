const alpha = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
};

console.log(alpha(10));

const beta = function (radius) {
    return 3.14 * radius ** 2;
};

console.log(beta(7));

const gamma = (radius) => {
    return 3.14 * radius ** 2;
};

console.log(gamma(17));

const delta = (radius) => 3.14 * radius ** 2;

console.log(delta(21));

const epsilon = () => "Hello, Star!";

console.log(epsilon());

const zeta = (pi, radius) => {
    let area = 0;
    for (let i = 0; i < radius.length; i++) {
        area += pi * radius[i] ** 2;
    }
    return area;
};

console.log(zeta(3.14, [10, 7, 17, 21])); // Sum of above Areas //
