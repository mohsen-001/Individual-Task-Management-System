const signUp = document.querySelector('.g-btn-tertiary');
const loginBtn = document.querySelector('#loginBtn');

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkbox = document.querySelector('.g-checkbox');

const emailData = 'ah.mohsen001@gmail.com';
const passwordData = '123';

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Email is required!');
        return false;
    }else if (emailValue !== emailData) {
        setError(email, 'Email is incorrect!');
        return false;
    }else{
        return true;
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
        setError(password, 'Password is required!');
        return false;
    }else if(passwordValue !== passwordData){
        setError(password, 'Password is incorrect!');
        return false;
    }else{
        return true
    }
}

function setError(elem, msg) {
    let formControl = elem.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'g-form-control g-error';
    small.innerText = msg;
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('hey')
    const emailValidated = checkEmail();
    const passwordValidated = checkPassword();
    if(emailValidated && passwordValidated){
        setTimeout(() => {
          window.location.href = "./dashboard.html";
        }, 3000);
    }
})

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./signup.html";
})