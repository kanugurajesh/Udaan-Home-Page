const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// add javascript to open such that when it is added the send li should disapper and first and third li should be in cross shape
// add javascript to close such that when it is added the send li should appear and first and third li should be in hamburger shape

// Path: index.html

// <div class="menu" id="menu">
//     <div class="line1"></div>
//     <div class="line2"></div>
//     <div class="line3"></div>
// </div>

// Path: style.css

// .menu {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     height: 20px;
//     width: 20px;
//     cursor: pointer;
//     z-index: 1000;
// }

// .line1, .line2, .line3 {
//     width: 100%;
//     height: 2px;
//     background-color: #fff;
//     transition: all 0.3s ease;
// }

// .open .line1 {
//     transform: rotate(-45deg) translate(-5px, 6px);
// }

// .open .line2 {
//     opacity: 0;
// }

// .open .line3 {
//     transform: rotate(45deg) translate(-5px, -6px);
// }