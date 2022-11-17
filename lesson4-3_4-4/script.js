'use strict'

const person = {
    firstName: 'Andrew',
    lastName: 'Gulin'
}

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

Object.entries(person).forEach((entry) => {
    console.log(`Ключ: ${entry[0]}, Значение: ${entry[1]}`);
})

Object.entries(person).forEach(([ key, value ]) => {
    console.log(`Ключ: ${key}, Значение: ${value}`);
})


/* const person = {
    firstName: 'Andrew',
    lastName: 'Gulin'
}

const employee = {
    lastName: 'GulinEmployee',
    id: 21521216,
    personalInfo: {
        passportNumber: 154215,
        telNumber: 153152,
        taxNumber: 'cbhfbvhjfd',
    }
}
*/
/* const person2 = Object.assign({}, employee, person);

//spread
const person3 = { ...person, ...employee, personalInfo: { ...employee.personalInfo } };

person3.personalInfo.passportNumber = 0;

console.log(person2 === person);

console.log(person3);
console.log(person2);
*/

//json - JavaScript Object Notation
/* const stringJson = JSON.stringify(employee);
console.log(stringJson);

const employee2 = JSON.parse(stringJson);
console.log(employee2);

employee2.personalInfo.passportNumber = 0;


console.log(employee.personalInfo.passportNumber);
console.log(employee2.personalInfo.passportNumber); */

/* const arr = [];
const arr2 = ['яблоко', 'банан', 'персик'];

const objectList = [
    {
        firstName: 'Petr',
        lastName: 'Chekh',
        birthDate: '11.11.2022'
    },
    {
        firstName: 'Branislav',
        lastName: 'Ivanovich'
    },
    {
        firstName: 'John',
        lastName: 'Terry'
    },
    {
        firstName: 'Ricardo',
        lastName: 'Carnaval'
    },
    {
        firstName: 'Ashley',
        lastName: 'Cole'
    },
    {
        firstName: 'Michael',
        lastName: 'Essien'
    }
];

// push
objectList.push({
    firstName: 'Frank',
    lastName: 'Lampard'
});

arr2.push('папайя');

console.log(objectList);
console.log(arr2);

// pop
objectList.pop();
arr2.pop();

console.log(objectList);
console.log(arr2);


//unshift - добавить в начало массива
arr2.unshift('Папайя');
console.log(arr2);

//shift - удалить с начала массива
const firstElem = arr2.shift();
console.log(firstElem);
console.log(arr2);

//indexOf - индекс элемента
const index = arr2.indexOf('банан');
console.log(index);

//findIndex - найти индекс элемента
const index2 = objectList.findIndex((item) => {
    return item.firstName === 'Petr';
});

console.log(index2);

//find - поиск в масиве
const elem = objectList.find((item) => {
    return item.lastName === 'Terry';
});

console.log(elem);

//slice (часть массива - [2, 3)
const arr3 = arr2.slice(1, 2);

console.log(arr3);

//splice
arr2.splice(1, 2);

console.log(arr2);
*/

/* const element = objectList[3];
const element2 = objectList[objectList.length - 1];

console.log(element2);
*/

/*for (let i = 0; i < objectList.length; i++) {
    if (i >= 5) {
        break;
    }

    console.log(`${i + 1}. ${objectList[i].firstName}`);
}*/ 

/* const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}

console.log(sum); */

/*objectList.forEach((item) => {
    console.log(item.firstName);
}); */

/*objectList.forEach((elem, index) => {
    if (index < 5) {
        console.log(`${index + 1}. ${elem.firstName}`);
    }
}); */