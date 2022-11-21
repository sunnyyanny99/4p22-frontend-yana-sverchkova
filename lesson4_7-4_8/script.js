'use strict';

//setTimeout - выполняет callback после паузы
//setInterval - выполняет callback через промежуток времени

setTimeout(() => {
    console.log('Hello world! Timeout');
}, 1000);

setInterval(() => {
    console.log('Hello world! Interval');
}, 1000);

function makeTimeoutFunction() {
    let i = 0;

    return () => {
        i++;
        console.log(`Вызвано 4{i} раз`);
    }
}

const timeoutFun