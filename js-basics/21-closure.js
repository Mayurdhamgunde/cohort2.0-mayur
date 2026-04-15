// function init(){
//     let name = "Mozilla";   // name is a local variable created by init
//     function displayName(){
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use vairable declared in the parent function
//     }
//     displayName();
// }
// init();

/*

function makeFunc(){            // makeFunc is the outer function that creates a closure
const name = "Mozilla";     // name is a local variable created by makeFunc
function displayName(){     // displayName is the inner function that forms a closure
console.log(name);      // use variable declared in the parent function
return displayName;     // return the inner function, thus exposing it to outer scope
}                               
}

const myFunc = makeFunc();  // 
myFunc();

*/


function eternal(guest){    // eternal is the outer function that creates a closure
    const guestName = guest;        // guestName is a local variable created by eternal
    let count = 0;          // 

    function zomato(){          // zomato is the inner function that forms a closure
        console.log(`Hi ${guestName}, from zomato`);        // use variable declared in the parent function
    }

    function blinkit(){
        if(count === 1)return;          // if count is 1 then return and do not execute the rest of the code  
        console.log(`Hi ${guestName}, from blinkit`);       
        count++;        
    }
    // zomato();
    // blinkit();
    return{
        zomato,
        blinkit
    }
}

const hitesh = eternal("hitesh");
const piyush = eternal("Piyush")    // here we are creating two different closures for hitesh and piyush, so they will have their own copy of guestName and count variable

piyush.zomato();
hitesh.blinkit()    
hitesh.blinkit()
hitesh.blinkit()
hitesh.blinkit()

// its is nothing but react useMemo() ye hook kya karta hai agar function mai kuch change nahi hua toh voh reference ko hold karke rakhta hai optimization keliye; 
// closure is a powerful concept in JavaScript that allows functions to access variables from their outer scope even after the outer function has finished executing. It is commonly used for data privacy, creating function factories, and maintaining state in asynchronous programming.

// In the above example, the `eternal` function creates a closure that allows the inner functions `zomato` and `blinkit` to access the `guestName` and `count` variables even after the `eternal` function has finished executing. Each time we call `eternal`, it creates a new closure with its own copy of these variables, allowing us to maintain separate states for different guests.
