function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

function calculator(n1, n2, operation) {
    return operation(n1, n2);
}

console.log(calculator(10, 7, add));

console.log(calculator(10, 7, sub));

console.log(calculator(10, 7, multiply));

console.log(calculator(10, 7, div));
