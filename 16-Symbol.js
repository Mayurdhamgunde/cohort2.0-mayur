/*  NOTE : - 

Symbols are unique and immutable data types in JavaScript that can be used as identifiers for object properties, ensuring that they do not conflict with other properties or keys in the object.

*/

const aadhaar_of_mayur = Symbol("aadhaar"); // Here, we are creating a new symbol called aadhaar_of_mayur using the Symbol() function. The string "aadhaar" is passed as an argument to provide a description for the symbol, which can be useful for debugging purposes. In this case, aadhaar_of_mayur can be used as a unique identifier for a property in an object without worrying about name collisions with other properties.
const aadhaar_of_piyush = Symbol("aadhaar");

console.log(typeof aadhaar_of_mayur);   // This will output "symbol", indicating that the type of aadhaar_of_mayur is indeed a symbol. Symbols are a primitive data type in JavaScript, and they are used to create unique identifiers for object properties.

console.log(aadhaar_of_mayur === aadhaar_of_piyush); // This will output false, demonstrating that even though both aadhaar_of_mayur and aadhaar_of_piyush have the same description ("aadhaar"), they are unique symbols and therefore not equal to each other. This highlights the uniqueness property of symbols in JavaScript, making them ideal for use as keys in objects where you want to avoid name collisions.

console.log(aadhaar_of_mayur.toString());   // This will output "Symbol(aadhaar)", which is the string representation of the aadhaar_of_mayur symbol. The toString() method is used to convert the symbol into a string format, which includes the description provided when the symbol was created. This can be helpful for debugging or logging purposes, allowing you to see the description of the symbol along with its unique identifier.

console.log(aadhaar_of_mayur.description);  // This will output "aadhaar", which is the description of the aadhaar_of_mayur symbol. The description property of a symbol allows you to access the string that was passed as an argument when the symbol was created. This can be useful for identifying the purpose or meaning of the symbol, especially when debugging or logging information about the symbol in your code.

const nonIndian = Symbol()      // Here, we are creating a new symbol called nonIndian without providing a description. This means that the symbol will still be unique, but it will not have a descriptive string associated with it. When we try to access the description property of the nonIndian symbol, it will return undefined since no description was provided during its creation. This demonstrates that symbols can be created without descriptions, but they will still maintain their uniqueness as identifiers in JavaScript.
console.log(nonIndian.description); 


const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRecord = {
    name:"Ved Pandey",
    age: 30,
    [biometricHash]:"abc123xyz", // Here, we are using the biometricHash symbol as a key in the citizenRecord object. By using square brackets around the symbol, we can define a property with a symbol key. This allows us to store the biometric hash value in the object without worrying about name collisions with other properties.
    [bloodGroup]:"A+", // Similarly, we are using the bloodGroup symbol as another key in the citizenRecord object to store the blood group information. This demonstrates how symbols can be used to create unique property keys in objects, ensuring that they do not conflict with other properties or keys in the object.
}

console.log(Object.keys(citizenRecord));    // This will output ["name", "age"], which are the enumerable properties of the citizenRecord object. The Object.keys() method returns an array of the object's own enumerable property names, but it does not include properties that are keyed by symbols. This is because symbol-keyed properties are not enumerable by default, which helps to prevent accidental access or modification of these properties when iterating over the object's keys.

console.log(Object.getOwnPropertySymbols(citizenRecord)); // This will output an array containing the symbols used as keys in the citizenRecord object, which are [Symbol(biometricHash), Symbol(bloodGroup)]. The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object. This allows us to access the symbol-keyed properties of the citizenRecord object, which are not included in the output of Object.keys() since they are not enumerable.


const rtiQueryBook = {  // 
    queries: ["Infra budget","Ration Card","Education budget","Startup laws"],
    [Symbol.iterator](){
        let index = 0;
        const queries = this.queries;
        return{
            next(){
                if(index<queries.length){
                    return {value:queries[index++],done:false};
                }
                return {value:undefined,done:true};  
            },
        };
    },
};

for(const query of rtiQueryBook){   // Here, we are using a for...of loop to iterate over the rtiQueryBook object. The for...of loop works with iterable objects, and since we have defined a custom iterator using the Symbol.iterator method, we can use this loop to access each query in the queries array. The loop will call the next() method of the iterator to retrieve each query until it reaches the end of the array, at which point it will stop iterating. This demonstrates how we can make an object iterable by implementing the Symbol.iterator method, allowing us to use convenient syntax like for...of to access its elements.
    console.log(`Filing RTI: ${query}`); 
}


/* SYMBOL SYNTAX

[](){}

- square bracket mai aata hai symbol
- hint nam ki value in () 
- {} ke andar method define karte hai

*/