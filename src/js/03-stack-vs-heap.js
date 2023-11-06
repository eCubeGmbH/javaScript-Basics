//Values are stored on the Stack
const name = 'John';
const age = 30;

//References Values are stored on the Heap
const person = {
    name: 'Brad',
    age: 40
};
let newName = name;
newName ='STEVE';

let newPerson = person;
newPerson.name = 'Adel'
console.log(name, newName);
console.log(person, newPerson);
