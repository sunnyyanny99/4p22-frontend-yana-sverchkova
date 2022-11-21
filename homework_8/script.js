'use strict'


let button;
button = document.getElementById('result');

let output;
output = document.getElementById('output');

button.addEventListener('click', (event) => {

    event.preventDefault()

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('op').value;
    let result;

    if (num1 === '' || String(num1).trim() === '') {
        console.log('Первое число не указано');
        output.InnerText = 'Первое число не указано';
    }
    if (num2 === '' || String(num2).trim() === '') {
        console.log('Второе число не указано');
        output.InnerText = 'Второе число не указано';
    }
    if (op === '' || String(op).trim() === '') {
        console.log('Не выбрана операция');
        output.InnerText = 'Не выбрана операция';
    }
    switch (op) {
        case '': {
            console.log('Не введен знак');
        }
        case '+': {
            result = Number(num1) + Number(num2);
            break;
        }
        case '-': {
            result = Number(num1) - Number(num2);
            break;
        }
        case '*': {
            result = Number(num1) * Number(num2);
            break;
        }
        case '/': {
            result = Number(num1) / Number(num2);
            break;
        }
        default: {
            console.log('Программа не поддерживает данную операцию');
            output.innerText = 'Программа не поддерживает данную операцию';
        }
    }
    if ((result*0) === 0) {
        console.log(result);
    } else {
        console.log('Результат невозможно вычислить');
    }
});