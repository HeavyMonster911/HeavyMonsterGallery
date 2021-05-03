let container = document.querySelector('.userStart');
let main = document.querySelector('.mainLogin');
let btn = document.querySelector('.loginForm');
let removeBtn = document.querySelector('.userStart i');
function toggleForm() {
    container.classList.toggle('active')
}
btn.onclick = function() {
    main.classList.toggle('activelist');
}
removeBtn.onclick = function() {
    main.classList.remove('activelist');
}