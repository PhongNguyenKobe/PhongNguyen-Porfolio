/*============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'), 
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop:true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // Kiểm tra nếu trường có giá trị
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Thêm và loại bỏ màu
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Hiển thị thông báo
    contactMessage.textContent = 'Please fill in all input fields 📩'
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_uf246gm', 'template_kd6qwzd', '#contact-form', 'XdbVm_GG_uU7tV3S3')
      .then(() => {
        // Hiển thị thông báo và thêm màu
        contactMessage.classList.add('color-blue')
        contactMessage.classList.remove('color-red')
        contactMessage.textContent = 'Message sent ✅'

        // Xóa thông báo sau 3 giây
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 3000);
      })
      .catch((error) => {
        // Thêm màu và hiển thị thông báo lỗi nếu gửi thất bại
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'Failed to send message. Please try again later.'

        console.error('Error:', error)
      })
    // to clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
    
  }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is higher than 350 viewport height, add the show-scroll class to the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME =============== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line'
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true /* Animations repeat */
});

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container `);
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1) `, {origin: 'left'});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2) `, {origin: 'right'});
sr.reveal(`.qualification__content, .services__card`, {interval: 100});

/*=============== CERTIFICATE MODAL ===============*/
// open certificate preview (image or pdf) in a modal
const certLinks = document.querySelectorAll('.cert-link')
if(certLinks.length){
  // create modal element and append to body
  const modal = document.createElement('div')
  modal.id = 'cert-modal'
  modal.className = 'cert-modal'
  modal.innerHTML = `
    <div class="cert-modal__overlay"></div>
    <div class="cert-modal__content">
      <button class="cert-modal__close" aria-label="Close">&times;</button>
      <div class="cert-modal__body"></div>
    </div>`
  document.body.appendChild(modal)

  const modalBody = modal.querySelector('.cert-modal__body')
  const modalClose = modal.querySelector('.cert-modal__close')
  const modalOverlay = modal.querySelector('.cert-modal__overlay')

  const openModal = (type, src) => {
    modalBody.innerHTML = ''
    if(type === 'image'){
      const img = document.createElement('img')
      img.src = src
      img.alt = 'Certificate'
      modalBody.appendChild(img)
    } else if(type === 'pdf'){
      const iframe = document.createElement('iframe')
      iframe.src = src
      modalBody.appendChild(iframe)
    }
    modal.classList.add('show')
  }

  const closeModal = () => {
    modal.classList.remove('show')
    modalBody.innerHTML = ''
  }

  modalClose.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', closeModal)

  certLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // if link has an href to external file but data-src provided, use data-src
      e.preventDefault()
      const type = link.dataset.type || 'image'
      const src = link.dataset.src || link.getAttribute('href')
      if(src) openModal(type, src)
    })
  })
}
