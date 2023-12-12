let x;
const name = 'John';
const age = 25;
x = 'Hello, my name is ' + name + ' and i am ' + age + ' years old';

//String Properties and Methods
const s = 'Hello World'
x = s.length;
x = s[0];

x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('e');

x = s.substring(0,4); //Hell
x = s.slice(0,5);
x = '             Hello World '
x = s.trim();
x = s.replace('World', 'John');
x = s.includes('Hello');//true
x = s.includes('Hella');//false
x = s.valueOf();//Hello World
x = s.split('');




console.log(x)