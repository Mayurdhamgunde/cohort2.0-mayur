const artifact = {
    name:"Obsidian Crown",
    era:"Ancient",
    value:50000,
    material:"volcanic glass"
}

const keys = Object.keys(artifact);
console.log(keys);     // this will return array of keys present in artifact object

const values = Object.values(artifact);
console.log(values);   // this will return array of values present in artifact object

const entries = Object.entries(artifact);
console.log(entries);  // this will return array of key value pairs present in artifact object


for(const [key,value] of Object.entries(artifact)){
    console.log(`${key}: ${value}`);
}

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList); // this will convert array of key value pairs into object
console.log(priceObject);

const displayCase = {
    artifact: "Obsidian Crown",
    location:"Hall of Relics",
    locked:true
}

Object.freeze(displayCase);   // this will make the object immutable means we cannot change any value of that object

delete displayCase.location;   // this will not delete the location key because the object is frozen

displayCase.newProp = "New Value";   // this will not add new property to the object because the object is frozen

console.log(displayCase); 

const catalogEntry = {
    id:"ART-002",
    description: "Ancient Crows",
    verified:true
}

Object.seal(catalogEntry);   // this will prevent adding new properties but we can change the existing properties


// NOTE :- Diff btw Freez and Seal is that in freeze we cannot change existing properties but in seal we can change existing properties but cannot add new properties

const secureArtifacts = {
    name:"Ruby Pendant"
}

Object.defineProperty(secureArtifacts,"catalogId",{
    value:"SEC-999",
    writable:false,     // this will make the catalogId property read only means we cannot change its value
    enumerable: true,   // this will make the catalogId property show up in loops as for...in or Object.keys() etc
    configurable:false  // this will prevent the property from being deleted or reconfigured
})

console.log(secureArtifacts.catalogId);   // this will print the value of catalogId

for(const [key,value] of Object.entries(secureArtifacts)){
    console.log(`${key}: ${value}`);
}

const desc = Object.getOwnPropertyDescriptor(secureArtifacts,"catalogId");
console.log(desc);   // this will print the descriptor of catalogId property which we defined above

const desc1 = Object.getOwnPropertyDescriptor(secureArtifacts,"name");
console.log(desc1);  // this will print the descriptor of name property which is default descriptor as we did not define it explicitly