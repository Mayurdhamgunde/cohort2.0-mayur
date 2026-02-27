console.log(brewPotion("healing herbs",3))

function brewPotion(ingredients, dose){
    return `Brewing potion with ${ingredients} (x${dose})... Potion ready`
}

const mixElixir = function(ingredient){
    return `Mixing elexir with ${ingredient}`
}

// ARROW function ()=>
// no own 'this', no 'arguments' objects
const distilEssence = (ingredient) => {
    return `Mixing elexir with ${ingredient}`;
}

function oldBrewingLogs(){
    console.log("Type:",typeof arguments);
    console.log(arguments);
    console.log(Array.isArray(arguments));
    const argsArray = Array.from(arguments)
    console.log(argsArray);
    console.log(Array.isArray(argsArray));
    
}

oldBrewingLogs("Sage","Rosemary")

const arrowBrew = () => {
    try {
        console.log(arguments);
    } catch (e) {
      console.log(e);
      console.log(e.message); 
    }
}

arrowBrew();
console.log("Program continue");

// If you run the same code in browser, like:
// ReferenceError: arguments is not defined


let globalcount = 0;

function brewAndCount(name){
    globalcount++;
}
// if you can access the globalcount variable inside function then its impure function, because it has side effect of changing the global variable. 
// Pure functions will only have access to their own parameters and local variables, and will not modify any external state.


// HOF : - Higher Order functions
// A function that returns a function or takes other functions as arguments is called a higher-order function.
function anotherFunctionForClass(brewAndCount){

    return function newBrew(){
        //do something
    }
}


// IIFE - Immediately Invoked Function Expression

/*

()() 
(function (){ })()
(() => {})()

*/

const potionShop = (function (){
    let inventory = 0;

    return{
        brew(){
            inventory++;
            return `Brew potion #${inventory}`;
        },
        getStock(){
            return inventory;
        },
    };
})();

console.log(potionShop);
console.log(potionShop.brew())
console.log(potionShop.inventory);  // In IIFE the inventory variable is private and cannot be accessed directly from outside the function.


// CLOSURES example
function makeFunc() {         
  const name = "Mozilla";  // This is a closure, because the inner function displayName has access to the outer function's variable name, even after the outer function has finished executing.
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();   
