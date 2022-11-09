'use strict';

//const str = 'строка'.toUpperCase();
//const str2 = 'СтРока'.toLowerCase();

//console.log(str);
//console.log(str2);

//console.log('Строка'.includes('Стр'));
//console.log('Строка'.startsWith('Стр'));
//console.log('Строка'.endsWith('ока'));

/*const str = 'строка';
const strUpper = str.toUpperCase();
console.log(str);
console.log(strUpper);*/

/*console.log('А роза упала на лапу Азора'.replace('А', 'а'));
console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'));*/

/*const str = '                строка с проблеами по краям     ';
console.log(str.trim());*/

/*const str = 'Привет!';
console.log(str[0]);*/

//const str = '   Строка   '.trim().toLowerCase().startsWith('стр');
//console.log(str);

// || - или
// && - И
// ! - НЕ

/*const a = null;
const b = 'Строка';
const c = 0;

const resultOr = a || b || c;
console.log(resultOr);

const resultAnd = a && b && c;
console.log(resultAnd);*/

//const num1 = 5;
//const num2 = 6;

/*const result = num1 == num2;
console.log(result);

const result = num1 !=num2;
console.log(result);*/

//console.log(num1 > num2);

/*const num = 5;

if (num>=5) {
    console.log('Число больше или равно 5');
}*/

/*const num = 5;
const num2 = 10;

if (num >= 5 && num2 >= 10) {
    console.log('Число больше или равно 5');
} else {
    console.log('ИНАЧЕ');
} */

/*const age = 39;
const name = 'Pawel';
const lastName = 'Macivoda';

if (age > 18 && age < 40) {
    console.log('Ваш возраст от 18 до 40');
}

if (name === 'Pawel' || name === 'Pavel' && age > 18) {
    console.log('Условие выполнилось');
}*/

/*const someVariable = 'Значение 3';

switch (someVariable) {
    case 'Значение 1': console.log('1'); break;
    case 'значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('defauult');
}
*/

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submit');

loginInput.addEventListener('input', (event) => {
    console.log(event.target.value);
})

passwordInput.addEventListener('input', (event) => {
    console.log(event.target.value);
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);
})