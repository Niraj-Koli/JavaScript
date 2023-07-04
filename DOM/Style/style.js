const alpha = document.querySelector(".alpha");

console.log(alpha.style);
console.log(alpha.style.color);

alpha.setAttribute("style", "margin: 50px;");

console.log(alpha.style.color);

const beta = document.querySelector(".beta");

beta.style.margin = "100px";

const gamma = document.querySelector(".gamma");

gamma.style.color = "red";
gamma.style.fontSize = "70px";
