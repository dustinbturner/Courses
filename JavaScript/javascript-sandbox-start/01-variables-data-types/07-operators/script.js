// 1. Arithmetic Operators

let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5; // Modulus operator gives us the remainder

//Concatenation

x = 'Hello' + ' ' + 'World'; // Hello World

// Exponent
x = 2 ** 3; // 8

//Increment
x = 1;
x++;

// Decrement
x--;

console.log(x);

// 2. Assignment Operators
x = 10;
x += 5; // Same as saying x = x + 5
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

console.log(x);

// 3. Comparison Operators

x = 2 == 2; // Evaluating expression
x = 2 === '2'; // False because it evaluates the type also

x = 2 != '2'; // False
x = 2 !== '2'; // True
x = 2 !== 2; // True

console.log(x);
