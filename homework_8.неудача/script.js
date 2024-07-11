'use strict'

let a = '';
let b = '';
let operator = '';

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const actions = ['+', '-', 'X', '/', '='];

const out = document.querySelector('.calc-screen p');

let buttonContent;
let result;
let buttons = document.getElementsByClassName('buttons');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        buttonContent = event.target.textContent;
        if (digits.includes(buttonContent)) {
            // мы нажали число
            console.log('Мы нажали число');
            
            if (a == '') {
                a = buttonContent;
            }
            else {
                b = buttonContent;
            }
        }
        if (actions.includes(buttonContent)) {
            // мы начали операцию
            console.log('Мы начали операцию');
            switch (buttonContent) {
                case '=' : result = parseFloat(a) + parseFloat(b); console.log(result); break;
            }
        }
        
        // console.log(event.target.textContent);
    })
}