'use strict';

const body = document.querySelector('body');

console.log(body);

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';

body.appendChild(div);
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';