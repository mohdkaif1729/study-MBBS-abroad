const hamburger = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', (e)=>{
    mobileNav.classList.remove('-translate-x-full');
})

crossBtn.addEventListener('click', (e)=>{
    mobileNav.classList.add('-translate-x-full');
})