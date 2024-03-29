const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Could Not Fetch Data", undefined);
        }
    });

    request.open("GET", "todos.json");
    request.send();
};

getTodos((err, data) => {
    console.log("Callback Fired");

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
