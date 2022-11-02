'use strict';

//let someVariable = 'Hello, World!';
//const someConstant = 'Hello, World!';

//console.log(someVariable);

//const a = 5;
//const b = 6;

//console.log((a+b) / a)

const circle = document.querySelector('.circle')
let isMoving = false;

document.addEventListener('mousemove', (event) => {
    
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
})