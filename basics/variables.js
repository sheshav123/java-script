const accountId =3434.  // const is used where we dont want to change the value of our variable in future
let accountEmail = "sheshavanand@gmail.com"
var accountPassword = "12345"
accountCity = "hazaribagh"



//accountId =2. // this is not allowded we cannot change the variable declared in const keyword

console.log(accountId);

accountEmail = "killerronal007@gmail.com"
accountPassword = "123123123"
accountCity = " bangluru"
let accountState;


/*
prefere not to use var
because of the issue in block scope and functional scope
*/



console.table([accountEmail,accountPassword,accountCity,accountState])

