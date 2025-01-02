//Primitive
// ==> 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isloggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3443567876544332278903456n
console.log(bigNumber);
console.log(typeof bigNumber);





//Reference (Non Primitive)

//  ===> Array, Object, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}
console.log(typeof heros);

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof myFunction);
