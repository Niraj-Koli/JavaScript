const appendButton = document.querySelector(".append");
const prependButton = document.querySelector(".prepend");
const ul = document.querySelector("ul");

appendButton.addEventListener("click", () => {
    let characterName = prompt("Enter Name:");
    const li = document.createElement("li");
    li.textContent = characterName;
    ul.append(li);
});

prependButton.addEventListener("click", () => {
    let characterName = prompt("Enter Name:");
    const li = document.createElement("li");
    li.textContent = characterName;
    ul.prepend(li);
});

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target);
        e.target.remove();
    }
});
