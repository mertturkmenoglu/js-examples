function calculation() {
    return true;
}

let promise = new Promise((resolve, reject) => {
    let result = calculation();
    if (result) {
        resolve("Success: " + result);
    } else {
        reject("Fail: " + result);
    }
});

promise.then((msg) => {
    console.log("Then block => " + msg);
}).catch((msg) => {
    console.log("Catch block => " + msg);
});