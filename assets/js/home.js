// About Video
function handelVideoAbout () {
    const aboutVideo = document.querySelector('.js-about__video');
    const modal = document.querySelector('.js-modal');
    const modalOverlay = document.querySelector('.js-modal__overlay');
    const closeBtn = document.querySelector('.modal__video-about-icon');
    
    aboutVideo.addEventListener('click', function () {
        modal.classList.add('open', 'modal--animate-show');
    })
    
    modalOverlay.addEventListener('click', function () {
        modal.classList.remove('open', 'modal--animate-show');
    })
    
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open', 'modal--animate-show');
    })
}
handelVideoAbout();