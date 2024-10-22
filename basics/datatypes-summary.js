// primitive 

// 7 types  : String, Number, Boolean, Null, Unbdefined, Int, BigInt

const score = 200 
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 678676767676767676n //here n represents the bigint


// referance (Nont primetive)
// Array, Objects, Functions


const heros = ["shaktiman", "nagraj", "doga"]; // arary

//object
let myObject = {

    name : "sheshav",
    age : 24,
}

//functions

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber);






//***************************************** */
// meamory types 

// stack (primetive)
// heap (non - primetive)

let myYoutubeName = "sheshavananddotcom"

let anotherName = "killerronakdotcom"

console.log(myYoutubeName);
console.log(anotherName);


let userOne ={
    email : "user@gamil.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "sheshav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





