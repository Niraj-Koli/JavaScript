const now = new Date();

console.log(dateFns.isToday(now));

console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd, Do MMMM YYYY"));

const nova = new Date("November 7 2002 13:35:47");

console.log(dateFns.distanceInWords(now, nova, { addSuffix: true }));
