/*
KEY POINTS TO NOTE : --
function TataCar(chassisNumber, modelName){
    { }
    // this 
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
} 

    NEW keywoard ki 4 Baate 

step 1 : - jaise ki aapne new keyword lagaya then ek empty object diya jata hai

step 2 : - iss empty object ke prototype ko TataCar ke prototype ko link kiya jata hai.

step 3 : - this keyword activate ho jata hai jo bhi isko call kr rha hai usko bind karta hai 
(jaise ki see for car1 as we pass values jo bhi values provide kr rha hai vo this ko jaate hai then car1 ko aapna this milgaya or car2 ko bhi apna this milgaya this matlab un variables ka reference)

step 4 : - explicit return karta hai object ko (Final kaam hota hai new ka ki agar constructor agar koi object return nahi karta toh voh kaam new karta hai )


*/

function TataCar(chassisNumber, modelName){
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
} // 

TataCar.prototype.status = function (){ // we are adding a method to the prototype of the TataCar constructor function, so that all the objects created using this constructor function can access this method.
    return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`; // 
};

const car1 = new TataCar("MH-101","Nexon");         // when we create an object using new keyword, it creates a new object and sets the this value to that object, so we can access the properties and methods of that object using this keyword.
const car2 = new TataCar("DL-202","Harrier");  

console.log(car1.modelName);     
console.log(car2.modelName);     
console.log(car1.status());     
console.log(car2.status());     


// this is not same as above 
// 
// 
function createAutoRickshaw(id, route){     // this is a factory function, which is a function that returns an object. In this case, we are returning an object with properties id and route, and a method run that returns a string with the id and route of the auto rickshaw.
    return{
        id,
        route,
        run(){
            return `Auto ${this.id} running on ${this.route}`; 
        },
    };
}

const auto1 = createAutoRickshaw("UP-1","Lucknow-kanpu");   // here we are creating an object using a factory function, which is a function that returns an object. In this case, we are returning an object with properties id and route, and a method run that returns a string with the id and route of the auto rickshaw.
const auto2 = createAutoRickshaw("UP-2","Agra-Mathura");    

console.log(auto1.run());   
console.log(auto2.run());

/*

see the difference between constructor function and factory function : -

Constructor function : - - it is a function that is used to create objects using the new keyword. It uses the this keyword to set the properties of the object and it can also have methods defined on its prototype.

Factory function : - it is a function that returns an object. It does not use the new keyword and it does not use the this keyword. It can also have methods defined on the object that it returns. 

*/