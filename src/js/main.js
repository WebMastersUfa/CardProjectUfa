let isOpen = false;
const navbar = document.getElementById('navbarList');
const burgerMenu = document.getElementById('burgerButton');
const navbarHeader = document.getElementById('navbarHeader');

function openNavbar() {
    if (isOpen) {
        navbar.style.height = '0';
        navbarHeader.style.opacity = '1';
        isOpen = false;
    } else {
        navbar.style.height = '250px';
        navbarHeader.style.opacity = '0';
        isOpen = true;
    }
}

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('change');
});
burgerMenu.addEventListener('click', openNavbar);



