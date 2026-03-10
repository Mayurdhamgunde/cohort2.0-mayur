const hero = {
    name:"Luna the Brave",
    class:"Mage",
    level:12,
    health:85,
    mana:120,
    isAlive:true
}

// console.log(hero);


const a = hero["name"]
// console.log(a);

hero.weapon = "Fire"    // adding new key
// console.log(hero);

delete hero.level;      // deleting the level key present in hero object

const ranger = {
    name:"Lakshya the swift",
    agility:80,
    stealth:undefined
};

console.log("name" in  ranger);
console.log("stealth" in  ranger);
console.log("toString" in  ranger);     // This will also return true as toString is present in prototype of all objects but it is not present in ranger object itself
// we can see this in browser console 

// To check whether that toString is present inside the ranger or not we can use hasOwnProperty

console.log(ranger.hasOwnProperty("toString")); // It will return false because that toString is not present in ranger

