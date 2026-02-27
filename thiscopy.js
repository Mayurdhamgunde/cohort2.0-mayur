console.log(this); 


function ranveerOnGlobalStage(){       
    return typeof this;
}
console.log(ranveerOnGlobalStage());     


function ranveerWithNoScript(){
    return this;    
}
console.log(ranveerWithNoScript());     

function ranveerWithStrict(){           
    'use strict';

    return this;
}
console.log(ranveerWithStrict());       


const bollywoodFilm = {
    name:"Bajirao mastani",
    lead:"Ranveer",

    introduce(){
        return `${this.lead} performs in ${this.name}`;
    },
};
console.log(bollywoodFilm.introduce());   

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
        console.log(`outer this.crew: ${this.crew}`);  
        
        function arrangechairs(){
            console.log(`inner this.crew: ${this.crew}`);     
        }

        arrangechairs();

        const arrangeLights = () => {
            console.log(`inner this.crew: ${this.crew}`);     
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
