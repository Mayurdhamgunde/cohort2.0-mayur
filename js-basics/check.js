// When vairable is copied then its value is copied (pass by value)

// var firstName = "Mayur";

// var copyfirstName = "SAM";

// copyfirstName = "Dham"   

// console.log(firstName);
// console.log(copyfirstName);

// when object is copied its reference is copied (pass by reference)
var myName = {
    firstName:"Mayur",
    lastName:"Dhamgunde"
};

var copyName = myName;

copyName.firstName = "SAM"

// console.log(myName);
// console.log(copyName);

/// to solve above we can use spread operator (...)

var purnaNaav = {
    pahilaNaav:"Rohit",
    shevatNaav:"Rathod"
}

var copyNaav = {...purnaNaav}

// console.log(purnaNaav);

copyNaav.shevatNaav = "Kalpavruksha"

// console.log(copyNaav);
// console.log(purnaNaav);

// but if their is nested object then it partially works not works fully see with example

var actorNames = {
    Name:"varun",
    film:"Border",
    details:{
        email:"varun@gmail.com",
        phoneNo:9284675626
    }
}

console.log(actorNames);

var copyActors = {...actorNames}

// console.log(copyActors);

copyActors.Name = "Hrithik"
console.log(copyActors);
console.log(actorNames);

copyActors.details.email = "hrithik@gmail.com";
console.log(copyActors);
console.log(actorNames);


// if we do this then varun actors email also get changed from varun@gmail.com to hrithik@gmail.com 
// SO to overcome this nested objects issue we use structredClone() function in this that nested objects issue will also get solved which was coming through ... spread operator


var actorNames = {
    Name:"varun",
    film:"Border",
    details:{
        email:"varun@gmail.com",
        phoneNo:9284675626
    }
}

var copyActors = structuredClone(actorNames);

// so it is called deep copy 







