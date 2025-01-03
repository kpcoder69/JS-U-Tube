// STACK (==>Primitive)


let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "ChaiAurcode"

console.log(myYoutubename);
console.log(anothername);




//HEAP (==>Non - Primitive)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
console.log(userOne);


let userTwo = userOne
console.log(userTwo);


userTwo.email = "Karanpandey5424@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);




