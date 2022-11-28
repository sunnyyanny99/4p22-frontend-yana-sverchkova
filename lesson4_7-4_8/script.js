'use strict';

//setTimeout - выполняет callback после паузы
//setInterval - выполняет callback через промежуток времени

/* setTimeout(() => {
    console.log('Hello world! Timeout');
}, 1000);
*/

/* function makeTimeoutFunction() {
    let i = 0;
    
    return () => {
        i++;
        console.log(`Вызвано ${i} раз`);
    }
}


const timeoutFunction = makeTimeoutFunction()
const interval = setInterval(timeoutFunction, 1000);

function stopInterval() {
    clearInterval(interval);
}

setTimeout(stopInterval, 3000); */

// Promise - обработка синхронных вычислений

/* async function asyncFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise result');
        }, 1000);
    });

    /* promise.then(() => {
        cpnsole.log('Промис завершился успешно');
    }).catch(() => {
        console.log('Промис завершился неудачно');
    }).finally(() => {
        console.log('Промис завершился');
    }); 
    
    const result = await promise;
    console.log(result);
}

asyncFunction(); */

/* fetch('https://reqres.in/api/users')
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((result) => {
        console.log(result);
    })

async function fetchData() {
    let result = null;

    try {
    const response = await fetch('https://reqres.in/api/users');
    const result = await response.json();   
} catch (e) {
    console.log(e);
}

    console.log(result);
}

fetchData(); */

/*const container = document.getElementById('container_id');
//const container = document.querySelector('container); - выберет первый элемент с таким классом
//const container = document.querySelectorAll('container); - выберет все элементы с таким классом


/* console.log({
    container
});

container.style.width = '100px';
container.style.height = '100px';
container.style.backgroundColor = 'red';

container.classList.add('some-class');
container.classList.remove('some-class');
container.classList.toggle('some-class'); //если класса нет - добавит, есть - удалит
*/

/* container.addEventListener('click', (event) => {
    console.log('click');
    event.preventDefault();
});

container.addEventListener('mousedown', (event) => {
    console.log('mousedown');
});

container.addEventListener('mouseup', (event) => {
    console.log('mouseup');
}); */

/* container.addEventListener('mousemove', (event) => {
    console.log(event.clientX);
});

const input = document.querySelector('input[name=email]');
console.log(input);

input.addEventListener('input', () => {
    console.log(input.value); // или убрать выше инпут в кавычках и в скобках написать ивент, а внизу event.target.value
});
*/

/* const input = document.querySelector('input[name=email]');
console.log(input);

input.addEventListener('input', (event) => {
    console.log(event.target.value);

    const regEx = /\D/g; // чтобы в инпуте были только буквы/цифры

    event.target.value = event.target.value.replace(regEx, '');
}) */

/* const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

box1.addEventListener('click', (event) => {
    console.log('box-1');
});

box2.addEventListener('click', (event) => {
    console.log('box-2');
});

box3.addEventListener('click', (event) => {
    console.log('box-3');
});

document.addEventListener('click', () => {
    console.log('document');
}); */

localStorage.setItem('theme', 'dark'); //добавить данные в ls

console.log(localStorage.getItem('theme'));

localStorage.clear();

localStorage.removeItem('theme');

sessionStorage.setItem('theme', 'dark');
sessionStorage.getItem();

