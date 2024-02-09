let number = prompt("Enter A Number:");

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}

let switchNumber =
    number % 3 === 0 && number % 5 === 0
        ? "FizzBuzz"
        : number % 3 === 0
        ? "Fizz"
        : number % 5 === 0
        ? "Buzz"
        : number;

console.log(switchNumber);
