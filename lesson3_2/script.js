'use strict';

//const num = 5; //number | +-(2^53 - 1)
//const bigNum = 9007199254740992; // bigint | число произвольной длины

//const strDoubleQuote = 'String'; // строка в одинарных кавычках
//const strDoubleQuote = "String"; // строка в двойных кавычках
//const name = 'Hello! I\'m Andrew';

//const isVisible = true; // boolean
//const isHidden = false; //boolean

//----------------------

//const someConstant = null; // null
//let someVariable; // undefined
//console.log(someConstant);
//console.log(someVariable);


//const floatNum = 5.2;
//const typeOfFloatNum = typeof floatNum;
//console.log(typeOfFloatNum);

//Строковый типа преобразования
//const num = 5;
//const bool = true;

//const strFromNum = String(num);
//console.log(typeof strFromNum);

//const strFromBool = String(bool);
//console.log(strFromBool);

//Числовой тип преобразования
//const str = '5';
//const bool = true;

//const numberFromStr = Number(str);
//console.log(numberFromStr);

//const numberFromBool = Number(bool);
//console.log(numberFromBool);

//Булевский тип преобразования
//const str = 'jhgmblkf';
//const num = 5;

//const boolFromStr = Boolean(str);
//console.log(boolFromStr);

//const boolFromNum = Boolean(num);
//console.log(boolFromNum);

//falsey-значения// 0, null, undefined, ''NaN

//выражение
//операторы = + - / * 
//операнды - числа, с которыми производятся операции
//типы операторов: унарные и бинарные
// * / - +  - бинарные (требуют два операнда)
//+sum

//Математика
const result = 5 + 10;
console.log(result);

const division = 15 % 4;
console.log(division);

const pow = 5 ** 2;
console.log(pow);

const res = 5 + 'fgvhghbn';
console.log(res);

const divisionByZero = 1 / 0;
console.log(divisionByZero);

//Сокращенная арифметика
let n = 1;
n = n + 2;
n = n * 3;
console.log(n);
n *= 3; // n = n * 3;
n +=3; // n = n + 3;
n /= 3; // n = n / 3;
n -= 3; // n = n - 3;
console.log(n);

n++; // инкремент (постфикс)
n--; //декремент (постфикс)

--n; // префикс;
++n; // префикс;
console.log(n);