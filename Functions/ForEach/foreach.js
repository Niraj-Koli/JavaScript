const ul = document.querySelector(".buddies");

const buddies = ["Kaizer", "Vivy", "Dante", "Hertz", "Nero"];

let html = ``;

buddies.forEach((buddy) => {
    html += `<li><h2>${buddy}</h2></l1>`;
});

console.log(html);

ul.innerHTML = html;
