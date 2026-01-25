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
const projectsContainer = document.querySelector('.projects__container')
if (projectsContainer) {
  // eslint-disable-next-line no-unused-vars
  const swiperProjects = new Swiper('.projects__container', {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  })
}

/*=============== SWIPER TESTIMONIAL ===============*/
const testimonialContainer = document.querySelector('.testimonial__container')
if (testimonialContainer) {
  // eslint-disable-next-line no-unused-vars
  const swiperTestimonial = new Swiper('.testimonial__container', {
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  if (!contactName || !contactEmail || !contactProject || !contactMessage) return

  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
    contactMessage.textContent = 'Please fill in all input fields 📩'
  } else {
    emailjs.sendForm('service_uf246gm', 'template_kd6qwzd', '#contact-form', 'XdbVm_GG_uU7tV3S3')
      .then(() => {
        contactMessage.classList.add('color-blue')
        contactMessage.classList.remove('color-red')
        contactMessage.textContent = 'Message sent ✅'
        setTimeout(() => { contactMessage.textContent = '' }, 3000)
      })
      .catch((error) => {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'Failed to send message. Please try again later.'
        console.error('Error:', error)
      })
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', sendEmail)
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (!sectionsClass) return

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

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton && themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  if (themeButton) {
    themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
  }
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== I18N (EN/VI) ===============*/
const LANG_KEY = 'portfolio-lang'
const langToggle = document.getElementById('lang-toggle')

const i18n = {
  en: {
    'nav.logo': 'Phong Nguyen',
    'nav.home': '<i class="ri-home-3-line"></i> Home',
    'nav.skills': '<i class="ri-trophy-line"></i> Skills',
    'nav.qualification': '<i class="ri-book-3-line"></i> Qualification',
    'nav.services': '<i class="ri-briefcase-5-line"></i> Services',
    'nav.projects': '<i class="ri-image-line"></i> Projects',
    'nav.blog': '<i class="ri-bookmark-line"></i> Blog',
    'nav.contact': '<i class="ri-chat-3-line"></i> Contact',

    'home.title': "Hi, I'm Phong <br />Web Developer <br />Living In Vietnam",
    'home.bioTitle': 'BIOGRAPHY',
    'home.bioText': "Hi, I'm Phong, a 4th-year Software Engineering student. Enthusiastic about Frontend Development, with strong skills in HTML/CSS, JavaScript, and modern frameworks.",
    'home.contactTitle': 'CONTACT',
    'home.contactText': 'Ho Chi Minh City, Vietnam <br /> phongnguyenfe@gmail.com <br /> +84 388 562 250',
    'home.servicesTitle': 'SERVICES',
    'home.servicesText': 'Website Development',
    'home.experienceTitle': 'YEARS OF EXPERIENCE',
    'home.experienceValue': 'Academic & Personal Projects',
    'home.completedTitle': 'COMPLETED PROJECT',
    'home.universityTitle': 'UNIVERSITY',
    'home.universityText': 'Nguyễn Tất Thành University – NTT Institute of International Education (NIIE)',

    'skills.title': 'Skills',
    'skills.subtitle': 'Language, technology & skills',
    'skills.frontendTitle': '<i class="ri-code-line"></i> Front-end',
    'skills.libsTitle': '<i class="ri-stack-line"></i> Libraries & frameworks',
    'skills.backendTitle': '<i class="ri-settings-3-line"></i> Back-end',
    'skills.vcTitle': '<i class="ri-git-merge-line"></i> Version Control',

    'qualification.title': 'Qualification',
    'qualification.subtitle': 'Experience & education',
    'qualification.educationTitle': '<i class="ri-pencil-line"></i> Education',
    'qualification.educationDegree': 'Engineer’s Degree in Information Technology,<br />Software Engineering',
    'qualification.educationPlace': 'Nguyễn Tất Thành University – NTT Institute of International Education',
    'qualification.educationYear': '2022 - 2026',
    'qualification.workTitle': '<i class="ri-building-line"></i> Work',
    'qualification.certTitle': '<i class="ri-award-line"></i> Certifications',

    'services.title': 'Services',
    'services.subtitle': 'What I offer',
    'services.card1Title': 'UI/UX <br /> Designer',
    'services.card1Desc': 'Service that provides the best quality and according to customer requirements, with professional work and customer support',
    'services.card2Title': 'Website <br /> Design',
    'services.card2Desc': 'Service that provides the best quality and according to customer requirements, with professional work and customer support',
    'services.card3Title': 'Digital <br /> Animator',
    'services.card3Desc': 'Service that provides the best quality and according to customer requirements, with professional work and customer support',

    'projects.title': 'Projects',
    'projects.subtitle': 'Most recent work',

    'learning.title': 'Learning & Goals',
    'learning.subtitle': 'What I’m focusing on right now',
    'learning.item1Desc': 'Leveling up front-end depth: building a design-system starter (tokens, components, docs) with React + TypeScript to speed up future projects.',
    'learning.item1Title': 'Focus',
    'learning.item1Tag': 'UI system thinking',
    'learning.item2Desc': 'Strengthening performance practices: image optimization, code-splitting, and Core Web Vitals budgeting for personal projects.',
    'learning.item2Title': 'Focus',
    'learning.item2Tag': 'Performance',
    'learning.item3Desc': 'Collaboration habits: writing clearer PRs, adding concise docs, and improving accessibility checklists on each build.',
    'learning.item3Title': 'Focus',
    'learning.item3Tag': 'Team readiness',

    'contact.title': 'Contact Me',
    'contact.subtitle': 'Get in touch',
    'contact.talkTitle': '<i class="ri-chat-3-line"></i>Talk to me',
    'contact.emailLabel': 'Email',
    'contact.cvLabel': 'My CV',
    'contact.downloadCta': 'Download',
    'contact.zaloLabel': 'Zalo',
    'contact.fbLabel': 'Facebook',
    'contact.writeCta': 'Write me',
    'contact.formTitle': '<i class="ri-send-plane-line"></i>Write me your project',
    'contact.nameLabel': 'Names',
    'contact.emailFieldLabel': 'Mail',
    'contact.projectLabel': 'Project',
    'contact.submitCta': 'Submit',
    'contact.namePlaceholder': 'Write your names',
    'contact.emailPlaceholder': 'Write your mail',
    'contact.projectPlaceholder': 'Write your project',

    'footer.role': 'Web Developer',

    'blog.heroTitle': 'Blog & Resources <br /> The things I am learning and saving',
    'blog.heroDesc': 'Short notes, trusted sources, and checklists I use for self-learning. This page updates over time with new posts and resources.',
    'blog.latestTitle': 'Latest Notes',
    'blog.latestSubtitle': 'Trusted sources I am following',
    'blog.card1Tag': 'Performance',
    'blog.card1Title': 'Frontend Performance Checklist',
    'blog.card1Desc': 'Optimize images, bundles, Core Web Vitals. Tools I use: Lighthouse, WebPageTest, Squoosh.',
    'blog.card2Tag': 'UI systems',
    'blog.card2Title': 'Design Token Starter',
    'blog.card2Desc': 'How I organize color, spacing, typography and bring them into React/TS with Style Dictionary + Storybook.',
    'blog.card3Tag': 'Career',
    'blog.card3Title': 'Frontend learning path for students',
    'blog.card3Desc': 'Study plan: solid HTML/CSS, JS/TS basics, React fundamentals, practice via mini projects.',
    'blog.aiTitle': 'AI Tools Comparison',
    'blog.aiSubtitle': 'Comparison of popular AI tools today',
    'blog.youtubeTitle': 'YouTube Channels',
    'blog.youtubeSubtitle': 'Great programming channels from Vietnam and worldwide',
    'blog.youtubeVietnamese': '<i class="ri-flag-line"></i> Vietnamese channels',
    'blog.youtubeInternational': '<i class="ri-global-line"></i> International channels',
  },
  vi: {
    'nav.logo': 'Phong Nguyen',
    'nav.home': '<i class="ri-home-3-line"></i> Trang chủ',
    'nav.skills': '<i class="ri-trophy-line"></i> Kỹ năng',
    'nav.qualification': '<i class="ri-book-3-line"></i> Học vấn',
    'nav.services': '<i class="ri-briefcase-5-line"></i> Dịch vụ',
    'nav.projects': '<i class="ri-image-line"></i> Dự án',
    'nav.blog': '<i class="ri-bookmark-line"></i> Blog',
    'nav.contact': '<i class="ri-chat-3-line"></i> Liên hệ',

    'home.title': 'Xin chào, tôi là Phong <br /> Web Developer <br /> Sống tại Việt Nam',
    'home.bioTitle': 'TIỂU SỬ',
    'home.bioText': 'Tôi là sinh viên năm 4 ngành Kỹ thuật Phần mềm, đam mê Frontend, vững HTML/CSS, JavaScript và các framework hiện đại.',
    'home.contactTitle': 'LIÊN HỆ',
    'home.contactText': 'TP. Hồ Chí Minh, Việt Nam <br /> phongnguyenfe@gmail.com <br /> +84 388 562 250',
    'home.servicesTitle': 'DỊCH VỤ',
    'home.servicesText': 'Phát triển Website',
    'home.experienceTitle': 'KINH NGHIỆM',
    'home.experienceValue': 'Dự án học thuật & cá nhân',
    'home.completedTitle': 'DỰ ÁN ĐÃ HOÀN THÀNH',
    'home.universityTitle': 'TRƯỜNG',
    'home.universityText': 'ĐH Nguyễn Tất Thành – Viện Quốc Tế NTT (NIIE)',

    'skills.title': 'Kỹ năng',
    'skills.subtitle': 'Ngôn ngữ, công nghệ & kỹ năng',
    'skills.frontendTitle': '<i class="ri-code-line"></i> Front-end',
    'skills.libsTitle': '<i class="ri-stack-line"></i> Thư viện & framework',
    'skills.backendTitle': '<i class="ri-settings-3-line"></i> Back-end',
    'skills.vcTitle': '<i class="ri-git-merge-line"></i> Quản lý mã nguồn',

    'qualification.title': 'Học vấn & Kinh nghiệm',
    'qualification.subtitle': 'Kinh nghiệm & giáo dục',
    'qualification.educationTitle': '<i class="ri-pencil-line"></i> Học tập',
    'qualification.educationDegree': 'Kỹ sư Công nghệ Thông tin,<br />Kỹ thuật Phần mềm',
    'qualification.educationPlace': 'ĐH Nguyễn Tất Thành – Viện Quốc Tế NTT (NIIE)',
    'qualification.educationYear': '2022 - 2026',
    'qualification.workTitle': '<i class="ri-building-line"></i> Công việc',
    'qualification.certTitle': '<i class="ri-award-line"></i> Chứng chỉ',

    'services.title': 'Dịch vụ',
    'services.subtitle': 'Những gì tôi cung cấp',
    'services.card1Title': 'UI/UX <br /> Designer',
    'services.card1Desc': 'Dịch vụ chất lượng cao, đáp ứng yêu cầu khách hàng với quy trình chuyên nghiệp và hỗ trợ tận tâm',
    'services.card2Title': 'Website <br /> Design',
    'services.card2Desc': 'Thiết kế và phát triển website theo nhu cầu, tối ưu trải nghiệm và hiệu năng',
    'services.card3Title': 'Digital <br /> Animator',
    'services.card3Desc': 'Thiết kế chuyển động và đồ họa số phục vụ nội dung web',

    'projects.title': 'Dự án',
    'projects.subtitle': 'Các sản phẩm gần đây',

    'learning.title': 'Học tập & Mục tiêu',
    'learning.subtitle': 'Những gì tôi đang tập trung',
    'learning.item1Desc': 'Nâng cao chiều sâu front-end: xây bộ design system (token, component, docs) với React + TypeScript để tăng tốc dự án.',
    'learning.item1Title': 'Trọng tâm',
    'learning.item1Tag': 'Tư duy hệ thống UI',
    'learning.item2Desc': 'Củng cố hiệu năng: tối ưu ảnh, code-splitting, ngân sách Core Web Vitals cho dự án cá nhân.',
    'learning.item2Title': 'Trọng tâm',
    'learning.item2Tag': 'Hiệu năng',
    'learning.item3Desc': 'Thói quen cộng tác: viết PR rõ ràng, bổ sung docs gọn, cải thiện checklist accessibility mỗi lần build.',
    'learning.item3Title': 'Trọng tâm',
    'learning.item3Tag': 'Sẵn sàng làm việc nhóm',

    'contact.title': 'Liên hệ',
    'contact.subtitle': 'Kết nối với tôi',
    'contact.talkTitle': '<i class="ri-chat-3-line"></i>Trao đổi nhanh',
    'contact.emailLabel': 'Email',
    'contact.cvLabel': 'CV của tôi',
    'contact.downloadCta': 'Tải xuống',
    'contact.zaloLabel': 'Zalo',
    'contact.fbLabel': 'Facebook',
    'contact.writeCta': 'Nhắn tin',
    'contact.formTitle': '<i class="ri-send-plane-line"></i>Mô tả dự án của bạn',
    'contact.nameLabel': 'Họ và tên',
    'contact.emailFieldLabel': 'Email',
    'contact.projectLabel': 'Dự án',
    'contact.submitCta': 'Gửi',
    'contact.namePlaceholder': 'Nhập họ và tên',
    'contact.emailPlaceholder': 'Nhập email của bạn',
    'contact.projectPlaceholder': 'Mô tả dự án',

    'footer.role': 'Lập trình viên Web',

    'blog.heroTitle': 'Blog & Tài nguyên <br /> Những thứ mình đang học và lưu lại',
    'blog.heroDesc': 'Ghi chú ngắn, nguồn uy tín và checklist mình dùng để tự học. Trang sẽ được cập nhật thêm khi có bài mới.',
    'blog.latestTitle': 'Ghi chú mới nhất',
    'blog.latestSubtitle': 'Nguồn đáng tin cậy mình đang theo dõi',
    'blog.card1Tag': 'Hiệu năng',
    'blog.card1Title': 'Frontend Performance Checklist',
    'blog.card1Desc': 'Tối ưu ảnh, bundle, Core Web Vitals. Công cụ: Lighthouse, WebPageTest, Squoosh.',
    'blog.card2Tag': 'UI systems',
    'blog.card2Title': 'Design Token Starter',
    'blog.card2Desc': 'Tổ chức màu, spacing, typography và đưa vào React/TS với Style Dictionary + Storybook.',
    'blog.card3Tag': 'Sự nghiệp',
    'blog.card3Title': 'Lộ trình học FE cho sinh viên',
    'blog.card3Desc': 'Lịch học/ôn: HTML/CSS chuẩn, JS/TS căn bản, React fundamentals, luyện mini projects.',
    'blog.aiTitle': 'So sánh công cụ AI',
    'blog.aiSubtitle': 'So sánh các công cụ AI phổ biến hiện nay',
    'blog.youtubeTitle': 'Kênh YouTube',
    'blog.youtubeSubtitle': 'Kênh học lập trình hay từ Việt Nam và quốc tế',
    'blog.youtubeVietnamese': '<i class="ri-flag-line"></i> Kênh tiếng Việt',
    'blog.youtubeInternational': '<i class="ri-global-line"></i> Kênh quốc tế',
  },
}

const applyLanguage = (lang = 'en') => {
  const dict = i18n[lang] || i18n.en
  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    const isHeader = el.closest('.header') !== null
    const value = isHeader ? i18n.en[key] : (dict[key] || i18n.en[key])
    if (value) {
      el.innerHTML = value
    }
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key])
    }
  })

  const activeButtons = document.querySelectorAll('.lang-toggle__btn')
  activeButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang)
  })
}

const initLanguage = () => {
  const savedLang = localStorage.getItem(LANG_KEY) || 'en'
  applyLanguage(savedLang)

  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      const target = e.target
      if (target.matches('.lang-toggle__btn')) {
        const lang = target.dataset.lang || 'en'
        localStorage.setItem(LANG_KEY, lang)
        applyLanguage(lang)
      }
    })
  }
}

initLanguage()


/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })

  sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container `)
  sr.reveal(`.home__info div`, { delay: 600, origin: 'bottom', interval: 100 })
  sr.reveal('.skills__content', { interval: 100 })
  sr.reveal('.contact__content:nth-child(1)', { origin: 'left' })
  sr.reveal('.contact__content:nth-child(2)', { origin: 'right' })
  sr.reveal(`.qualification__content, .services__card`, { interval: 100 })
}

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
      const openInNewTab = link.dataset.open === 'tab'
      if(openInNewTab && src){
        window.open(src, '_blank')
        return
      }
      if(src) openModal(type, src)
    })
  })
}
