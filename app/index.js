const sidebar_btn = document.querySelector('.fa-bars-staggered');
const sidebar = document.querySelector('#sidebar');

if (!localStorage.getItem('currentUser')) window.location.href = "./login.html";
setTimeout(() => {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
    body.style.overflow = 'auto';
}, 3000)


sidebar_btn.addEventListener('click', () => {
    sidebar.classList.toggle('expand-sidebar');
});
