const MenuIcon = document.querySelector('.fa-bars');
const CloseIcon = document.querySelector('.fa-xmark');
const sideNavbarWrapper = document.querySelector('.side-navbar-wrapper');

MenuIcon.addEventListener('click', () => {
  sideNavbarWrapper.style.transform = 'translateX(0)';
});

CloseIcon.addEventListener('click', () => {
  sideNavbarWrapper.style.transform = 'translateX(100%)';
});
