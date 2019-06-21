/**
 * Conditionals example
 */

function strictEquality(a, b) {
    return a === b;
}

console.log(1 == 1);    // true
console.log(1 == 2);    // false
console.log(1 == '1');  // true
console.log("1" == 1);  // true
console.log(0 == []);   // true
console.log(1 === '1'); // false
console.log(1 === "1"); // false
console.log(0 === []);  // false

if (strictEquality(3, "3")) {
    console.log("They are equal");
} else {
    console.log("They are not equal");
    console.log(typeof 3);
    console.log(typeof "3");
}

