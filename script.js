//Array Methods; An array can hold many values under a single name, and you can access the value by referring to an index number 

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
const spliced = fruits.splice(1,2, "Banana", "  Agbalumo")
console.log(fruits)

//CONCATENATION- creates a new array by merging  
const myBoys = ["Linus", "Mubarak", "Emmanuel"];
const myGirls =["Ceicei","Shade"];
const myPets = ["Cats", "Dogs"];

const concat = myBoys.concat(myGirls)
console.log(concat.concat(myPets))


//SLICE
const sliced =fruits.slice(1)
console.log(fruits)
console.log(sliced)


//INCLUDES
const checkIncludes = myBoys.includes("Linus")
console.log(checkIncludes)

//Classwork 1
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



//Classwork 2; use the indexOf,lastIndexOf and sort function on an array of numbes

const numbers = [33,2,44,55,2,1,66,77,1,88];

//indexOf
const index1 = numbers.indexOf(2)
console.log(index1)

//lastIndexOf
const Lastindex1 = numbers.lastIndexOf(1)
console.log(Lastindex1)

//SORT
console.log(numbers.sort())
