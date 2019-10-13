let str1 = "Emily is the best!";
let str2 = "Diana is OK too!";
let str3 = "Nobody loves Selina... Except Bruce, of course.";
let regex = /Emily|Diana/;

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));
