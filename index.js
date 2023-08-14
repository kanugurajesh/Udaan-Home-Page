const menu = document.querySelector('#menu');
const menu_list = document.querySelector('#menu-content');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    menu_list.classList.toggle('open');
    console.log('click');
});