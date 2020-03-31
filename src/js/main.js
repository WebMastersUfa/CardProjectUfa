let isOpenNavbar = false;
const navbar = document.getElementById('navbarList');
const burgerMenu = document.getElementById('burgerButton');
const navbarHeader = document.getElementById('navbarHeader');

function openNavbar() {
  if (isOpenNavbar) {
    navbar.style.height = '0';
    navbarHeader.style.opacity = '1';
    isOpenNavbar = false;
  } else {
    navbar.style.height = '250px';
    navbarHeader.style.opacity = '0';
    isOpenNavbar = true;
  }
}

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('change');
});
burgerMenu.addEventListener('click', openNavbar);



