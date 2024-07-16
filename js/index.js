document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById('navbar');

  window.onscroll = function() {
    if (window.scrollY > 100) { // ajuste o valor conforme necessário
      navbar.classList.add('scrolled');
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('fixed-top');
    }
  };
});


//constructor
window.revelar = ScrollReveal({reset:true})

