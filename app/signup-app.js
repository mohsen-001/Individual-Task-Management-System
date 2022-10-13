const firstName = document.querySelector('.first-name input');
const lastName = document.querySelector('.last-name input');
const email = document.querySelector('.email input');
const password = document.querySelector('.password input');
const rePassword = document.querySelector('.re-password input');
const policyAgreement = document.querySelector('.policy-agreement input');


const signUp = document.querySelector('.submit .g-btn-primary');


signUp.addEventListener('click', () => {
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        policyAgreement: policyAgreement.value
    }

    const userObj = JSON.stringify(user);
    localStorage.setItem('userInfo', userObj);

    setTimeout(() => {
        window.location.href = "./index.html";
    }, 2000);
    
})