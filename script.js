//Array Methods

const fruits = ["Banana", "Apple", "Orange", "Cherry", "Strawberry", "Almonds"];

//LENGTH
console.log(fruits.length)

//STRING
const string = fruits.toString();
console.log(string);

//REPLACE
const replace1 = (fruits[2]="pineapple")
console.log(replace1);
console.log(fruits)

// POP - remove the last item in an array
const popped = fruits.pop()
console.log(fruits) 

//PUSH - adds a new element to an array(at the end)
const pushed = fruits.push("Mango");
console.log(fruits)

//SHIFT - equivalent to pop, but it works on the first item. Removes the first array element and "shift" all other elements to a lower index 
const shifted = fruits.shift();
console.log(fruits);

//UNSHIFT - adds a new element to an array (at the beginning), and "unshifts" older elements.
const unshifted =  fruits.unshift("Lemon");
console.log(fruits)

//SPLICE

//CONCATENATION- creates a new array by merging  
const myBoys = ["Linus", "Mubarak", "Emmanuel"];
const myGirls =["Ceicei","Shade"];
const myPets = ["Cats", "Dogs"];

const concat = myBoys.concat(myGirls)
console.log(concat.concat(myPets))


//Classwork
const statement = ["BMW", "Mercedes", "Toyota", "Lexus"]

//length
console.log(statement.length)

//shift
const shifted1 = statement.shift()
console.log(statement)

//POP
const popped1 = statement.pop()
console.log(statement)

// UNSHIFT
const unshifts = statement.unshift("Ferarri")
console.log(statement)

// REPLACE
const replacement = (statement[2]="Camaro")
console.log(statement)

//PUSH
const pushed1 = statement.push("fox");
console.log(statement)



