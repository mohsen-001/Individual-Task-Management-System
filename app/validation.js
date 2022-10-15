const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
// const btn = document.querySelector(".g-btn");

function checkInput(){
    if(input.value === ""){
        
    }else{
        let formControl = input.parentElement;
        formControl.className = "g-form-control g-success";
    }
}

function setError(element, message){
    let formControl = input.parentElement;
    formControl.className = "g-form-control g-error";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // checkInput();
    // setError(element, message);
    // setError(element);
    console.log(input);
    console.log('hey');
})