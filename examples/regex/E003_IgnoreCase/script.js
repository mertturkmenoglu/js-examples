let str1 = "Emily is my love";
let str2 = "EMILY IS THE HERO!";
let str3 = "E-M-I-L-Y";
let regex = /Emily/i; // Ignore flag

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));