const name = "sheshav"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('sheshav-hc-at')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // this doesnot changes the orignal string
console.log(gameName);

console.log(gameName.charAt(5));  // to check whish charater is in the specific mpossition
console.log(gameName.indexOf('s')); // to check the position of a specific character

// way to create a substring. (here mwe cannot use the negetive values unlike slicing)
const newString = gameName.substring(0,4)
console.log(newString);

// slicing here we can also use the negetive values for slicing
const anotherString = gameName.slice(-8 , 4) // herr we are using negetive values the string count starts from the right last
console.log(anotherString);


// trim -----> this removes the extra spaces from the string this can be used in the login form where users can accidentlly or by mistake add unnessarty extra blank space
const newString1 = "    sheshav   "
console.log(newString1);
console.log(newString1.trim());

//replace -----> this is used to replace a part of sting to some another string value
const url = "https://github.com/sheshav123%20java-script" 
console.log(url.replace('%20','-'));
console.log(url.includes('sheshav'))


//split  ------> this is used to split the string into array based on some thing
console.log(gameName.split('-'));  // in this case we have seperated the staing gameName "sheshav-hc-at" based on "-"











