/*==================Scroll active section==============*/

const sections = document.querySelectorAll('section[id]')

console.log(sections);

/*==================Scroll reveal section==============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal(`.home-data`)
sr.reveal(`.home-img`, { delay: 500 },)
sr.reveal(`.social-icon`, { delay: 400 })
sr.reveal(`.about-img, .contact-box`, { origin: 'left' })
sr.reveal(`.about-data, .contact-form`, { origin: 'right' })
sr.reveal(`.step-card, .product-card, .footer`, { interval: 100 })
