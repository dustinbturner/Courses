const x = 100;
const y = 50;
function getSum(n1, n2) {
	let sum = n1 + n2;
	return sum;
}
const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);

//Memory Creation Phase
// Step 1 -x variable is allocated memory and stores 'undefined'

// Step 2 - y variable is allocated memory and stores 'undefined'

// Step 3 - getSum() function is allocated to memory and stores all the code

// Live 7 - sum1 variable is allocated memory and stores 'undefined'

// Live 8 - sum2 variable is allocated memory and stores 'undefined'

// Execution Phase

// Line 1 - Places the value of 100 into x variable

// Line 2 - Places the value of 50 into the y variable

// Line 3 - Skips the function because there is nothing to execute

// Line 7 Invokes the getSum() function and creates a new function execution context

// Line 8 -
