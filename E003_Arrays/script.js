/**
 * Arrays example
 */

// They contain mixed type items
let my_arr = ["Emily", 18];
console.log(my_arr);

// Nested arrays
let my_2d_arr = [["Emily", 18], ["John", -1]];
console.log(my_2d_arr);

console.log("First element of my array: ", my_arr[0]);

// Push adds to end
let my_numbers = [];
console.log(my_numbers);
my_numbers.push(0);
console.log(my_numbers);
my_numbers.push(1);
console.log(my_numbers);

// Pop removes from end
let last = my_numbers.pop();
console.log(last);
console.log(my_numbers);

// shift removes from head
my_numbers = [0, 1, 2, 3, 4, 5];
console.log(my_numbers);
let first = my_numbers.shift();
console.log(my_numbers);
console.log(first);

// unshift adds to head
my_numbers = [2, 3, 4, 5];
console.log(my_numbers);
my_numbers.unshift(1);
my_numbers.unshift(0);
console.log(my_numbers);