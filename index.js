const menu = document.querySelector('#menu');
const menu_list = document.querySelector('#menu-content');
const first_div = document.querySelector('#first-div');
menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    menu_list.classList.toggle('open');
    first_div.classList.toggle('open');
    console.log('click');
});