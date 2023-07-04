const article = document.querySelector("article");

console.log(article.children);
console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach((child) => {
    child.classList.add("elements");
});

const family = document.querySelector("h2");

console.log(family.parentElement);
console.log(family.parentElement.parentElement);
console.log(family.nextElementSibling);
console.log(family.previousElementSibling);

console.log(family.nextElementSibling.parentElement.children);
