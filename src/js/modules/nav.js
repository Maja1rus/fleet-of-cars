export function nav(className) {
    const navBtn = className.querySelector('.header-nav__btn');
    const navIcon = className.querySelector('.header-nav__icon');
    const navMenu = className.querySelector('.header-nav__list');

    navBtn.addEventListener('click', navHandler)

    function navHandler() {
        navIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}