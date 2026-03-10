// FIRST LET'S DISCUSS PROBLEM THEN GO TO PROMISES
// We have a restaurant and we want to order food from it. We have three steps in our process:
// 1. Prepare the order
// 2. Pick up the order
// 3. Deliver the order
function prepareOrderCB(dish,cb){
    setTimeout(()=> cb(null,{dish,status:"prepared"}),100);
}

function pickupOrderCB(order,cb){
    setTimeout(()=> cb(null,{...order,status:"Picked-up"}),100);
}

function deliverOrderCB(order,cb){
    setTimeout(()=> cb(null,{...order,status:"delivered"}),100);
}

prepareOrderCB("Biryani",(err,order)=>{     // 
    if(err) return console.log(err);
    pickupOrderCB(order,(err,order)=>{
        if(err) return console.log(err);
        deliverOrderCB(order,(err,order)=>{
            if(err) return console.log(err);
                console.log((`${order.dish}: ${order.status}`));
        });
    });
});

// LET'S SEE HOW TO SOLVE THIS PROBLEM USING PROMISES

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to write asynchronous code in a more synchronous and readable manner, avoiding the so-called "callback hell" that can occur when using nested callbacks. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means that the asynchronous operation completed successfully and the resulting value is available. When a Promise is rejected, it means that the asynchronous operation failed and an error is available. Promises provide methods like .then() and .catch() to handle the fulfillment and rejection of the Promise, allowing us to chain multiple asynchronous operations together in a more manageable way.

// CREATION OF PROMISES
function prepareOrder(dish){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!dish){
                reject(new Error("No dish their"));
                return;
            }
            console.log(`${dish} is ready`);
            resolve({dish,status:"Prepared"});
        },100)
    })
}

function pickupOrder(order){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!order){
                reject(new Error("No order to pickup"));
                return;
            }
            console.log(`${order.dish} is ready`);
            resolve({...order,status:"Picked-up"});
        },100)
    })
}

function deliverOrder(order){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!order){
                reject(new Error("No order to deliver"));
                return;
            }
            console.log(`${order.dish} is ready`);
            resolve({...order,status:"Delivered"});
        },100)
    })
}

// CONSUMPTION OF PROMISES
prepareOrder("Paneer Tikka")
    .then(order => pickupOrder(order))
    .then(order => deliverOrder(order))
    .catch(err => console.log(err.message));    // Error propagation: If any of the promises in the chain (prepareOrder, pickupOrder, or deliverOrder) encounters an error and rejects, the .catch() method will be triggered. This allows us to handle errors in a centralized manner, rather than having to handle errors separately for each promise. The .catch() method will catch any rejection that occurs in the promise chain and allow us to log the error or take appropriate action based on the error message. This is one of the key advantages of using promises, as it provides a cleaner and more efficient way to handle errors in asynchronous code.