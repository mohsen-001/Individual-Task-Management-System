const signUp = document.querySelector('.g-btn-tertiary');
const loginBtn = document.querySelector('#loginBtn');

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkbox = document.querySelector('.g-checkbox');

const userRawData = localStorage.getItem('currentUser');
const userData = JSON.parse(userRawData);

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Email is required!');
        return false;
    }else if(userData === null){
        setError(email, 'Email doesnot exist!');
        return false;
    }else if (emailValue !== userData.email) {
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
    }else if(userData === null){
        setError(password, 'Password is incorrect!');
        password.value = "";
        return false;
    }else if(passwordValue !== userData.password){
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
    const emailValidated = checkEmail();
    const passwordValidated = checkPassword();
    
    if(emailValidated && passwordValidated){
        
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 3000);
    }
})

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./signup.html";
})