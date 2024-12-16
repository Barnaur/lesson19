// 1 задание

let number = 10369; 

let digit1 = Math.floor(number / 10000);
let digit2 = Math.floor((number % 10000) / 1000);
let digit3 = Math.floor((number % 1000) / 100);
let digit4 = Math.floor((number % 100) / 10);
let digit5 = number % 10;

let result = `${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`;
console.log(result); 

// 2 задание

let userName = prompt("What is your name?");
alert(`Hello, ${userName}! How are you?`);

// 3 задание

let qwe = prompt('введите трехзначное число');
let rty = Math.floor(qwe/100);
let qwe1 = Math.floor(qwe/10) % 10;
let rty1 = qwe % 10;
let qwerty = rty == qwe1 == rty1;
let qwerty1 = rty == qwe1 || qwe1 == rty1 || rty == rty1;
console.log('Одинаковы ли все числа?' + qwerty);
console.log('Одинаковы ли хоть какие-то числа?' + qwerty1);



