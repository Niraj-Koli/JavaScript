const alpha = document.querySelector("p");

console.log(alpha.innerText);

alpha.innerText = "Hello, Universe";

console.log(alpha.innerText);

alpha.innerText += ". Hello, Galaxy";

console.log(alpha.innerText);

const beta = document.querySelectorAll("p");

beta.forEach((para) => {
    console.log(para.innerText);
    para.innerText += " !?%";
    console.log(para.innerText);
});

const gamma = document.querySelector(".content");

console.log(gamma.innerHTML);
gamma.innerHTML = "<h2 style='color: navy'>This is a list</h2>";
console.log(gamma.innerHTML);

const delta = ["Kaizer", "Vivy", "Dante"];

delta.forEach((buddies) => {
    gamma.innerHTML += `<li>${buddies}</li>`;
});

console.log(gamma.innerText);
