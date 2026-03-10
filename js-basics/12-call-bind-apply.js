// call and apply => basic chef (kitchen)
// bind => return a new function

// NOTE : call and apply are used to invoke a function immediately, while bind is used to create a new function with a specific this value and optional arguments, which can be invoked later.

//________________________________________________________________________________________________________________________________________________________________________________________________________

function cookDish(ingredient,style){
    console.log(`${this.name} prepares ${ingredient} in ${style}!`);    // for now it doesn't work because this is not defined, so for that we need to pass reference of this using call, apply or bind.
}

// console.log(cookDish());   


const sharmaKitchen = {name:"Sharma jis kitchen"}  // we have created an object who will have this value and we will pass this object as reference to the function using call or apply.
const guptaKitchen = {name:"Gupta jis Kitchen"}

// console.log(cookDish.call(sharmaKitchen,"Paneer and spices","Muglai"));

// apply is used when we have an array of arguments to pass to the function, while call is used when we have a list of arguments to pass to the function.

const guptaOrder = ["Chole kulche","Punjabi Dhaba"]

// console.log(cookDish.apply(guptaKitchen,guptaOrder));     

//________________________________________________________________________________________________________________________________________________________________________________________________________

const bills = [100,30,45,50]

Math.max.apply(null,bills); 
Math.max(...bills)      // both are same 

//________________________________________________________________________________________________________________________________________________________________________________________________________

function reportDelivery(location,status){
    return `${this.name} at ${location}: ${status}`; 
}
// console.log(reportDelivery());   // this will not work because this is not defined, so we need to pass reference of this using call, apply or bind.


const deliveryBoy = {name:"Ranveer"}; 

console.log("Call: ",reportDelivery.call(deliveryBoy,"Lyari","Ordered"));       
console.log("Apply",reportDelivery.apply(deliveryBoy,["Mars","Pick up"])); 
// console.log("Bind",reportDelivery.bind(deliveryBoy,"Haridwar","WHAT"));

const bindReport = reportDelivery.bind(deliveryBoy,"Haridwar","WHAT"); 
console.log(bindReport());  

/* Another way we can pass values is see this : - it will also work same 

const bindReport = reportDelivery.bind(deliveryBoy,"Haridwar"); 
console.log(bindReport("WHAT")); 

*/
