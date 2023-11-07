const myString = 'ecube';

//Solution 1
const myNewString = 'Ecube';
console.log(myNewString);
//Solution 2
let myNewString2;
myNewString2 = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString2)
//Solution 3
myNewString2 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString2);

