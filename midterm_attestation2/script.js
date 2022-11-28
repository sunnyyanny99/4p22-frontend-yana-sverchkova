'use strict';

const button = document.getElementById('button').value;

button.addEventListener('click', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('passsword').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    eventevent.preventDefault();
    
    function validateEmail(email) {    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
        return re.test(String(email).toLowerCase());
    };

    function check() {
        if (email.value === '') {
            email.style.borderColor = 'red';
            email.innerHTML = 'Поле обязательно для заполнения';
            return false;
        } if (!re(email.value)) {
            email.style.borderColor = 'red';
            email.innerHTML = 'Email введен некорректно';
            return false;
        } else {
            email.innerHTML = '';
        };
        if (password.value === '') {
            password.style.BorderColor = 'red';
            password.innerHTML = 'Поле обязательно для заполнения';
            return false;
        } else {
            email.innerHTML = '';
        };
        if (!(passwordConfirm === password)) {
            password.innerHTML = 'Пароли не совпадают';
            return false;
        }
    };


});