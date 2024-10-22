// array......

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
constmyArr2 = new Array( 1, 2, 3, 4, 5)

// console.log(myArr[1]);


//array meathods

// myArr.push(6) // this addas a new value to the last of the array
// myArr.push(7). // same as above
// myArr.pop(). // this deletes the last element of an array

// myArr.unshift(9) // this inserts an elment at the begening of an array and shifts all the element one step
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()


// console.log(myArr);

// console.log(newArr); // this binds the array and a;lso convetrted the new array to string
// console.log(typeof newArr);



//***************     slice   ,    splice      *****************

console.log("A ", myArr);

//******slice 
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

//*****splice
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);

// the main difference between slice and splic is that in slice the range is not printed whereas in splice is also printed
//the second main difference is that slicing does not effect the main array wherea











