fetch("./faith.json")
    .then((response) => {
        console.log("Resolved", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)));
    })
    .catch((err) => {
        console.log("Rejected", err);
    });
