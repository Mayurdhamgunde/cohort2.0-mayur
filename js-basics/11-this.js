console.log(this);  // will print {} in node and window in browser


function ranveerOnGlobalStage(){       
    return typeof this;
}
console.log(ranveerOnGlobalStage());     // will print object in node and window in browser


function ranveerWithNoScript(){
    return this;    
}
console.log(ranveerWithNoScript());     // will print  global object in node

function ranveerWithStrict(){           
    'use strict';

    return this;
}
console.log(ranveerWithStrict());       // will print undefined


const bollywoodFilm = {
    name:"Bajirao mastani",
    lead:"Ranveer",

    introduce(){
        return `${this.lead} performs in ${this.name}`;
    },
};
console.log(bollywoodFilm.introduce());   // will print "Ranveer performs in Bajirao mastani" because this refers to the bollywoodFilm object and can access its properties.

const filmDirector = {
    name:"Sanjay Leela Bhansali",
    cast: ["Ranveer","Deepika","Priyanka"],

    announceCast(){
        this.cast.forEach((actor)=>{
            console.log(`${this.name} announces ${actor}`);   
        })
    }
}
filmDirector.announceCast();    



const filmset = {
    crew:"spot boy",

    prepareProps(){
        console.log(`outer this.crew: ${this.crew}`);       // will print "outer this.crew: spot boy
        
        function arrangechairs(){
            console.log(`inner this.crew: ${this.crew}`);     // will print "inner this.crew: undefined" because in a regular function, this is not inherited from the outer function. It will refer to the global object, which does not have a crew property.
        }

        arrangechairs();

        const arrangeLights = () => {
            console.log(`inner this.crew: ${this.crew}`);     // will print "inner this.crew: spot boy" because in an arrow function, this is inherited from the outer function. It will refer to the filmset object, which has a crew property.
        }
        arrangeLights();            
    },
};

filmset.prepareProps();     


// Detached Methods             

const actor = {
    name:"Ranveer",
    bow(){
        return `${this.name} take a bow`;
    }
}

const detachedBow = actor.bow;

console.log(detachedBow());         // will print "undefined take a bow" 
