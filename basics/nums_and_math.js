//here in this case the varriable score automatically detects thatit is number 
const score = 400;
console.log(score);

//here we declared that our variable ballance is a number 
const ballance = new Number (100);
console.log(ballance);

//the difference in both is that in the output section where we can see that score output ngives output only 400 and in the case of ballance it also says that it is a number 


console.log(ballance.toString().length);  // here we have converted the number to string to use the function of sting like length, and etc
console.log(ballance.toFixed(2));  // (pression value) here we used to fixed to fix the decimal value to 2 decimal places this is mainly used in the ecommerse sites

// this is used to get the pression value of decimal numbers this also round off the numbers so be carefull while using it
const otherNumber = 23.979879;
console.log(otherNumber.toPrecision(3));

// toLocalStrings -----> this i used to add commas in the number 
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // by default is puts the commas according to the usa standardas to ue the indian standards use 'en-IN' in the functio ()






//**************************************. MATHS. **************** */

console.log(Math);
console.log(Math.abs(-4));  // this only canges the - to +

console.log(Math.round(4.3)) // this simplly round off the decimal value
console.log(Math.ceil(4.2))  // this round off the decimal value to top
console.log(Math.floor(4.2)) // thi roundd off the decimal value to base

console.log(Math.min(2,3,1,44,2,4)) // this finds the minimum value
console.log(Math.max(2,3,1,44,2,4))// this finds the maximum value


console.log(Math.random());  // always comes a random value between (0-1)
console.log((Math.random()*10) +1);  // here we multiplied it with 10 to get the values between (0-10) and added (1) to get the value between (1-10)
console.log(Math.floor(Math.random()*10) +1); // here we have added Math.floor to get a round of value without decomal


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)












