var swiper1 = new Swiper('.swiper1', {
    slidesPerView:  1,
    slidesPerGroup: 1,

    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper5 = new Swiper('.swiper5', {
    slidesPerView:  5,
    slidesPerGroup: 5,
    spaceBetween: 5, 
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView:  3,
            slidesPerGroup: 3
        },
        // when window width is >= 1200px
        900: {
            slidesPerView:  2,
            slidesPerGroup: 2
        },
        // when window width is >= 640px
        560: {
          slidesPerView:  1,
          slidesPerGroup: 1
        }
    }, 
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});