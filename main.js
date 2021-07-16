/* === Open and close menu when click in icon: hamburguer and X  === */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* === When clicking on an item, hide the menu === */ 
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* Change header of page when page move down */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

}

/* Testimonials carousel slider swiper */
const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel:true,
  keyboard: true
});

/* ScrollReveal: Show elements when scroll in page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  ` #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .tesmtimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
  `,
  { interval: 100}
  )

/* Buttom back to top*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >=560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop() 
})