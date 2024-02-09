const alpha = document.getElementById("byebye"); // Element is Singular returns an element //
console.log(alpha.innerHTML);
console.log(alpha);

const beta = document.getElementsByClassName("error"); // Elements in Plural returns array //
console.log(beta);
console.log(beta[1]);

const gamma = document.getElementsByTagName("p");
console.log(gamma);
console.log(gamma[2]);

const delta = document.getElementsByTagName("li");
console.log(delta);
console.log(delta.length);

delta[1].style.color = "red";
delta[1].style.fontSize = "25px";

const epsilon = document.getElementById("three");
console.log(epsilon);
console.log(epsilon.length);

epsilon.style.color = "green";
epsilon.style.fontFamily = "verdana";
epsilon.style.fontSize = "20px";

const zeta = document.getElementsByClassName("one");
console.log(zeta);
console.log(zeta.length);

zeta[0].style.color = "blue";
zeta[0].style.fontFamily = "cursive";
zeta[0].style.fontSize = "30px";

const theta = document.querySelector("p"); // querySelector returns an element // can combine two or many selectors //
console.log(theta);

const iota = document.querySelector(".error");
console.log(iota);

const kappa = document.querySelector("#beta");
console.log(kappa);

const lambda = document.querySelectorAll(".error");
console.log(lambda);
