$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/Arrow-right.png" alt="prev arrow"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/Arrow-left.png" alt="next arrow"></button>'
    });
    $('.Staging__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
    });
    });


 
