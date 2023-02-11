const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if (count > 100) {
            reject(new Error("Too many wring-outs"))
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME)
    });
}
function squatting(count) {
    return new Promise((resolve, reject) => {
        if (count > 1000) {
            reject(new Error("Too many squats"));
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

console.log("Training started");
wringOut(10).then(() => {
    console.log("made 10 wring-outs")
    return squatting(1001);
}).then(() => {
    console.log("Made 20 squats")
}).catch((err) => {
    console.log(err.toString());
});