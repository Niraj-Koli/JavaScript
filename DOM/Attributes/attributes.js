const link = document.querySelector("a");

console.log(link.attributes);
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://twitter.com/home?lang=en");
link.innerText = "Link to Twitter";

const msg = document.querySelector("p");

msg.textContent = "It is an Success";

console.log(msg.getAttribute("class"));

msg.setAttribute("class", "success");
msg.setAttribute("style", "color: green;");
