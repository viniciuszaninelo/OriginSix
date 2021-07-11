/* OPEN AND CLOSE MENU */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector("header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.sccrolly >= navHeight) {
    // scrool é maior ou iguala alturado header
    header.classList.add("scrool")
  } else {
    // menor que a altura do header
    header.classList.remove("scrool")
  }
})

/* CARROUSEL SLIDER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});

/* SCROLLREVEAL -> Mostra elementos quando der scroll na página  */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
{ interval: 100 })