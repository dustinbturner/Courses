// Values stored on the stack (primitive)
const name = 'John';
const age = 30;

// References values stored on the heap
const person = {
	name: 'Brad',
	age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);

let amount = 1;

amount = +amount;
// amount = parseInt(amount);

// Change number to string
amount = amount.toString();

//Convert number to boolean
amount = Boolean(amount);

console.log(Math.sqrt(-1)); // NaN
console.log(1 + NaN); // NaN
console.log(undefined + undefined); // NaN
console.log('foo' / 3); // NaN

console.log(amount, typeof amount);
