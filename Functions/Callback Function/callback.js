const fun = (callBack) => {
    let value = 17;
    callBack(value);
};

fun((value) => {
    console.log(value);
});

let buddies = ["Kaizer", "Dante", "Vivy", "Hertz", "Nero"];

const greet = (buddy) => {
    console.log(`Yo, ${buddy}!`);
};

buddies.forEach(greet);
