// Function Declaration //

function sun() {
    console.log("Hello, Sun!");
}

sun();

// Function Expression //

const moon = function () {
    console.log("Hello, Moon!");
};

moon();

// Parameters And Arguments //

const greet = function (name, time) {
    // Parameters //
    console.log(`Good ${time}, ${name}!`);
};

greet();
greet("Kaizer", "Evening"); // Arguments //
greet("Vivy");

const hello = function (name = "Dante", time = "Night") {
    console.log(`Good ${time}, ${name}!`);
};

hello();
hello("Hertz", "Morning"); // Arguments //
hello("Nero");
