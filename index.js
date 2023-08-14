const menu = document.querySelector('#menu');
const menu_list = document.querySelector('#menu-content');
const first_div = document.querySelector('#first-div');
const header = document.querySelector('#header');
let isMenuOpen = false; // Add a flag to track menu open state

function handleResize() {
    if (window.innerWidth >= 800) {
        if (isMenuOpen) {
            menu.classList.remove('open');
            menu_list.classList.remove('open');
            first_div.classList.remove('open');
            isMenuOpen = false;
        }
        menu_list.classList.remove('ul')
        menu.style.display = 'none';
        first_div.classList.remove('show');
        header.classList.add('showh')
    } else {
        menu_list.classList.add('ul')
        menu.style.display = 'flex';
        first_div.classList.add('show');
        header.classList.remove('showh');
    }
}

function handleMenuClick() {
    isMenuOpen = !isMenuOpen; // Toggle menu state
    menu.classList.toggle('open');
    menu_list.classList.toggle('open');
    first_div.classList.toggle('open');
    console.log('click');
}

// Initial call to handleResize to set initial state based on window size
handleResize();

// Add debouncing to the resize event using a utility function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Attach the debounced event handler for window resize
window.addEventListener('resize', debounce(handleResize, 300)); // Adjust debounce delay as needed

menu.addEventListener('click', handleMenuClick);