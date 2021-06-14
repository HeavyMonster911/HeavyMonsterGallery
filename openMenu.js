let ActiveBtn__Menu = document.querySelector('.active-btn__menu');
let Menu__page = document.querySelector('.menu__page');

ActiveBtn__Menu.onclick = function() {
    this.classList.toggle('active');
    Menu__page.classList.toggle('active');
}