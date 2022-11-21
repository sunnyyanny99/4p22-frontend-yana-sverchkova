'use strict'

let a = '';
let b = '';
let operator = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    operator = '';
    finish = false;
    out.textContent = 0;
}



document.querySelector('buttons').addEventListener('button', (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b ==='' && operator === '') {
        a += key;
        console.log(a, b, operator);
        out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, operator);
        return;
    }

    if (action.includes(key)) {
        operator = key;
        out.textContent = operator;
        console.log(a, b, operator);
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (operator) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    operator = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, operator);
    }
})