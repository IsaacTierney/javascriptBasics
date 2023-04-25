// JavaScript Variable Declaration
var myFirstVariable; // camelCasing

// Initialization
var patientID; // declaring the variable
patientID = 12345678; // initializing the variable
console.log(patientID);

var lastName; // declare
lastName = "Tucker"; // initialize
console.log("Lastname:", lastName);
// lastName: 0x0000001 ["Tucker"]

var banana = lastName;
console.log("Banana:", banana);
// banana: 0x0000001 ["Tucker"]

// re-initialize (reassigning)
lastName = "Tierney";
console.log("LastName:", lastName);
// lastName: 0x0000000 ["Tierney"]

console.log(banana)

// lastName: 0x0000001 ["Tierney"]
// banana: 0x0000001 ["Tucker"]



// Var and Hoisting
programmer = "Ada Lovelace";
var programmer;
console.log("Programmer:", programmer);

// Let and Hoisting
let jsVersion;
jsVersion = "es6";
console.log("Let:", jsVersion);
// Let has to be declared before it can be initialized

// Const and Re-initialization
const humansBestFriend = "cat";
// mansBestFriend = "dog";
// Cannot reinitialize a const variable as it's constant