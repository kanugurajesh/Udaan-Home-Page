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

// add event listeners to all the li elements in menu-content
const menu_content = document.querySelectorAll('#menu-content li');
menu_content.forEach((li) => {
    // add hover event listerne
    li.addEventListener('mouseover', () => {
        li.classList.add('li');
    })

    li.addEventListener('mouseout', () => {
        li.classList.remove('li');
    })
})

// Get a reference to the section1 h1 element
const section1Header = document.querySelector('.section1 h1');

// Define the initial font size and the increase per 50px
const initialFontSize = 1.5; // Initial font size in rem
const fontSizeIncrease = 0.1; // Font size increase per 50px in rem

// Function to update the font size based on the window width
function updateFontSize() {
    const windowWidth = window.innerWidth;
    const newFontSize = initialFontSize + ((windowWidth - 400) / 50) * fontSizeIncrease;
    section1Header.style.fontSize = `${newFontSize}rem`;
}

// Call the function initially and whenever the window is resized
updateFontSize();
window.addEventListener('resize', updateFontSize);
