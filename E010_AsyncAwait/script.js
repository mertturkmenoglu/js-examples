function request(url) {
    return new Promise((resolve, reject) => {
        console.log(`Request URL: ${url}`);
        if (url === 'http://github.com') {
            resolve('Valid URL');
        } else {
            reject('Invalid URL');
        }
    });
}

function process(response) {
    return new Promise((resolve, reject) => {
        console.log('Process continues');
        resolve(`Information recieved: ${response}`);
    });
}


// // Promise
// request('http://github.com').then(response => {
//     console.log('Response recieved');
//     return process(response);
// }).then(processed => {
//     console.log(processed);
// }).catch(err => {
//     console.log(err);
// });

// Async - Await
async function work() {
    try {
        const response = await request('http://github.com');
        console.log('Response recieved');
        const processed = await process(response);
        console.log(processed);
    } catch (err) {
        console.log(err);
    }
}

work()