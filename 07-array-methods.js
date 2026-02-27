const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
]

// NOTE : - SEE INSIDE THE FUNCTIONS IF WE USE ARROW FUNCTION LIKE THIS : - 
// 1) ()=>()    then it will return automatically need not to return manually by user
// 2) ()=>{}    then user itself has to return manually

// NOTE: - forEach() expects a synchronous function async function will not work with forEach because it does not wait for the promise to resolve and it will not return anything so we can not use async function with forEach

orders.forEach((order, index) => {
    console.log(`# ${index + 1} : ${order.qty}x ${order.dish}`);
})

const myData = orders.forEach((order, index) => {
    console.log(`# ${index + 1} : ${order.qty}x ${order.dish}`);
})
console.log(myData);        // see this will print undefined because forEach does not return anything


// MAP
const receiptLines = orders.map((o) => `${o.dish}: ${o.price * o.qty}`);
console.log(receiptLines);  // will return new array.

//FILTER
const spicyOrders = orders.filter(o => !o.spicy)
console.log(spicyOrders);       // print orders which are not spicy and it will also return new array does not change exisiting one


//REDUCE                       // This as accumulator,currentvalue and initial value

// ex : 1
const totalRevenue = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price)
}, 0)
console.log("Total sum = " + totalRevenue);

// ex : 2
const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
}, { spicy: [], mild: [] })

console.log(grouped);

// some gaustias
const ticketNumbers = [100, 25, 3, 42, 8];

// const sortedW = [...ticketNumbers].sort(); 
// THIS will not sort the array it will pring the same because sorting will be done on string not on numbers 

/*
🤔 Why?

👉 Because JavaScript .sort() converts numbers into strings by default 
*/

const sortedW = [...ticketNumbers].sort((a, b) => a - b);
console.log(sortedW);




const kitchenOrders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
    { dish: "Ghost Pepper Curry", price: 20, spicy: true, qty: 1 }
]

const mildReport = kitchenOrders
        .filter((o)=>!o.spicy)
        .map((o)=>({
            dish:o.dish,
            total:o.price * o.qty
        }))
        .toSorted((a,b)=>a-b);        // Instead of toSorted() we can use sort((a,b)=> a-b)

console.log(mildReport);


// NOTE : - 
// 1) toSorted() (NEW METHOD - ES2023) :- 👉 Returns a new array (non-mutating)
// 2) sort() (OLD METHOD) 👉 Modifies the original array (mutates)

/*

🔥 Real-world analogy
sort()

👉 Like rearranging books on your table
→ original order changes

toSorted()

👉 Like making a copy of books and arranging
→ original stays same

*/