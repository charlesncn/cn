$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navBar').addClass("sticky");
        }
        else{
            $('.navBar').removeClass("sticky");
        }
    });
    // menu icon
    $('.menu_btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });

    // carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $(window).on('load', function(){
        $('#splash').delay(2050).fadeOut('slow');
        $('body').delay(3050).css({'overflow':'visible'});
    })
});