let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//  String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by number key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0); // Same result of access value by number key

x = s.indexOf('e'); // 1

x = s.substring(0, 4); // Hell - takes characters from place 0-4
x = s.substring(7); // Starts at 7 and gets rest of string 'orld'

x = s.slice(0, 5); // 'Hello'

x = s.slice(-11, -6); // Goes in reverse and returns 'Hello'

x = '     Hello world';

x = x.trim(); // Trims white space

x = s.replace('World', 'John'); // replaces world and 'Hello John'

x = s.includes('Hello'); // true

x = s.includes('Hell'); // False because its looking for a string, not just the characters

x = s.valueOf(); // Hello World

console.log(x);
