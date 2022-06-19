$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplaySpeed: 6000,
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:4
            }
        }
    });
});
