// // document.getElementById()

// console.log(document.getElementById('app-title'));

// console.log(document.getElementById('app-title').id);

// //Set attributes
// document.getElementById('app-title').title = 'Shopping List';

// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

listItems.forEach((item) => {
	item.style.color = 'red';
});
