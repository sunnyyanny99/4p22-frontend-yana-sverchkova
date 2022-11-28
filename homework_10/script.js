'use strict';

console.log('----------');
console.log('Пункт №1: ');
console.log('----------');
fetch('https://reqres.in/api/users')
    .then((response) => {
        return response.json();
    }).then ((result) => {
        console.log(result);
    });

/*async function fetchData() {
    let result = null;
    
    try {
        const response = await fetch ('https://reqres.in/api/users');
        const result = await response.json();
    } catch (e) {
        console.log(e);
    }
    console.log(result);
}
fetchData(); */

setTimeout(() => {
    console.log('----------');
    console.log('Пункт №2: ');
    console.log('----------');
}, 100);

const array = Array.from(`https://reqres.in/api/users`);
const element = array[1];
console.log(element.last_name);
