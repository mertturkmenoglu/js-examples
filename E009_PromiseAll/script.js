const promiseOne = new Promise((resolve, reject) => {
    resolve("Promise One Resolved");
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve("Promise Two Resolved");
});

const promiseThree = new Promise((resolve, reject) => {
    resolve("Promise Three Resolved");
});

Promise.all([promiseOne, promiseTwo, promiseThree]).then((msgs) => {
    console.log(msgs);
});

Promise.race([promiseOne, promiseTwo, promiseThree]).then((msg) => {
    console.log(msg);
})