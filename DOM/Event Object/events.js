const clickMe = document.querySelector(".clickMe");

clickMe.addEventListener("click", () => {
    console.log("Just Going On Fire.");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
    // console.log(e);
    console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos = ${e.offsetX}, y pos = ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
    console.log(e.pageX, e.pageY);
});
