const alpha = "kaizer";
const pattern1 = /[a-z]{7,}/;

let result1 = pattern1.test(alpha);
console.log(result1);

const beta = "krimson";

let result2 = pattern1.test(beta);
console.log(result2);

const gamma = "@941adkrimson%94cac3";

let result3 = pattern1.test(gamma);
console.log(result3);

const pattern2 = /^[a-z]{6,}$/;

let result4 = pattern2.test(gamma);
console.log(result4);

const delta = "Kaizer@10072147";
const pattern3 = /^.{7,}$/;

let result5 = pattern3.test(delta);
console.log(result5);

const epsilon = "Epsilon1007.epsilon.star.inertia.com";

let result6 = pattern3.test(epsilon);
console.log(result6);

const pattern4 = /^[a-zA-Z0-9]{10,50}$/;

const zeta = "Burnzy100721731747DEVILOFTHEWORLD";

let result7 = pattern4.test(zeta);
console.log(result7);

const iota = "Illusion";
const pattern5 = /^[a-zA-Z]{7,12}$/;

let result8 = pattern5.test(iota);

if (result8) {
    console.log("Regex Successfull !!!");
} else {
    console.log("Regex Failed !!!");
}

let result9 = iota.search(pattern5);
console.log(result9);

let kappa = "98314";

let result10 = kappa.search(pattern5);
console.log(result10);

let pattern6 = /Dante/;

console.log(pattern6);
console.log(pattern6.source);
console.log(pattern6.exec("Yo, Dante!"));

let str = "Well, I Am Dante";

console.log(str.match(pattern6));
console.log(str.search(pattern6));
console.log(str.replace(pattern6, "Haise"));
