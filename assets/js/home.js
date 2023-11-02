const modal = document.querySelector('.js-modal');
const modalOverlay = document.querySelector('.js-modal__overlay');
const headerTop = document.querySelector('.header-top');


// Search form
const navSearch = document.querySelector('.js-navbar__search');
const searchModal = document.querySelector('.js-modal__search-form');
const searchCloseBtn = document.querySelector('.search-form__input-icon');
navSearch.addEventListener('click', () => {
    modal.classList.add('open', 'modal--animate-show');
    searchModal.classList.add('modal__search-form--active');
    
})
modalOverlay.addEventListener('click', () => {
    modal.classList.remove('open', 'modal--animate-show');
    searchModal.classList.remove('modal__search-form--active');
})
searchCloseBtn.addEventListener('click', () => {
    modal.classList.remove('open', 'modal--animate-show');
    searchModal.classList.remove('modal__search-form--active');
})

// Cart list
const cartListBtn = document.querySelector('.shopping-cart-link');
const cartListModal = document.querySelector('.js-modal__cart-list');
const cartListClose = document.querySelector('.modal__cart-list-icon');

cartListBtn.addEventListener('click', () => {
    modal.classList.add('open');
    headerTop.classList.add('header-top--active');
    cartListModal.classList.add('modal__cart-list--active');
})
modalOverlay.addEventListener('click', () => {
    modal.classList.remove('open');
    headerTop.classList.remove('header-top--active');
    cartListModal.classList.remove('modal__cart-list--active');
})
cartListClose.addEventListener('click', () => {
    modal.classList.remove('open');
    headerTop.classList.remove('header-top--active');
    cartListModal.classList.remove('modal__cart-list--active');
})


// Countdown
const countDown = () => {
    const desTime = new Date('Jan 1, 2024 00:00:00').getTime();
    const nowTime = new Date().getTime();
    const distance = desTime - nowTime;

    // const nextDay = nowTime + (24*60*60*1000 - 1000);

    // const distance = nextDay - nowTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay  = Math.floor(distance / day);
    const textHour  = Math.floor((distance % day) / hour);
    const textMinute  = Math.floor((distance % hour) / minute);
    const textSecond  = Math.floor((distance % minute) / second);


    document.querySelector('.countdown__hours').innerHTML = textHour;
    document.querySelector('.countdown__minutes').innerHTML = textMinute;
    document.querySelector('.countdown__seconds').innerHTML = textSecond;
}
setInterval(countDown, 1000);

// About Video
function handelVideoAbout () {
    const aboutVideo = document.querySelector('.js-about__video');
    const closeBtn = document.querySelector('.modal__video-about-icon');
    const videoAboutModal = document.querySelector('.js-modal__video-about');
    
    aboutVideo.addEventListener('click', function () {
        modal.classList.add('open', 'modal--animate-show');
        videoAboutModal.classList.add('modal__video-about--active');
    })
    
    modalOverlay.addEventListener('click', function () {
        modal.classList.remove('open', 'modal--animate-show');
        videoAboutModal.classList.remove('modal__video-about--active');

    })
    
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open', 'modal--animate-show');
        videoAboutModal.classList.remove('modal__video-about--active');
    })
}
handelVideoAbout();