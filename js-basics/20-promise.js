// console.log("SWASTIK");

Promise.resolve("Resolved value").then((v)=>{
    // console.log("Microtask",v);
});

// console.log("Avishek");

// Output: 
// SWASTIK
// Avishek
// Microtask Resolved value
// Explanation:
// 1. The first console.log("SWASTIK") is executed immediately, printing "SWASTIK" to the console.
// 2. The Promise.resolve("Resolved value") creates a resolved promise with the value "Resolved value". The .then() method is called on this promise, which schedules the callback function to be executed as a microtask after the current synchronous code has finished executing.
// 3. The second console.log("Avishek") is executed immediately after scheduling the microtask, printing "Avishek" to the console.
// 4. After all synchronous code has been executed, the JavaScript engine processes the microtasks. The callback function passed to .then() is executed, printing "Microtask Resolved value" to the console.

// In hindi explaination :
// 1. Pehla console.log("SWASTIK") turant execute hota hai, aur "SWASTIK" console par print hota hai.
// 2. Promise.resolve("Resolved value") ek resolved promise banata hai jisme value "Resolved value" hoti hai. .then() method is promise par call kiya jata hai, jo callback function ko microtask ke roop mein schedule karta hai, jo current synchronous code ke baad execute hoga.
// 3. Dusra console.log("Avishek") turant execute hota hai microtask schedule karne ke baad, aur "Avishek" console par print hota hai.
// 4. Jab saara synchronous code execute ho jata hai, JavaScript engine microtasks ko process karta hai. .then() ke callback function ko execute kiya jata hai, aur "Microtask Resolved value" console par print hota hai.

function boilwater(ms){
    return new Promise((res,rej)=>{
        console.log("Krte h ji boil water");
        
        if(typeof ms !== "number" || ms < 0){
            rej(new Error("ms must be a number and greater than Zero"))
        }

        setTimeout(()=>{
            res("Ubal gya");
        },ms);
    });
}

boilwater(200)
    .then((msg) => console.log("Resolved : ",msg))
    .catch((err)=>console.log("Rejected",err.message))

    // eg : -
    function grindLeaves(){
        return Promise.resolve("Leaves grounded");
    }

    // eg : - 
    function steepTea(time){
        return new Promise((res)=>{
            setTimeout(()=> res("Steeped tea"),time);
        });
    }



    function addSugar(spoons){
        return `Added ${spoons} sugar`;
    }

