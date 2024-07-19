document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById('navbar');
  var logoImg = document.getElementById('logo-img');

  window.onscroll = function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      navbar.classList.add('fixed-top');
      logoImg.src = '/img/icons/Logo-Sell-Adm-Colorido.png';
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('fixed-top');
      logoImg.src = '/img/icons/Logo-Sell-Adm-Branco.png';
    }
  };
});


//constructor
window.revelar = ScrollReveal({reset:true})

