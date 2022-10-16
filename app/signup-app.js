const signUp = document.querySelector('.submit .g-btn-primary');
const haveAccount = document.querySelector('.submit .g-btn-tertiary');

const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#re-password');
const policyAgreement = document.querySelector('.policy-agreement input');


function checkFirstname() {
    const firstNameValue = firstName.value.trim();
    if (firstNameValue === '') {
        setError(firstName, 'First Name is required!');
        return false;
    }else{
        return true;
    }
}

function checkLastname() {
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
        setError(lastName, 'Last Name is required!');
        return false;
    }else{
        return true;
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Email is required!');
        return false;
    }else if (!validateEmail(emailValue)) {
        setError(email, 'Please Enter a valide email address!');
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
    }else{
        return true
    }
}

function checkRePassword() {
    const rePasswordValue = rePassword.value.trim();
    const passwordValue = password.value.trim();
    if (rePasswordValue === "") {
        setError(rePassword, 'Repassword is required!');
        return false;
    }else if (passwordValue !== rePasswordValue){
        setError(rePassword, 'Password doesnot match!');
        return false;
    }else{
        return true
    }
}

function setError(elem, msg) {
    let formControl = elem.parentElement;
    let small = formControl.querySelector('small');
    formControl.classList.add('g-error');
    small.innerText = msg;
}

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('hey')
    const firstNameValidated = checkFirstname();
    const lastNameValidated = checkLastname();
    const emailValidated = checkEmail();
    const passwordValidated = checkPassword();
    const rePasswordValidated = checkRePassword();

    if(firstNameValidated && lastNameValidated && emailValidated && passwordValidated && rePasswordValidated){
        const userObject = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
        }
        const userObjectData = JSON.stringify(userObject);
        localStorage.setItem('currentUser', userObjectData);
        // console.log(userObjectData);

        setTimeout(() => {
          window.location.href = "./login.html";
        // console.log('info added')
        }, 3000);
    }
})

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

haveAccount.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./login.html";
})