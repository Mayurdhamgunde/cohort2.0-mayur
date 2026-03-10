// Here, we are defining a class called Cricketer. A class is a blueprint for creating objects with specific properties and methods. In this case, the Cricketer class will have properties like name, role, matchesPlayed, and stamina, as well as a method called introduce() that returns a string introducing the cricketer.
class Cricketer {       
// The constructor method is a special method that is called when a new instance of the class is created. It is used to initialize the properties of the object. In this case, we are initializing the name and role properties with the values passed as arguments when creating a new Cricketer object. We are also setting matchesPlayed to 0 and stamina to 100 by default for every new cricketer.
    constructor(name,role){ 
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100
    }

    introduce(){ 
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} stamina: ${this.stamina}`
    }
}

// Here, we are creating two instances of the Cricketer class: player1 and player2. We pass the name and role as arguments to the constructor when creating these instances. This allows us to create unique cricketer objects with their own properties and methods based on the Cricketer class blueprint.
const player1 = new Cricketer("Virat","Batsman") 
const player2 = new Cricketer("Bumrah","Bowler")

// We can now call the introduce() method on both player1 and player2 to get their introductions. This demonstrates how we can use classes to create multiple objects with shared properties and methods, while still allowing each object to have its own unique values for those properties.
console.log(player1.introduce());
console.log(player2.introduce());
console.log(player1.hasOwnProperty("name"));
console.log(player1.hasOwnProperty("stamina"));
console.log(typeof Cricketer);

class Debutant{
    constructor(name){
        this.name = name;
        this.walkout = () => `${this.name} walks out to bat for the first time`
    }
}

const debutant1 = new Debutant("Shubham")        
const debutant2 = new Debutant("Yashasvi")    
console.log(debutant1.walkout === debutant2.walkout); // This will output false, indicating that the walkout method is not shared between the two instances of the Debutant class. Since walkout is defined as an arrow function within the constructor, it creates a new function for each instance of the class. Therefore, even though both debutant1 and debutant2 have a walkout method, they are different functions in memory, resulting in the comparison returning false. This demonstrates how defining methods as arrow functions within a class can lead to each instance having its own unique method, rather than sharing a single method across all instances of the class.

const somethingFromLastClass = debutant1.walkout; 

console.log(somethingFromLastClass()); // This will output "Shubham walks out to bat for the first time". Here, we are calling the walkout method that was defined in the Debutant class. Since walkout is an arrow function, it retains the context of the this keyword from the constructor, which refers to the instance of the Debutant class (debutant1). Therefore, when we call somethingFromLastClass(), it correctly accesses the name property of debutant1 and returns the expected string. This demonstrates how arrow functions can be used to maintain the correct context of this in JavaScript classes.



