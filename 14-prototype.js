// Prototype is a powerful feature in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in JavaScript's object-oriented programming paradigm.

const prithviraj = { 
    name:"Prithviraj",
    generation:"grandfather",       
    cookTraditionalDish(){
        return `${this.name} cooks an ancient family recipe`; // This method is defined in the prithviraj object and can be inherited by other objects created from it.
    },

};                  
// The prithviraj object serves as a prototype for other objects, allowing them to inherit its properties and methods. This promotes code reusability and helps in creating a hierarchical structure of objects.

const raj = Object.create(prithviraj); // The Object.create() method creates a new object (raj) that inherits from the prithviraj object. This means that raj has access to all the properties and methods defined in prithviraj, including the cookTraditionalDish() method.
raj.name = "raj";   // We can add new properties or override existing ones in the raj object without affecting the prithviraj object. In this case, we set the name property of raj to "raj" and add a new property generation with the value "father". This allows us to customize the raj object while still retaining access to the inherited properties and methods from prithviraj.
raj.generation = "father", 
raj.runBusiness = function(){
    return `${this.name} runs the family business`;       
};
console.log(raj);

const ranbir = Object.create(raj); // Similarly, we create another object ranbir that inherits from raj. This means that ranbir has access to all the properties and methods defined in both raj and prithviraj. We can further customize ranbir by adding new properties or overriding existing ones without affecting the parent objects.
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function (){
    return `${this.name} direct blockbusture movie`; 
};

console.log(ranbir);
console.log(ranbir.makeFilm());     
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());          // This demonstrates how the ranbir object can access methods from both its parent (raj) and grandparent (prithviraj) objects, showcasing the power of prototypal inheritance in JavaScript.






