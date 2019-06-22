/**
 * ES6 example
 */


let my_var = 3
const MY_STR = "Oh hi Mark!"

// Person is mutable
// but can not refer to other object
const person = {
    "name": "emily",
    "country": "england"
}

// Makes object immutable
Object.freeze(person)

// Anonymous function
const a = function () {
    const num = 42
    return num
}

// Anonymous function with arrow syntax
const ans = () => {
    const num = 42
    return num
}

// When there is only return, body can be omitted
const answer = () => 42
let side = 5
const square = (side) => side * side

const SocialPosts = [
    {
        title: "good boy",
        shares: 14,
        likes: 27
    },
    {
        title: "meow meow",
        shares: 14,
        likes: 30
    },
    {
        title: "Little squirrel",
        shares: 13352,
        likes: 596322
    },
    {
        title: null,
        shares: 90,
        likes: 154
    }
]

console.log(SocialPosts);
console.log('\n\n\n')
console.log(SocialPosts.filter((post) =>
    post.title != null && 
    post.likes > 30
))
console.log('\n\n\n')


// Higher order functions
const arr = [3, -1, -1.3, 0, 7, 42, 3.14]

const squaredIntegers = (arr.filter((x) => x > 0))
    .filter((x) => Number.isInteger(x))
    .map((x) => x * x)

const addValue = function inc(number, value = 1) {
    return number + value
}

console.log(addValue(3))
console.log(addValue(3, 2))
console.log('\n\n\n')

// Variable length arguments
const howManyArgs = function (...args) {
    return args.length
}

console.log(howManyArgs(1, 2, 3))
console.log(howManyArgs(1, 1, 1, 1))
console.log('\n\n\n')


// Spread operator
const numbers = [1, 2, 3, 4, 2, 9]
console.log(Math.max(...numbers))


// Class definition
class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}