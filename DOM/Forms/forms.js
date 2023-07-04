const form = document.querySelector(".form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const feedback = document.querySelector(".feedback");
const passback = document.querySelector(".passback");
const userPattern = /^[a-zA-Z]{1,}$/;
const passPattern = /^.{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Username:", username.value);
    console.log("Password:", form.password.value);

    const user = form.username.value;

    if (userPattern.test(user)) {
        feedback.textContent = "Username Is Valid.";
        feedback.setAttribute("class", "success");
    } else {
        feedback.textContent = "Username Should Only Contains Alphabets.";
        feedback.setAttribute("class", "error");
    }

    const pass = password.value;

    if (passPattern.test(pass)) {
        if (pass.length > 12) {
            passback.textContent = "Password Is Strong.";
            passback.setAttribute("class", "success");
        } else {
            passback.textContent = "Password Is Weak.";
            passback.setAttribute("class", "error");
        }
    } else {
        passback.textContent = "Password Should Be At Least 8 Characters Long.";
        passback.setAttribute("class", "error");
    }
});

form.username.addEventListener("keyup", (e) => {
    console.log(e);
    if (userPattern.test(e.target.value)) {
        form.username.setAttribute("class", "green");
    } else {
        form.username.setAttribute("class", "red");
    }
});

form.password.addEventListener("keyup", (e) => {
    if (passPattern.test(e.target.value)) {
        form.password.setAttribute("class", "green");
    } else {
        form.password.setAttribute("class", "red");
    }
});
