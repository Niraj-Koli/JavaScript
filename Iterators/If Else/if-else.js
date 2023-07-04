const password = "Krimson@10072173Star";
// const password = "Dante@1007";
// const password = "123";

if (password.length >= 15 && password.includes("@")) {
    console.log("Password Is Strong");
} else if (
    password.length >= 10 ||
    (password.includes(Number) && password.includes("@"))
) {
    console.log("Password Is Good");
} else {
    console.log("Password Is Weak");
}

let user = false;

if (!user) {
    console.log("Yo, Boolean!");
}

console.log(true, !true);
console.log(false, !false);

let n1 = 10;
let n2 = 7;

let n = n1 > n2 ? "n1 is greater" : "n2 is greater";

console.log(n);
