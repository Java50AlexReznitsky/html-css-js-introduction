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
async function myTraining() {
    try {
        console.log("Training started");
        await wringOut(10)
        console.log("made 10 wring-outs")
        await squatting(1001);
        console.log("Made 20 squats")
        return true;
    } catch (err) {
        console.log(err.toString());
        return false;
    }
}
console.log(myTraining());
// expected 
// Training started
// Promise { <pending> }
// made 10 wring-outs
// Error: Too many squats

myTraining().then((res) => {
    console.log(res)
})
// expected
// Training started
// made 10 wring-outs
// Error: Too many squats
// false