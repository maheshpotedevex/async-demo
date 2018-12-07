/*
const p = new Promise((resolve, reject) => {
    // Kick of some async work
    //...
    setTimeout(() => {
        //resolve(1);
        reject(new Error('I am error'));
    }, 2000);

    // reject(new Error('I am error'));
});

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('ERROR', err.message));
    */

// Creating Promise example
const p = new Promise((resolve, reject) => {
    // resolve(1);
    // reject(new Error('Can not moving forward due to error..'));
    console.log("start Async program");
    setTimeout(() => {
        //console.log("Resolve or Rejected.");
        reject(new Error('Can not moving forward due to error..'));
    }, 2000);
    console.log("End");
});
p
    .then(result => console.log('Result', result))
    .catch(err => console.log("Getting an error: ", err.message));