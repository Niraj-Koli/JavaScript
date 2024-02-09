const alpha = function (length, breadth) {
    let area = length * breadth;
    console.log(area);
};

alpha(10, 7);
// console.log(area); // Gives error (Local variable = area) //

const beta = function (area, height) {
    let volume = area * height;
    return volume;
};

// const vol = beta(area, 5); // Cant Use //
const vol = beta(17, 21);
console.log(vol);

const gamma = function (length, breadth) {
    let area = length * breadth;
    return area;
};

const area = gamma(2, 4);
console.log(area);

const delta = function (area, height) {
    let volume = area * height;
    return volume;
};

const volume = delta(area, 5);
console.log(volume);
