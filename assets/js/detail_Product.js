// Detail Advantage
const moreBtn = document.querySelector('.detail__advantage-more');
const advantageHideItems = document.querySelectorAll('.detail__advantage-item--hide');

moreBtn.addEventListener('click', () => {
    if(!moreBtn.classList.contains('detail__advantage-shrink')) {
        moreBtn.classList.add('detail__advantage-shrink');
        moreBtn.innerHTML = "< Thu gọn";
    } 
    else {
        moreBtn.classList.remove('detail__advantage-shrink');
        moreBtn.innerHTML = "Xem thêm >";
    }
    advantageHideItems.forEach((advantageHideItem) => {
        advantageHideItem.classList.toggle('detail__advantage-item--show');
    })
})

// slide show
const imgFeature = document.querySelector('.detail__img');
const imgFeatureList = document.querySelector('.detail__img-feature-list');
const listImg = document.querySelectorAll('.list-img__item-img');
const imgListWrap = document.querySelector('.detail__list-img');
const prevBtn = document.querySelector('.detail__img-control-prev');
const nextBtn = document.querySelector('.detail__img-control-next');
const prevSubBtn = document.querySelector('.detail__list-img-wrapper .control-prev');
const nextSubBtn = document.querySelector('.detail__list-img-wrapper .control-next');
const currentOrder = document.querySelector('.detail__img-current');

let currentIndex = 0;
let currentIndexSub = 0;
var Width = imgFeature.offsetWidth;
var widthImgSub = document.querySelector('.list-img__item-img').offsetWidth;


listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        setTimeout(() => {
            currentIndex = index;
            currentIndexSub = index;
            currentOrder.innerHTML = `${index + 1}`
            prevSubBtn.classList.remove('control-prev--hide');
            imgFeatureList.style.transform = `translateX(${Width * -1 * currentIndex}px)`
            if(currentIndex <= listImg.length - 4)
                imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * currentIndexSub + (0.5 * currentIndexSub)) + (-10*currentIndexSub)}px)`
            else    
                imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * (listImg.length - 4) + (0.5 * (listImg.length - 4))) + (-10*(listImg.length - 4))}px)`
        },200);
    })
})
prevBtn.addEventListener('click', e => {
    // handle imgFeature list
    if(currentIndex == 0)
        currentIndex = listImg.length - 1;
    else    
        currentIndex--;
    setTimeout(() => {
        imgFeatureList.style.transform = `translateX(${Width * -1 * currentIndex}px)`
        currentOrder.innerHTML = `${currentIndex + 1}`
    }, 200)

    // handle imgSubList
    currentIndexSub = currentIndex;
    if(currentIndexSub >= listImg.length - 4)
        currentIndexSub = listImg.length -4;
    listImg.forEach((imgElement, index) => {
        imgElement.classList.remove('list-img__item-img--scale');
    })
    setTimeout(() => {
        listImg[currentIndex].classList.add('list-img__item-img--scale');
        imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * currentIndexSub +(0.5 * currentIndexSub)) + (-10*currentIndexSub)}px)`
    }, 200)

})
nextBtn.addEventListener('click', e => {
    // handle imgFeature list
    if(currentIndex == listImg.length - 1)
        currentIndex = 0;
    else    
        currentIndex++;
    setTimeout(() => {
        imgFeatureList.style.transform = `translateX(${Width * -1 * currentIndex}px)`
        currentOrder.innerHTML = `${currentIndex + 1}`;
    }, 200)

    // handle imgSubList
    currentIndexSub = currentIndex;
    if(currentIndexSub >= listImg.length - 4) {
        currentIndexSub = listImg.length -4;
    }
    listImg.forEach((imgElement, index) => {
        imgElement.classList.remove('list-img__item-img--scale');
    })
    setTimeout(() => {
        listImg[currentIndex].classList.add('list-img__item-img--scale');
        imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * currentIndexSub + (0.5 * currentIndexSub)) + (-10*currentIndexSub)}px)`
    }, 200)
    
})
prevSubBtn.addEventListener('click', e => {
    nextSubBtn.classList.remove('control-next--hide');
    if(currentIndexSub >= listImg.length - 4)
        currentIndexSub = listImg.length -4;
    if(currentIndexSub == 0) {
        setTimeout(() => {
            prevSubBtn.classList.add('control-prev--hide');
        }, 1000)
    }
    else    
        currentIndexSub--;
    setTimeout(() => {
        imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * currentIndexSub + (0.5 * currentIndexSub)) + (-10*currentIndexSub)}px)`
    }, 200)

    if(currentIndexSub == 0) {
        prevSubBtn.classList.add('control-prev--hide');
    }

})
nextSubBtn.addEventListener('click', e => {
    prevSubBtn.classList.remove('control-prev--hide');
    if(currentIndexSub >= listImg.length - 4) {
        currentIndexSub = listImg.length - 4;
        setTimeout(() => {
            nextSubBtn.classList.add('control-next--hide');
        }, 2000)
    }
    else {
        currentIndexSub++;
    }
    setTimeout(() => {
        imgListWrap.style.transform = `translateX(${(widthImgSub * -1 * currentIndexSub + (0.5 * currentIndexSub)) + (-10*currentIndexSub)}px)`
    }, 200)
})

// switch desciption <-> review
const descriptionLabel = document.querySelector('.detail__des-heading-description')
const reviewLabel = document.querySelector('.detail__des-heading-review')
const detailDescription = document.querySelector('.detail__des-description')
const detailReview = document.querySelector('.detail__des-review')

descriptionLabel.addEventListener('click', () => {
    descriptionLabel.classList.add('active')
    reviewLabel.classList.remove('active')
    detailDescription.classList.add('active')
    detailReview.classList.remove('active')
})
reviewLabel.addEventListener('click', () => {
    descriptionLabel.classList.remove('active')
    reviewLabel.classList.add('active')
    detailDescription.classList.remove('active')
    detailReview.classList.add('active')
})


// detail more
const moreDetailBtn = document.querySelector('.detail__description-more-btn')
const moreDescription = document.querySelector('.detail__description-more')

moreDetailBtn.addEventListener('click', () => {
    moreDetailBtn.classList.add('hide')
    moreDescription.classList.add('show')
})
