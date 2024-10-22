//dates

let myDate = new Date()
console.log(myDate);  // this will prnt the date and time in unreadable format


console.log(myDate.toString()); // this will print the date in proper string format
console.log(myDate.toDateString()); //this only prints date
console.log(myDate.toLocaleString()); // this prints date and time as well with some different format
//console.log(myDate.toString()); 
console.log(typeof myDate); // date is an object




//let myCreatedDate = new Date(2023 , 0 , 23)
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3 )
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log (myTimeStamp)
// console.log (myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 ); // +1 is added because month starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and then the time`


newDate.toLocaleString('default',{
    weekday: "long",
    
})


















