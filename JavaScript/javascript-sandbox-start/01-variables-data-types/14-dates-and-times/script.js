let d;

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10, 12, 30, 0);

d = new Date('2021-07-10');

d = Date.now();

d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

d = Math.floor(Date.now() / 1000);

let x;
d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

console.log(x);
