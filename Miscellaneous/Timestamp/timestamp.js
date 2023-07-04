const birth = new Date("January 10 2002 4:30:47");
const now = new Date();

console.log(now.getTime(), birth.getTime());

const diff = now.getTime() - birth.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const age = Math.round(days / (365 + 5));

console.log(mins, hours, days, age);

console.log(`I am ${age} age old`);

const timestamp = 4921485325043;
console.log(new Date(timestamp));
