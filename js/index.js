document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById('navbar');
  var logoImg = document.getElementById('logo-img');

  window.onscroll = function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      navbar.classList.add('fixed-top');
      logoImg.classList.add('img-scrolled')
      logoImg.src = '/img/icons/Logo-Sell-Adm-Colorido.png';
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('fixed-top');
      logoImg.classList.remove('img-scrolled')
      logoImg.src = '/img/icons/Logo-Sell-Adm-Branco.png';
    }
  };
});

//constructor
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-txt1', {
  duration: 1000,
  distance: '100px'
})

revelar.reveal('.efeito-btn1', {
  duration: 1000,
  distance: '1000px',
  delay: 700,
  origin: 'left'
})

revelar.reveal('.efeito-btn2', {
  duration: 1000,
  distance: '1000px',
  delay: 400,
  origin: 'left'
})

revelar.reveal('.efeito-txt2', {
  duration: 3000,
  distance: '100px'
})

revelar.reveal('.efeito-txt2-1', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 200
})

revelar.reveal('.efeito-txt2-2', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 300
})

revelar.reveal('.efeito-txt2-3', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 400
})

revelar.reveal('.efeito-txt2-4', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 500
})

revelar.reveal('.efeito-txt2-5', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 600
})

revelar.reveal('.efeito-txt3-1', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 100
})

revelar.reveal('.efeito-txt3-2', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 300
})

revelar.reveal('.efeito-txt3-3', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  delay: 400
})

