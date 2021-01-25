$(window).scroll(function(){
    if($(this).scrollTop() > 0) {
        $('.header').addClass('header_scrolled');

        return;
    }

    $('.header').removeClass('header_scrolled');
});

$(document).ready(function() {
    new Swiper('.top-slider', {
        loop: true,
    });

    new Swiper('.reviews__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    $('#open-menu').click(function() {
        $('.header__navigation-list').addClass('header__navigation-list_mobile-active');
        $('#wrapper').addClass('wrapper_blocked');
    });

    $('#close-menu').click(function() {
        $('.header__navigation-list').removeClass('header__navigation-list_mobile-active');
        $('#wrapper').removeClass('wrapper_blocked');
    });
});
