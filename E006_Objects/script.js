/**
 * Objects example
 */

function sep() {
    console.log("\n\n--------\n\n");
}

function namestr(val) {
    return val + " Name";
}

function phoneticLookup(val) {
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    return lookup[val];
}

let dog = {
    "name": "Good Boy",
    "legs": 4,
    "tails": 1,
    "enemies": ["Everyone", "Mr. Wick"]
};

console.log(dog);
sep();
console.log("Name of the dog: ", dog.name);
sep();

let sherlock = {
    "Full Name": "Sherlock Holmes",
    "Friend Name": "John Watson",
    "Brother": "Mycroft Holmes"
};

console.log(sherlock["Full Name"]);
console.log(sherlock["Friend Name"]);
console.log(sherlock["Brother"]);
sep();

let a = namestr("Full");
console.log(sherlock[a]);
sep();

sherlock.enemy = "Moriarty";
console.log(sherlock);
sep();

delete sherlock.enemy;
console.log(sherlock);
sep();

console.log(phoneticLookup("alpha"));
sep();

let cube = {
    "side": 5,
    "volume": 125
};

console.log("Has side? ", cube.hasOwnProperty("side"));
console.log("Has side? ", cube.hasOwnProperty("area"));
sep();

let students = [
    {
        "name": "Emily",
        "age": 18,
        "branch": "English",
        "friends": [
            "Gwen", "Arya", "Sophia"
        ]
    },
    {
        "name": "Gwen",
        "age": 19,
        "branch": "Martial Arts",
        "friends": [
            "Arya", "Gwen"
        ]
    }
];

console.log(students);
console.log("Gwen's first friend: ", students[1].friends[0]);
sep();

let studentsCopy = JSON.parse(JSON.stringify(students));