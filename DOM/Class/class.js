const content = document.querySelector("p.content");

console.log(content.classList);

content.classList.add("error");
content.classList.remove("error");
content.classList.add("success");

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
    if (p.textContent.includes("error")) {
        p.classList.add("error");
    } else if (p.textContent.includes("success")) {
        p.classList.add("success");
    } else {
        p.classList.add("size");
    }
});

const title = document.querySelector(".h1");

title.classList.toggle("title");
