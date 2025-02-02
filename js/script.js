$(document).ready(function() {
 //Progress bar 
let containerA = document.getElementById("circleA")

// Circulo A
let circleA = new ProgressBar.Circle(containerA, {
  color: '#64DAF9',
  strokeWidth: 8,
  duration: 1400,
  from: { color: '#AAA'},
  to: { color: '#64DAF9'},

  step: function(state, circle){
    circle.path.setAttribute('stroke', state.color);

    let value = Math.round(circle.value() * 60)

    circle.setText(value)
  }
})

// Circulo B
let containerB = document.getElementById("circleB")

let circleB = new ProgressBar.Circle(containerB, {
  color: '#64DAF9',
  strokeWidth: 8,
  duration: 2000,
  from: { color: '#AAA'},
  to: { color: '#64DAF9'},

  step: function(state, circle){
    circle.path.setAttribute('stroke', state.color);

    let value = Math.round(circle.value() * 254)

    circle.setText(value)
  }
})

// Circulo C
let containerC = document.getElementById("circleC")

let circleC = new ProgressBar.Circle(containerC, {
  color: '#64DAF9', 
  strokeWidth: 8,
  duration: 1800,
  from: { color: '#AAA'},
  to: { color: '#64DAF9'},

  step: function(state, circle){
    circle.path.setAttribute('stroke', state.color);

    let value = Math.round(circle.value() * 32)

    circle.setText(value)
  }
})

// Circulo D
let containerD = document.getElementById("circleD")

let circleD = new ProgressBar.Circle(containerD, {
  color: '#64DAF9',
  strokeWidth: 8,
  duration: 2200,
  from: { color: '#AAA'},
  to: { color: '#64DAF9'},

  step: function(state, circle){
    circle.path.setAttribute('stroke', state.color);

    let value = Math.round(circle.value() * 5243)

    circle.setText(value)
  }
})

//  Iniciando processo de - Loader - quando o usuario chega no elemento
  let dataAreaOffset = $('#data-area').offset()
  let stop = 0

  $(window).scroll(function(e) {
    let scroll = $(window).scrollTop()

    if(scroll > (dataAreaOffset.top - 500) && stop == 0){
      
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      circleD.animate(1.0)
            
      stop = 1
    }

  })

  // Parallax
  setTimeout(function() {

    $('#data-area').parallax({imageSrc: 'img/sofaparallax.jpg'})
    // $('#apply-area').parallax({imageSrc: 'img/pattern.png'})

  }, 250)

  // Filtro do Portfolio
  $('.filter-btn').on('click', function(){

    let type = $(this).attr('id')
    let boxes = $('.project-box')

    $('.main-btn').removeClass('active')
    $(this).addClass('active')

    if(type == 'cas-btn'){
      eachBoxes('cas', boxes)
    } else if (type == 'pol-btn') {
      eachBoxes('pol', boxes)
    } else if (type == 'sal-btn') {
      eachBoxes('sal', boxes)
    } else {
      eachBoxes('all', boxes)
    }
  })

  function eachBoxes(type, boxes) {

    if(type =='all'){
      $(boxes).fadeIn()
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow')
        } else {
          $(this).fadeIn()
        }
      })
    }
  }

  // Scroll para seções do Navbar
  let navBtn = $('.nav-item')

  let bannerSection = $('#mainSlider')
  let aboutSection = $('#about-area')
  let servicesSection = $('#services-area')
  let teamSection = $('#team-area')
  let portfolioSection = $('#portfolio-area')
  let contactSection = $('#contact-area') 
  
  let scrollTop = ''

  $(navBtn).click(function(){

    let btnId = $(this).attr('id')
    console.log(btnId)

    if(btnId == 'about-menu') {
      scrollTo = aboutSection
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection
    } else {
      scrollTo = bannerSection
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: scrollTo.offset().top - 70
    }, 1500)

  })


})