const HOUR = 1000;

function kitchenOrder(hours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, hours * HOUR);
    })
}
function measurement(hours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, hours * HOUR);
    })
}
function chooseKitchen(hours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, hours * HOUR);
    })
}
function delivery(hours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, hours * HOUR);
    })
}
function assembly(hours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, hours * HOUR);
    })
}

// console.log("Choosing kitchen..");
// chooseKitchen(3).then(() => {
//     console.log("Kitchen chosen");
//     console.log("Measuring in progress..");
//     return measurement(1).then(() => {
//         console.log("Measure done");
//         console.log("Ordering..");
//         return kitchenOrder(2).then(() => {
//             console.log("Successfully ordered");
//             console.log("Waiting for delivery..");
//             return delivery(3).then(() => {
//                 console.log("Delivered");
//                 console.log("Assembly in progress..");
//                 return assembly(10).then(() => {
//                     console.log("Assembly done");
//                 })
//             })
//         })
//     })
// })
async function kitchenProject() {
    try {
        console.log("Choosing kitchen..");
        await (chooseKitchen(3))
        console.log("Kitchen chosen");
        console.log("Measuring in progress..");
        await (measurement(1));
        console.log("Measure done");
        console.log("Ordering..");
        await (kitchenOrder(2))
        console.log("Successfully ordered");
        console.log("Waiting for delivery..");
        await (delivery(3));
        console.log("Delivered");
        console.log("Assembly in progress..");
        await (assembly(10));
        console.log("Assembly done");
        return true;
    } catch {
        return false;
    }
}
kitchenProject().then((res) => {
    console.log(res)
})