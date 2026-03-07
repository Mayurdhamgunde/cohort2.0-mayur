// pending, done(fullfill,resolve), nope(not,reject,nako) : - PROMISE contain these 3 states

/*

const promise = new Promise();  // this will give error because promise constructor function require a callback function as an argument which will be executed immediately and it will receive two functions as arguments, resolve and reject, which are used to change the state of the promise. The resolve function is called when the asynchronous operation is successful, and the reject function is called when the asynchronous operation fails. So, we need to provide a callback function to the Promise constructor to handle the asynchronous operation and change the state of the promise accordingly.
console.log(promise);

*/

/*

const promise = new Promise((resolve,reject)=>{});
console.log(promise);
// This will log a Promise object in the pending state, because the callback function passed to the Promise constructor does not call either the resolve or reject function, so the promise remains in the pending state indefinitely. To change the state of the promise, we need to call either the resolve or reject function within the callback function, depending on whether the asynchronous operation was successful or not.

*/


/*

const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Chaicode");
    },2000)
});
console.log(promise);

setTimeout(()=>{
    console.log(promise)}
,3000)  // This will log the Promise object in the pending state immediately, and then after 2 seconds, it will log the resolved value "Chaicode" when the promise is fulfilled. After 3 seconds, it will log the same resolved value "Chaicode" again, because the promise has already been fulfilled and its value is available.

// See this above method works well no issue in its working but see it is not good way and not looking good though.

*/

const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Chaicode");
        rej(new Error("Chaicode")); // This will not have any effect because once a promise is resolved or rejected, its state cannot be changed. In this case, the promise is resolved with the value "Chaicode", and the subsequent call to reject will be ignored. The promise will remain in the fulfilled state with the value "Chaicode", and the error message will not be propagated or handled in any way. It's important to note that a promise can only be resolved or rejected once, and any subsequent calls to resolve or reject will have no effect on the state of the promise.
    },2000);
});
console.log(promise);

promise.then((value)=>{
    console.log(value); 
}) // The .then() method is used to handle the fulfillment of the promise and allows us to access the resolved value when it becomes available. This approach is more readable and easier to manage than using nested callbacks, especially when dealing with multiple asynchronous operations.

/*

promise.then(console.log); 
// This is a shorthand way of writing the above .then() method, where we directly pass the console.log function as the callback to handle the resolved value of the promise. It will log the resolved value "Chaicode" when the promise is fulfilled, just like the previous example. This approach is even more concise and can be useful when we simply want to log the resolved value without needing to perform any additional operations on it.

promise.then((data)=>console.log(data)); // This is same as above, just a different way of writing the .then() method. It will also log the resolved value "Chaicode" when the promise is fulfilled. The choice between these two styles is mostly a matter of personal preference and readability, but using console.log directly can be more concise when we don't need to perform any additional operations on the resolved value.

*/

// then ke andar hume 2 parameters milte hai 
promise.then((data)=>console.log(data),(error)=>console.log(error)); // This is an example of using the .then() method with both fulfillment and rejection handlers. The first callback function is executed when the promise is fulfilled, and it logs the resolved value "Chaicode". The second callback function is executed when the promise is rejected, and it logs the error message if the promise were to be rejected. However, in this case, since the promise is resolved successfully, only the first callback will be executed, and the second callback will be ignored. It's important to note that it's generally recommended to use .catch() for handling rejections instead of providing a second callback to .then(), as it can lead to better readability and separation of concerns in your code.

// ye upar ka syntax thoda sa clumsy lagta hai isliye hum generally .then() ke andar sirf success handler dete hai aur error handler ke liye .catch() method ka use karte hai, jisse code zyada readable aur maintainable ban jata hai.

promise.then((data)=>console.log(data)).catch((error)=>console.log(error)); // This is the recommended way to handle both fulfillment and rejection of a promise. The .then() method is used to handle the fulfillment of the promise, while the .catch() method is used to handle any errors that may occur during the asynchronous operation. In this example, if the promise were to be rejected, the error message would be logged in the .catch() block, while if the promise is fulfilled successfully, the resolved value "Chaicode" would be logged in the .then() block. This approach provides better separation of concerns and improves the readability of the code.

// .then() actually values ko aage pass karta hai, aur .catch() errors ko aage pass karta hai, isliye hum in dono methods ka use karke asynchronous code ko zyada clean aur manageable bana sakte hai.


/*

promise
    .then((data)=>console.log(data)) // its value is passed to the next .then() method in the chain, allowing us to perform additional operations on the resolved value if needed.
    .then(console.log) // This will log undefined because the previous .then() method does not return any value, so the resolved value passed to this .then() method is undefined. If we want to pass the resolved value from the previous .then() method to the next one, we need to return it explicitly from the first .then() method.
    .catch((error)=>console.log(error)) 
    // This will catch any errors that occur in any of the previous .then() methods in the chain and log the error message. It's important to note that if an error occurs in any of the .then() methods, the subsequent .then() methods will be skipped, and the control will be transferred directly to the nearest .catch() method in the chain.

*/


// prromise
//     .then((data)=>{
//         data.toUpperCase()
//     })
//     .then(console.log) // This will log undefined because the previous .then() method does not return any value, so the resolved value passed to this .then() method is undefined. To fix this, we need to return the modified data from the first .then() method, like this:
//     .catch((error)=>console.log(error));


// promise
//     .then((data)=>{
//         newData = data.toUpperCase(); 
//         return newData;     // Now the modified data will be passed to the next .then() method in the chain, and it will log "CHAICODE" as expected.
//     })
//     .then(console.log)
//     .catch((error)=>console.log(error));



//eg : - 

promise
    .then((data)=>{
        newData = data.toUpperCase();
        return newData;     
    })
    .then((data)=>{
        return data + ".com";
    })
    .then(console.log) // This will log "CHAICODE.com" because the resolved value from the previous .then() method is passed to the next .then() method in the chain, allowing us to perform additional operations on it. In this case, we first convert the resolved value to uppercase and return it, and then we concatenate ".com" to it and return the final result, which is logged in the last .then() method.
    .catch((error)=>console.log(error));
    // This demonstrates how we can chain multiple .then() methods together to perform a series of operations on the resolved value of a promise, while also handling any potential errors that may occur during the process using .catch(). This approach allows us to write asynchronous code in a more readable and maintainable way, avoiding the pitfalls of callback hell and making it easier to manage complex asynchronous workflows.


    /*
    
    promise
        .then((data)=>{
            newData = data.toUpperCase();
            return newData;     
        })
        .then((data)=>{
            return data + ".com";
        })
        .then(console.log)
        .catch((error)=>{
            console.log(error)
            return "Chai"
        })
        .then(console.log) 
        // This will log "Chai" because the .catch() method is used to handle any errors that may occur in the previous .then() methods. If an error occurs, the .catch() block will execute and log the error message, and then it will return the string "Chai". This returned value will be passed to the next .then() method in the chain, which will log "Chai" as the final output. 
        // This demonstrates how we can use .catch() not only to handle errors but also to provide a fallback value or alternative flow in case of an error, allowing our code to continue executing gracefully even when something goes wrong.
    
    */