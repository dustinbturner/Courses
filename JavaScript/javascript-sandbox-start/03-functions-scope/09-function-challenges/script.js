// convert fahrenheit to celsius

function getCelsius(f) {
	const celsius = ((f - 32) * 5) / 9;
	return celsius;
}

// One line arrow function
const getCelsius2 = (f) => ((f - 32) * 5) / 9;

console.log(getCelsius(100));
console.log(getCelsius2(100));

// Challenge 2
function minMax(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);

	return {
		min,
		max,
	};
}

console.log(minMax([2, 31, 4, 5]));

// Challenge 3
((length, width) => {
	const area = length * width;

	const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
	console.log(output);
})(20, 10);
