const name = "Karan"
const repoCount = 50

// console.log(name+repoCount+" value"); this is the noraml way to print String and string concetination

// in devlopment line this one is best way we also called String interpullation (` ${} ${} `)
/*console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way of string is...........*/
const gameName  = new String('karan Pandey')

/*console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));*/

const newString = gameName.substring(0,4);
console.log(newString); //subString ignore negative value

const anotherString = gameName.slice(-2,4);
console.log(anotherString); //while slice are also work on negative index

const newOneString =  "   hitesh  ";
console.log(newOneString);

console.log(newOneString.trim());

const url = "https://karanPandey.com//Pandy%40%alwaysbrave";

console.log(url.replace('%40%','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));










