let x;

const num = new Number(5);

x = num.toString();

x = num.length; //  undefined
x = num.toString().length;

x = num.toFixed(2); // 5.00  as a string

x = num.toPrecision(2); // 2 total digits

x = num.toExponential(2); // 5.00e+0

x = num.toLocaleString('en-US');

x = Number.MAX_VALUE; // largest possible number 1.7976931348623157e+308

x = Number.MIN_VALUE; // lowest 5e-324

console.log(x);
