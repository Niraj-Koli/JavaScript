const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Could Not Fetch Data", undefined);
        }
    });

    request.open("GET", resource);
    request.send();
};

getTodos("todos/faith.json", (err, data) => {
    console.log(data);
    getTodos("todos/epsilon.json", (err, data) => {
        console.log(data);
        getTodos("todos/krimson.json", (err, data) => {
            console.log(data);
        });
    });
});
