'use strict'

/* const error1 = '';
const error2 = '';
const error3 = '';

// const global Error = error1 + error2 + error3;

if (!(error1 + error2 + error3)) {
    console.log('ошибки нет');
}
*/

/* console.log('Hello, world!'), 1;
console.log('Hello, world!', 2);
console.log('Hello, world!', 3);
console.log('Hello, world!', 4);
console.log('Hello, world!', 5);
console.log('Hello, world!', 6);
console.log('Hello, world!', 7);
console.log('Hello, world!', 8);
console.log('Hello, world!', 9);
console.log('Hello, world!', 10);

for (let i = 0; i < 10; i ++) {
    console.log('Hello, world!');
} */

/*let isLoopContinues = true;
let i = 0;*/

/*while (isLoopContinues) {
    i = Math.random();
    console.log(i)

    if (i > 0.5) {
        isLoopContinues = false;
    }
}*/

/*do {
    i = Math.random();
    console.log(i);

    if (i > 0.5) {
        isLoopContinues = false;
    } else {
        isLoopContinues = true;
    }
} while (isLoopContinues); */

/*while (isLoopContinues) {
    i = Math.trunc(10 * Math.random() + 1);
    console.log(i);

    if (i === 8) {
        isLoopContinues = false;
    }
}

console.log(10 * Math.random() + 1);*/

// res = a * b + k

// Function Declaration
/*function sayHello() {
    console.log('Hello, world!');
}

sayHello();

// Function Expression
const sayHello2 = function() {
    console.log('Hello, World!');
}

// Function Expression (lambda - стрелочная функция)
const sayHello3 = () => {
    console.log('Hello, World!');
}

// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('Hello from IIFE');
})(); */

/* function sayHelloToUser(firstName, lastName = '') {
    console.log(`Привет, ${firstName} ${lastName}`);
}

console.log(someVariable);

sayHelloToUser('Иван', 'Петров');
sayHelloToUser('Илон', 'Маск'); */

/* var someVariable = 'Hello';
function sayHello() {

} */

function sayHello() {
    console.log('Hello, world!');
}

function getSum(a, b) {
    return a + b;
}

const sum = getSum(4, 5);
console.log(sum);