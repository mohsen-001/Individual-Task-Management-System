const sidebar_btn = document.querySelector('.bar-icon');
const sidebar = document.querySelector('#sidebar');
const profileName = document.querySelector('.profile p');
const logout = document.querySelector('.logout');
const sweetAlertContainer = document.querySelector('.sweet-alert-container');
const sweetAlert = document.querySelector('.sweet-alert-container .sweet-alert');
const cancelBtn = document.querySelector('.sweet-alert-container .g-btn-tertiary');
const approveBtn = document.querySelector('.sweet-alert-container .g-btn-primary');

const userRawData = localStorage.getItem('currentUser');
const userData = JSON.parse(userRawData);

window.addEventListener('load', ()=> {
    if (!localStorage.getItem('currentUser') || userData.isLogin != true) window.location.href = "./login.html";
    setTimeout(() => {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
    body.style.overflow = 'auto';
    const userFullName = `${userData.firstName} ${userData.lastName}`;
    profileName.innerHTML = userFullName;
}, 3000);
});


sidebar_btn.addEventListener('click', () => {
    sidebar.classList.toggle('expand-sidebar');
});

logout.addEventListener('click', () => {
    sweetAlertContainer.style.display = "flex";
    // sweetAlert.style.marginBottom = "400px";
    setTimeout(function ()
        {
            sweetAlert.style.webkitTransitionDuration = "0.1s";
            sweetAlert.style.webkitTransitionTimingFunction = "ease";
            sweetAlert.style.webkitTransform = "translate3d(0, -100px, 0)";
            sweetAlert.style.opacity= "1";
        }, 0);
    
});

cancelBtn.addEventListener('click', () => {
    sweetAlertContainer.style.display = "";
    setTimeout(function ()
        {
            sweetAlert.style.webkitTransitionDuration = "0.1s";
            sweetAlert.style.webkitTransitionTimingFunction = "ease";
            sweetAlert.style.webkitTransform = "translate3d(0, 0, 0)";
            sweetAlert.style.opacity= "";
        }, 0);
})

approveBtn.addEventListener('click', () => {
    window.location.href = "./login.html";
    userData.isLogin = false;
    const loginAdded = JSON.stringify(userData);
    localStorage.setItem('currentUser', loginAdded);
})
