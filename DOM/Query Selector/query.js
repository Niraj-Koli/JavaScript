const alpha = document.querySelector("body > h1");
console.log(alpha);

const beta = document.querySelector("p");
console.log(beta);

const zeta = document.querySelector("#byebye");
console.log(zeta);

const gamma = document.querySelector(".error");
console.log(gamma);

const delta = document.querySelector("div.error");
console.log(delta);

const epsilon = document.querySelectorAll("p");
console.log(epsilon);
console.log(epsilon[1]);

epsilon.forEach((epsi) => {
    console.log(epsi);
});
