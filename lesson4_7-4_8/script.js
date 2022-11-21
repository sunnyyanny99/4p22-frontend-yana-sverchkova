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

async function asyncFunction() {
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
    }); */
    
    const result = await promise;
    console.log(result);
}

asyncFunction();