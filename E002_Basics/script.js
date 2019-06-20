/**
 * Language basics example
 */

// Single line comment

/*
 * Multiline
 * comment
 */
var my_number = 42;
let my_fruit = "apple";

console.log(my_number);
console.log(my_fruit);

my_number = 1;
console.log(my_number);

// String concat
let name = "Emily";
let surname = "Pinkwood";
let person = name + " " + surname;
console.log("Person: ", person);

// Floating number
let little_pi = 3.14;
console.log("Number PI according to an engineer: ", little_pi);

console.log("Name: ", name, "\tLength: ", name.length);
console.log("First letter of the name: ", name[0]);

// Strings are immutable. You can not do character manipulation
// They are literals

// Last character of a string
console.log("Last letter of the name: ", name[name.length - 1]);

