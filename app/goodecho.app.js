const g_btn_loader = document.querySelector('[data-btn-loader]');
function btnLoader(btnPlace){
    const loader = document.createElement('lottie-player');
    loader.setAttribute('src', './loader/g-btn-loader.json');
    loader.setAttribute('background', 'transparent');
    loader.setAttribute('speed', '1');
    loader.setAttribute('style', 'width: 50px');
    loader.setAttribute('loop', '');
    loader.setAttribute('autoplay', '');
    btnPlace.appendChild(loader);
}

g_btn_loader.addEventListener('click', () => {
    const btn_width = g_btn_loader.offsetWidth;
    const btn_height = g_btn_loader.offsetHeight;
    g_btn_loader.innerHTML = '';
    g_btn_loader.style.width = `${btn_width}px`;
    g_btn_loader.style.height = `${btn_height}px`;
    g_btn_loader.style.display = 'flex';
    g_btn_loader.style.justifyContent = 'center';
    g_btn_loader.style.alignItem = 'center';
    btnLoader(g_btn_loader);
})