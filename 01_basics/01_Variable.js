const accountId = 121212;
let accountEmail = "karanpalak082002@gmail.com";
var accountPassword = "12345"; // var not use now day
accountCity = "jaipur"; // its also consider as var without using any keyword we assign value (its also avilable in javaScript)
/*
Prefer to not use VAR 
because of issue in block scope and functional scope
*/

//accountId = 2;  const never allow to re-assigne value again 

accountEmail = "palakPadodi@gmail.com";
accountPassword = "00000";
accountCity = "BENGLURU";
let accountState;



console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
