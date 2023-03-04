// And - both have to be true
console.log(10 < 20 && 30 > 15);

// Or - just one has to be true
console.log(10 > 20 || 30 > 15);

// && - Will return the first falsy value or the last value
let a;

a = 0 && 20 && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

let b;

b = 10 || 20;

b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// Nullish coalescing operator
// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = '' ?? 30;

console.log(c);
