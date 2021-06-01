      
arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

let menuBar = document.querySelector('.menuBar');
let navigation = document.querySelector('.navigation');
let closeBar = document.querySelector('.closeBar');
menuBar.onclick = function() {
  this.classList.add('activeBtn');
  closeBar.classList.add('disableBtn')
  navigation.classList.add('active');
}
closeBar.onclick = function() {
  this.classList.remove('disableBtn');
  menuBar.classList.remove('activeBtn')
  navigation.classList.remove('active');
}

let infoActive = document.querySelectorAll('.info-box');

for (let i = 0; i <= infoActive.length; i++) {
  let infoArrow = document.querySelectorAll('.info-arrow');
  infoArrow[i].onclick = function() {
    infoArrow[i].classList.toggle('arrow-active');
    infoActive[i].classList.toggle('active-menu');
  }
}