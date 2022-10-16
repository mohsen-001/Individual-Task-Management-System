if (!localStorage.getItem('currentUser')) window.location.href = "./login.html";
setTimeout(() => {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
    body.style.overflow = 'auto';
}, 3000)