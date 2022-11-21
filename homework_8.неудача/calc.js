'use strict'



document.addEventListener('click' , (event) => {
    const number1 = document.getElementById('num1').value;
    const number2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const result = document.getElementById('result').value;
    const button = document.getElementById('button').value;

    event.preventDefault();
    
    function(func) {
    if (number1.length ===  0) {
        console.log('Первое число не указано') 
    } else if (!(Number(num1*0) === 0)) {
            console.log('Некорректный ввод первого числа')
        };
    if (number2.length === 0) {
        console.log('Второе число не указано')
    } else if (!(Number(num2*0) === 0)) {
            console.log('Некорректный ввод второго числа')
        };
    if (operation.length === 0) {
        console.log('Не введен знак операции')
    } else if (!((operation === '+') || (operation === '-') || (operation === '*') || (operation === '/'))) {
        console.log('Данная операция не может быть осуществима')
    };
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    };
    if ((result) === 0) {
        console.log(`Результат: ${result}`)
    } else {console.log('Результат невозможно вычислить')}

}});