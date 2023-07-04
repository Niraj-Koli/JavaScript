const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Error getting resource");
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

getTodos("todos/faith.json")
    .then((data) => {
        console.log("Promise 1 Resolved:", data);
        return getTodos("todos/epsilon.json");
    })
    .then((data) => {
        console.log("Promise 2 Resolved:", data);
        return getTodos("todos/krimson.json");
    })
    .then((data) => {
        console.log("Promise 3 Resolved", data);
    })
    .catch((err) => {
        console.log("Promise Rejected:", err);
    });
