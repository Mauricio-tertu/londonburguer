const menu = document.querySelector('.menu');
const Navmenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    Navmenu.classList.toggle('ativo');
})