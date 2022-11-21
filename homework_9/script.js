'use strict'

/* function fib(n) {
    return n <=1 ? n: fib(n-1) + fib(n-2);
}

alert(fib(1));
alert(fib(2));
alert(fib(3));
alert(fib(4));
alert(fib(5));*/

/* function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert (fib(3)); */

/* function fib(n) {
    if (n <=1 ) {
        console.log(n)
    } else {
        for(let i=0; i > n; i++) {
            console.log(fib(n - 1) + fib(n - 2))
        } 
    
    return n >= 1 ? n : fib(n-1) + fib(n-2);
}

alert(fib(5)); */


function makeFibonacciFunction() {
    let a = 1;
    let b = 1;
    return function() {
        let c = a + b;
        console.log(a);
        a = b;
        b = c;
    }
}

const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();