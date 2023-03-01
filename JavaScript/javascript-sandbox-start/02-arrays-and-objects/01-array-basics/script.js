// //Array literal
// const numbers = [12, 45, 33, 29, 39];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';

// console.log(fruits);

// x = fruits;

// console.log(x);

let x;
const arr = [34, 55, 95, 20, 15];

// Push adds to the end
arr.push(100);

// Pop removes from the end
arr.pop();

//Unshift adds to the beginning
arr.unshift(99);

// Shift removes from beginning
arr.shift();

// Reverse
arr.reverse();

// Includes - checks if value is in the array
x = arr.includes(20);

// Index of
x = arr.indexOf(15);

// Slice - takes value of place 1 and everthing after
// Not actually changing the array
x = arr.slice(1);

// Splice
// Splice does change the array and takes it out
x = arr.splice(1, 4);

console.log(x);
