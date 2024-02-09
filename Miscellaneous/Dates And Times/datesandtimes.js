const now = new Date();

console.log(now);
console.log(typeof now);

console.log("Full Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

console.log("Timestamp:", now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("en-US"));
console.log(now.toLocaleDateString("en-US", options));
console.log(now.toLocaleDateString("hi-IN"));
console.log(now.toLocaleDateString("hi-IN", options));
console.log(now.toLocaleDateString("ja-JP"));
console.log(now.toLocaleDateString("ja-JP", options));
